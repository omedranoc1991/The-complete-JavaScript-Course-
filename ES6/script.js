/*// lecture about let and const

//ES5 

var name5 = "Oscar";
var age = 28;
name5 = "Saul"

//ES6

const name6 = "Oscar";
let age = 28
name6 = "Saul" // is not possible mutate a const */

// ES5  (function scoped)

/*function driversLicence5 (passedTest){
    
    if(passedTest){
        
        var name = "oscar";
        var age = 1991
        
    }
    console.log(name + " " + "born in" + " " + age + "," + "is oficially allowed to drive a car") // it show me the result
} 

driversLicence5(true)



// ES6 (block scoped )


function driversLicence6 (passedTest){
    
    if(passedTest){

        let name = "oscar";
        const age = 1991;
     
    }
   // console.log(name + " " + "born in" + " " + age + "," + "is oficially allowed to drive a car") //it does not show me the result, appear an error
} 

driversLicence6(true)

// ES6 another example to block

let i = 10

for (let i = 0 ; i < 5 ; i++){   
   
    console.log(i)
}

console.log(i)

// blocks and iifes

//let's to create a block to see the data privaticy 


//ES6
{
    let a = 1;
    const b = 2;   
    var c = 3 
}

console.log(c)
//console.log(a + b)

//ES5

(function (){
    var c = 3;   
})()

console.log(c) */ 

/*// strings ES5 y ES6

let name = "oscar"
let lastName = "Medrano"
const yearOfBirth = 1991

function age (year){
    return  2020 - year
}

//ES5

console.log("this is "+name+". He was born in "+yearOfBirth+" and today he is "+ age(yearOfBirth)+" years old")

//ES6 here we use the template literals

console.log(`this is ${name} ${lastName}. He was born in ${yearOfBirth} and today he is ${age(yearOfBirth)} years old  `)

*/

/*// Arrow functions

var years = [1991, 1985, 1965, 1959]

//ES5

var age5 = years.map(function(element){
    return 2020 - element
});

console.log(age5)

//ES6

let age6 = years.map(element => 2020 - element)

console.log(age6)

// more than one paramenter
age6 = years.map((element, index) => `Age element ${index + 1} : ${element} `)

console.log(age6)

// a code line no lineal 

age6 = years.map((element, index) => {
    const date = new Date().getFullYear()
    const age = `Age element ${index + 1} : ${date - element}`

    return age
})

console.log(age6) */

// lexical this keywords

//ES5

/*var box5 = {
    color: "green",
    position : 1,
    clickMe : function(){
        var self = this;
        document.querySelector(".green").addEventListener("click",function(){
            var str = "The position "+self.position+": is "+ self.color
            alert(str)
        })
    }
}

//box5.clickMe()

//ES6

var box6 = {
    color: "green",
    position : 1,
    clickMe : function(){
        
        document.querySelector(".green").addEventListener("click",() => {
            var str = `The position ${this.position}: is ${this.color}`
            alert(str)
        })
    }
}

//box6.clickMe()

// ES6 with a method with an arrow function and inside this method a call arrow function

var box66 = {
    color: "green",
    position : 1,
    clickMe : () => {
        
        document.querySelector(".green").addEventListener("click",() => {
            var str = `The position ${this.position}: is ${this.color}`
            alert(str)
        })
    }
}

//box66.clickMe()

//ES5 + ES6

function Person (name){
    this.name = name
}

Person.prototype.myFriends = function (friends){

    var arr =friends.map( (element) => {
         return `${this.name}  is friend with ${element}`
    })
    console.log(arr)

}

var myFriends = ["saul", "ricardo", "marina"]

new Person("Oscar").myFriends(myFriends) */

// Destructuring

//ES5 

/* var person = ["Oscar", 29]

//var name = person[0]

//var age = person[1]

//ES6 

//const [name, age] = person

//console.log(age)

// to the objects

const obj = {
    name : "Saul",
    age : 34
}

const {name, age} = obj

//console.log(name)
//console.log(age)

function calcAgeRetirement (year){
     var age = new Date().getFullYear() - year;
     return [age, 65 - age];     
}

const [age2, retirement ] = calcAgeRetirement(1991)

console.log(age2, retirement)*/


/*// arrays 

const boxes = document.querySelectorAll(".box")

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes)
boxesArr5.forEach(function(element){
    element.style.backgroundColor = "dodgerblue"
})

console.log(boxesArr5) 

//ES6 
var boxesArr6 = Array.from(boxes)
Array.from(boxes).forEach(function (el){
    el.style.backgroundColor = "dodgerblue"
})

// loops ES5, continue and break
/*for(var i = 0 ; i < boxesArr5.length ; i++){

    if(boxesArr5[i].className === "box blue" ){
        continue;
    } 
    boxesArr5[i].textContent = "I changed to blue"
}*/

//ES6 loops

/*for (const current of  boxesArr6 ){

    if(current.className === "box blue" ){
        continue;
    } 
    current.textContent = "I changed to blue Oscar"
}

//ES5 to find a element

var ages = [12,13,14,15,21]

var full = ages.map(function (element){

    return element > 20

})

console.log(full)

console.log(full.indexOf(true))
console.log(ages[full.indexOf(true)])

//ES6

console.log(ages.findIndex(element => element > 14))
console.log(ages.filter(element => element > 14))*/

//arrays spread operator

//ES6
const numbers1 = [1,2,3,4]

function sum (a,b,c,d){
   return  a+b+c+d
}

console.log(sum(...numbers1))

//to join arrays

const numbers2 = [5,6,7,8]

const numbers3 = [...numbers1,...numbers2]

//

const h = document.querySelector("h1")

const boxes = document.querySelectorAll(".box")
// convert node list to an array
const newArray = Array.from(boxes)

const fusion = [h,...newArray]

const change = fusion.forEach(current => current.style.color = "purple")

// rest operator

function fullAge (limit,...ages){

    ages.forEach(function (current){
        if(current > limit){
            console.log("you are welcome")
        }else {
           console.log( "denied")
        }
    })
}

fullAge(20,15,12,21,34,15)







