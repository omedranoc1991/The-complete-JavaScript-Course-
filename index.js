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

var johnObject = {
    name :  "John",
    mass : 75,
    height : 1.70 
};

var markObject = {
    name : "Mark",
    mass : 80,
    height : 1.90
};

console.log(johnObject);