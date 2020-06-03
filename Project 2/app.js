var budgetController = (function(){
    
//functions constrcutors    
var Expense = function(id , description , value){
    this.id = id;
    this.description = description;
    this.value = value
    this.percentage = -1
}
//calculate the percentages for each expense value
Expense.prototype.calcPercentage = function (totalIncome){

    if(totalIncome > 0 ){
        this.percentage = Math.round((this.value/totalIncome)*100)
    }else{
        this.percentage = -1
    }

};
//return the variable percentage of the expense constructor funtion
Expense.prototype.getPercentage = function (){
    return this.percentage;
}

var Income = function (id, description, value){
    this.id = id;
    this.description = description;
    this.value = value
}

var calculateTotal = function (type){
    var sum = 0;
    data.allItems[type].forEach(function(cur){
        sum = sum + cur.value;
        
        data.totals[type] = sum;

    })
}

var data = {
    allItems :{
        exp : [],
        inc : []
    },
    totals : {
        exp : 0,
        inc: 0
    } ,
    budget : 0,
    percentage : -1    
};

return {
    addItem : function (type, des , val){

       var newItem, ID;

       // Create a new ID

       if(data.allItems[type].length > 0 ){
           ID = data.allItems[type][data.allItems[type].length - 1 ].id + 1
       }else{
           ID = 0
       }       

       // Create new item based on "inc" or "exp" type
       if(type === "exp"){
           newItem = new Expense (ID, des, val)
       } else if (type === "inc"){
           newItem = new Income (ID, des, val)
       } 

       //Push it into our data structure
       data.allItems[type].push(newItem);

       //Return the new element

       return newItem
    },
    //delete item
    deleteItem : function (type, id){
        var index, ids
        ids = data.allItems[type].map(function (current){
           return current.id
        })

        index = ids.indexOf(id)

        if(index !== -1){
            data.allItems[type].splice(index, 1)
        }    
    },
    calculateBudget : function (){

        //calculate the total incomes and total expenses

        calculateTotal("exp");
        calculateTotal("inc");

        //calculate the budget = incomes - expenses 
        data.budget = data.totals.inc - data.totals.exp
        //calculathe the percentage of income that we spent

        if (data.totals.inc > 0 ){
            data.percentage = Math.round((data.totals.exp/data.totals.inc)*100)
        }else{
            data.percentage = -1
        }       

    },
    calculatePercentages : function (){
    //using the method calcPerecentage
        data.allItems.exp.forEach(function (cur){

            cur.calcPercentage(data.totals.inc)
  
        })

    },
    //get the percentages using the getpercentage 
    getPercentages : function (){

        var allPerc =   data.allItems.exp.map(function(cur){

            return cur.getPercentage()

        })
        return allPerc;
    },
    getBudget : function(){
         return {
         budget: data.budget,
         totalInc : data.totals.inc,
         totalExp : data.totals.exp,
         percentage : data.percentage}
    },
    testing : function (){
        console.log(data)
    }
}

})();

