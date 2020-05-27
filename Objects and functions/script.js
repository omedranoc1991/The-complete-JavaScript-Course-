
/*
// constructor function
var FamilysMember = function (name, birthYear, relationship ){
    this.name = name ;
    this.birthYear = birthYear ; 
    this.relationship = relationship ; 

}

// to inherit methods and properties
FamilysMember.prototype.calculateAge = function() {
   console.log(2020 - this.birthYear); 
}

FamilysMember.prototype.lastName = "Medrano";

// new objects based constructor function 
var saul = new FamilysMember ("Saul", 1985 , "Brother" ) ;
var ricardo = new FamilysMember ("Ricardo", 1959, "Father");
var marina = new FamilysMember ("Marina",1965,"Mother" );
var oscar = new FamilysMember ("Oscar",1991, "I am");

// calling the calculateAge method
saul.calculateAge();
ricardo.calculateAge();
marina.calculateAge();
oscar.calculateAge();

console.log(oscar.lastName)*/

//Passing functions as arguments

/*var familyAge = [1959, 1965, 1985, 2005];

var arrayCalc = function (array, fn){
    var ages = [];
    for (var i = 0 ; i < array.length; i++){
        ages.push(fn(array[i]));
    }
return ages;
}

function calcAge (element){
    return 2020 - element;
}

function isFullAge (element){
    return element >= 18;   
}

//maximum heart rate

function maxHeartRate (element){
    if (element >= 18 && element <=81){
        return  Math.round(206.9 - (0.67 * element));
    }else {return "YOUR AGE DOES NOT APPLY"}
    
}

var finalAges = arrayCalc(familyAge,calcAge);
var fullAge = arrayCalc(finalAges, isFullAge);
var mhr = arrayCalc(finalAges,maxHeartRate);

console.log(finalAges);
console.log(fullAge);
console.log(mhr); */

// Functions returning functions 

/*function interviewJobs (job){
    if(job === "Taxi Driver"){
        return function(name){
            console.log("How much experience driving do you have "+name+" ?")};
        } else if (job === "Housewife"){
            return function (name){
                console.log("Do you like to cook "+name+" ?")};
            }else { 
                 return function(name){
                     console.log(name +" tell me what do you do ?")};
                 }               
    }


interviewJobs("Taxi Driver")("Ricardo");
interviewJobs("Housewife")("Marina");
interviewJobs("Unemployed")("Oscar") */

// iife

/*(function (goodLuck){
    var score = Math.random()*10;
    console.log(score >= 5 - goodLuck) 
})(3); */

//closures 

/*function retirement (ageRetirement){
     var x = " years left to retirement";     
     return function(birthYear){
         var age = 2020 - birthYear;
         console.log((ageRetirement - age) + x)   
     } 
}

retirement(65)(1991); 

function interviewJobs (job){
    return function (name) {
       if (job === "football player"){
           return console.log("how much experience do you hava as a"+" "+ job +" "+ name +"?")
       }else {return console.log("tell me what do you do as a"+" "+job+" "+name+"?")}
    }
}
   

interviewJobs("football player")("Ricardo");
interviewJobs("Housewife")("Marina");
interviewJobs("Unemployed")("Oscar") */

//call , apply and bind

var oscar = {
    name : "oscar",
    age : 29,
    job : "unemployed",
    presentation : function(style, timeOfDay ){
        if(style === "formal"){
           return console.log("Good "+timeOfDay+" I am "+this.name+" ,I am "+this.age+" and I am "+this.job)
        }else if (style === "informal"){
            return console.log("Hi, what's up, my name is "+this.name+" ,I am "+this.age+" and I am "+this.job)
        }
    }

}

var saul ={
    name : "Saul",
    age : 34,
    job : "Engineer"
}

//call

oscar.presentation("formal", "morning");

oscar.presentation.call(saul,"formal","afternoon");

// apply does not apply, because we don't have array parameters

// bind

var typePresentation = oscar.presentation.bind(oscar,"formal");

typePresentation("night");

























