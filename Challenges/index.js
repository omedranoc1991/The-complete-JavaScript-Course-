// Challenge 1

/* var mMass = 90;
var mHeight = 1.80;

var jMass = 80 ;  
var jHeight = 1.70 ;

var mBMI =  mMass/(mHeight*mHeight);

var jBMI =  jMass/(jHeight*jHeight);

var markVSjohn = mBMI > jBMI;

console.log('is Marks BMI higher than Johns BMI?'+' '+ markVSjohn ) */

// Challenge 2 

/*var johnAverangeScore = (150 + 120 + 103)/3;  //104

var mikeAverangeScore = (116 +  94 + 123)/3;  //111

var maryAverangeScore = (116 + 94 + 123)/3;   // 112

if (johnAverangeScore > mikeAverangeScore &&  johnAverangeScore > maryAverangeScore ){
        console.log("John wins")
    } else if (
    mikeAverangeScore > johnAverangeScore &&   mikeAverangeScore > maryAverangeScore){
        console.log("Mike wins")
    }else if(
    maryAverangeScore > johnAverangeScore && maryAverangeScore > mikeAverangeScore  ){
        console.log("Mary wins")
    } else {
        "there is a draw"
    }


console.log(johnAverangeScore + ' ' + ' ' + mikeAverangeScore + ' ' + maryAverangeScore )*/

// Challenge 3

/*function tipCalculator (bill) {
     if (bill < 50){ 
         return bill * 0.2;
      }else if(bill >= 50 && bill < 200){
          return bill * 0.15;
      }else{
          return bill * 0.1;
      } 

}; 

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var totalBills = [bills[0] + tips[0],
                  bills[1] + tips[1], 
                  bills[2] + tips[2]];


console.log(totalBills);*/

// Challenge 4

/*var john = {
    name : "John",
    mass : 92,
    height : 1.95,
    calcBMI : function() {
       this.bmi = this.mass/(this.height*this.height) ;
       return this.bmi;
    }
};

var mark = {
    name : "Mark",
    mass : 78,
    height : 1.69,
    calcBMI : function() {
        this.bmi = this.mass/(this.height*this.height) ;
        return this.bmi;
    }
};


if(john.calcBMI() > mark.calcBMI()){
    console.log("John's BMI highest than Mark"+": John has"+" "+john.bmi+" "+"BMI")
}else if(john.bmi < mark.bmi){
    console.log("Mark's BMI highest than John"+": Mark has"+" "+mark.bmi+" "+"BMI")
}else{
    console.log("john and Mark have the same BMI")
}

console.log(john, mark)*/

// Challenge 5



var john = {
   tips : [], 
   total : [],
   bills : [124, 48, 268, 180, 42],
   calcTip : function (){
      
      for (var i = 0 ; i < this.bills.length ; i++)
      {
          
          if (this.bills[i] < 50){
            this.tips[i] = this.bills[i] * 0.2;
            this.total[i] = this.bills[i] + this.tips[i];
          } else if ( this.bills[i] >= 50 && this.bills[i] < 200 ){
            this.tips[i] = this.bills[i] * 0.15;
            this.total[i] = this.bills[i] + this.tips[i];
          } else {
            this.tips[i] = this.bills[i] * 0.1;
            this.total[i] = this.bills[i] + this.tips[i];
          }
          
      }

   }
  
};

john.calcTip();

var mark = {
    bills : [77, 475, 110, 45],
    tips : [],
    total : [],
    calcTip : function (){
        var percentage;
        for(var i = 0 ; i < this.bills.length ; i++ ){
            var bill = this.bills[i];
            if (bill < 100){ percentage = 0.2;
            } else if (bill >= 100 && bill < 300){
                percentage = 0.1;
            } else {
                percentage = .25;
            }
            this.tips[i] = bill * percentage;
            this.total[i] = this.tips[i] + bill;

        }
        
    }
};

mark.calcTip();

function calcAverage (tips){
    var sum = 0;
    for(var j = 0 ; j < tips.length ; j++)
     { sum = sum + tips[j];}
     return sum / tips.length
}

john.average = calcAverage (john.tips);
mark.average = calcAverage (mark.tips);

console.log(john, mark);

if (john.average > mark.average){
      console.log("John's family paid more tips");
}else if (mark.average> john.average) {
      console.log("Mark's family paid more tips") 
}else{
    console.log("they paid the same tips")
}