var uiController = (function () {
// classes of the differents html elements
    var classes= {
        addType :  ".add__type",
        textType : ".add__description",
        numberType : ".add__value",
        clickType : ".add__btn", 
        divIncome : ".income__list",
        divExpense : ".expenses__list",
        budgetLabel : ".budget__value",
        incomeLabel : ".budget__income--value",
        expenseLabel : ".budget__expenses--value",
        percentageLabel : ".budget__expenses--percentage",
        container : ".container",
        expensesPercLabel : ".item__percentage",
        dataLabel : ".budget__title--month"
    }

    //we are goin to apply format to the numbers on the ui

    var formatNumber = function (num, type){
        var numSplit , int, dec;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split(".")

        int = numSplit[0];
        if(int.length > 3){
            int = int.substr(0,int.length - 3 ) +  "," + int.substr(int.length - 3 ,3)  
        }

        dec = numSplit[1]

        return (type === "exp" ? "-" : "+") + " " + int + "." + dec

    }

    var nodeListForEach = function(list, callback){
        for(var i = 0 ; i < list.length ; i++ ){
            callback(list[i], i)
        }
    };

    return {
       values : function(){
           return {
            addValue : document.querySelector(classes.addType).value,
            textValue : document.querySelector(classes.textType).value,
            numberValue : parseFloat(document.querySelector(classes.numberType).value)
           }                 
       } ,          
       allClass : function() {
           return classes
       } ,
       addListItem : function (obj, type){
           var html, newHTML, element;

         if(type === "inc"){

            element = classes.divIncome;

            html =  '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

         } else if(type === "exp"){

            element = classes.divExpense;

            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            
         }

       newHTML = html.replace('%id%', obj.id);
       newHTML = newHTML.replace('%description%', obj.description);
       newHTML = newHTML.replace('%value%', formatNumber(obj.value))

       document.querySelector(element).insertAdjacentHTML("beforeend",newHTML)

       },

       //delete item of the UI
       deleteListItem : function (selectorID){
           
        var el = document.getElementById(selectorID)

        el.parentNode.removeChild(el)


       },
       clearFields: function(){
          var fields , fieldsArray;

          fields = document.querySelectorAll(classes.textType+","+classes.numberType);

          fieldsArray = Array.prototype.slice.call(fields);

          fieldsArray.forEach(function (current){
              current.value = "";
          });
        fieldsArray[0].focus()
    
       }, 
       displayBudget : function (obj){
       //display the budget on the ui
        var type;
        obj.budget > 0 ? type = "inc" : type = "exp"

        document.querySelector(classes.budgetLabel).textContent = formatNumber(obj.budget, type);
        document.querySelector(classes.incomeLabel).textContent = formatNumber(obj.totalInc, "inc");
        document.querySelector(classes.expenseLabel).textContent = formatNumber(obj.totalExp, "exp");
       
        if(obj.percentage > 0){
            document.querySelector(classes.percentageLabel).textContent = obj.percentage + "%";
        }else{
            document.querySelector(classes.percentageLabel).textContent = "--";
        }

       },
          // we are going to dsiplay the percentages

      displayPercentages : function (percentages){

        var fields = document.querySelectorAll(classes.expensesPercLabel);

      

        nodeListForEach(fields, function (current, index){

            if(percentages[index] > 0){
                current.textContent = percentages[index] + "%"
            }else{
                current.textContent = "--"
            }

        });

      },
      
      displayMonth : function (){
          var now, year, months, month ;

          now = new Date();

          months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
          month = now.getMonth(months);
          year = now.getFullYear();

          document.querySelector(classes.dataLabel).textContent = months[month]+ ' ' + year;
      },
      changedType : function (){
          var fields = document.querySelectorAll(
              classes.addType + "," + classes.textType + "," + classes.numberType
          )

          nodeListForEach(fields, function (cur){
              cur.classList.toggle('red-focus')
          } )

          document.querySelector(classes.clickType).classList.toggle('red')
      }

    }   
     
})();

var controller = (function (budgetCtrl,uiCtrl) {

    var setupEventListeners = function(){
        var controllerClasses = uiCtrl.allClass()
    //event listeners (click and keypress)
    
    document.querySelector(controllerClasses.clickType).addEventListener("click", ctrlAddItem)

    document.addEventListener("keypress", function(e){
        if (e.keyCode === 13 || e.which === 13 ){
             return  ctrlAddItem();
           }
      })

      //delete event listener

      document.querySelector(controllerClasses.container).addEventListener("click", ctrlDeleteItem)
      document.querySelector(controllerClasses.addType).addEventListener("change", uiCtrl.changedType)
}    

// to up date the the budget

var updateBudget = function (){
    //calculate the budget
  budgetCtrl.calculateBudget()
    //return the budget 
  var budget = budgetCtrl.getBudget()
    //display the budget on the ui
  uiCtrl.displayBudget(budget)
    
}

var updatePercentajes = function (){

    // 1. calculate percentajes
    budgetCtrl.calculatePercentages();
    // 2. read percentajes from the budget controller
    var percentages =  budgetCtrl.getPercentages()
    // 3. update the ui with the new percentages 
    uiCtrl.displayPercentages(percentages)
}

    var ctrlAddItem = function (){

      var input, newItem, addItem, clear;
    //1. get the field input data 

      input = uiCtrl.values()

      //determinate if add description and value are empty

      if (input.textValue !== "" && !isNaN(input.numberValue) && input.numberValue > 0 ){
        
      //2. add the item to the budget controller 

      newItem = budgetCtrl.addItem(input.addValue, input.textValue, input.numberValue)

      //3. add the item to the  UI
  
      addItem = uiController.addListItem(newItem, input.addValue)
      //4. clear the fields
      
      clear = uiController.clearFields() 

      //5.calculate and update budget
      updateBudget()

      // 6. calculate and update percentajes 

      updatePercentajes()
      }

    
         
    }

    var ctrlDeleteItem = function(event){
        var itemID, splitID ,type , ID ;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id

        //only if the id is defined

        if(itemID){
            splitID = itemID.split("-")

            type = splitID[0]

            ID = parseInt(splitID[1])

        //1.delete the item from the data structure
        budgetCtrl.deleteItem(type, ID)
        //2.delete the item from the ui
        uiCtrl.deleteListItem(itemID)
        //3. update and show the new budget 
        
        updateBudget()

        // 4.calculate and update percentajes 
        updatePercentajes()
        }

        
    }


    return {
        
        init : function(){
            console.log("The application has started");
            uiCtrl.displayMonth()
            uiCtrl.displayBudget({
                budget: 0,
                totalInc : 0,
                totalExp : 0,
                percentage : 0            
           })

            setupEventListeners()
        }
    }


   

})(budgetController,uiController);


controller.init()