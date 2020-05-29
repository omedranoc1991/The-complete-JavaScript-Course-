var budgetController = (function(){
    


})();

var uiController =(function () {
// classes of the differents html elements
    var classes= {
        addType :  ".add__type",
        textType : ".add__description",
        numberType : ".add__value",
        clickType : ".add__btn",        
    }

    return {
       values : function(){
           return {
            addValue : document.querySelector(classes.addType).value,
            textValue : document.querySelector(classes.textType).value,
            numberValue : document.querySelector(classes.numberType).value
           }                 
       } ,          
       allClass : function() {
           return classes
       } 
    }    
    
})();

var controller = (function (budgetCtrl,uiCtrl) {

    var controllerClasses = uiCtrl.allClass()

    var ctrlAddItem = function (){

    //1. get the field input data 

      console.log(uiCtrl.values())


    //2. add the item to the budget controller 
    //3. add the item to the  UI
    //4. calculate the budget 
    //5. display the budget in the UI
       
    }



    //event listeners (click and keypress)
    
   document.querySelector(controllerClasses.clickType).addEventListener("click", ctrlAddItem)

   document.addEventListener("keypress", function(e){
           if (e.keyCode === 13 || e.which === 13 ){
              return  ctrlAddItem();
           }
   })

})(budgetController,uiController);