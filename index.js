// First code challenge

/* var mMass = 90;
var mHeight = 1.80;

var jMass = 80 ;  
var jHeight = 1.70 ;

var mBMI =  mMass/(mHeight*mHeight);

var jBMI =  jMass/(jHeight*jHeight);

var markVSjohn = mBMI > jBMI;

console.log('is Marks BMI higher than Johns BMI?'+' '+ markVSjohn ) */

// Second code challenge 

var johnAverangeScore = (150 + 120 + 103)/3;  //104

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


console.log(johnAverangeScore + ' ' + ' ' + mikeAverangeScore + ' ' + maryAverangeScore )