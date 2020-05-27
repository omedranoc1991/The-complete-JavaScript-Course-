
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

var familyAge = [1959, 1965, 1985, 2005];

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
console.log(mhr);