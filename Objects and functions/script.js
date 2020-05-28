
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

/*var oscar = {
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

var typePresentation = oscar.presentation.bind(oscar," ", "night");

typePresentation("formal"); */

//exercice

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

function isFullAge (limit, element){
    return element >= limit;   
}

var y = isFullAge.bind(this, 20)

var x = arrayCalc(familyAge, calcAge);
console.log(arrayCalc(x, y)) */

//CODING CHALLENGE !!

/*(function (){

    //1.Function constructor
    var Question = function(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer= correctAnswer;  
    
    }
    
    //2. Method 1
    Question.prototype.displayQuestion = function(){
        console.log(this.question) 
        for(var i = 0 ; i < this.answers.length ; i++){       
            console.log(i+ ":" + this.answers[i])  
        }       
    }
    
    //3. Method 2
    
    Question.prototype.cAnswer = function(prompt){
        var score = 0
        if( prompt === this.correctAnswer){
            console.log("Correct answer")
            score = score + 1
            console.log("your current score is "+ score)
        }else{
            console.log("The answer is incorrect")
            console.log("your current score is "+ score)
        }
    }
    
    //4. Questions
    
    var question1 = new Question (
        "How old are you ?", [25 , 29,18], 1
    )
    
    var question2 = new Question (
        "What is my brother's name ?", ["saul", "pedro", "camilo"], 0
    )
    
    var question3 = new Question (
        "what is my dog's name ?", ["tita", "chiripa", "luna"], 2
    ) 
    
    var question4 = new Question(
        "What is my favorite color ?", ["green","black","yellow"], 1
    )
    
    var question5 = new Question(
        "What did I study ?", ["economist","medicine","arts"], 0
    )
    
    //5. Array
    
    var allQuestions = [question1,question2,question3,question4,question5]
    
    //6. Random question
    
    var x = Math.floor(Math.random() * allQuestions.length )
    var randomQuestion = allQuestions[x]
    
    var test = randomQuestion.displayQuestion()
    
    //7. Window prompt
    
    var y = parseInt(prompt("Please select the correct answer (just type the number)"))
    
    var test2 = randomQuestion.cAnswer(y)

   //8. new question display
    
    var line = ("-------------------------------------")
    console.log(line)

   
    
})()*/

(function (){

    //1.Function constructor
    var Question = function(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer= correctAnswer;  
    
    }
    
    //2. Method 1
    Question.prototype.displayQuestion = function(){
        console.log(this.question) 
        for(var i = 0 ; i < this.answers.length ; i++){       
            console.log(i+ ":" + this.answers[i])  
        }       
    }
    
    //3. Method 2
    
    Question.prototype.cAnswer = function(prompt,callBack){
        var sc ;
        if( prompt === this.correctAnswer){
            console.log("Correct answer")
            sc = callBack(true)
           
        }else{
            console.log("The answer is incorrect")
            sc = callBack(false)
        }
        this.displayScore(sc)
    }


    Question.prototype.displayScore = function(score){
            console.log("your current score is "+ score)
            console.log("---------------------")
    }
    
    //4. Questions
    
    var question1 = new Question (
        "How old are you ?", [25 , 29,18], 1
    )
    
    var question2 = new Question (
        "What is my brother's name ?", ["saul", "pedro", "camilo"], 0
    )
    
    var question3 = new Question (
        "what is my dog's name ?", ["tita", "chiripa", "luna"], 2
    ) 
    
    var question4 = new Question(
        "What is my favorite color ?", ["green","black","yellow"], 1
    )
    
    var question5 = new Question(
        "What did I study ?", ["economist","medicine","arts"], 0
    )
    
    //5. Array
    
    var allQuestions = [question1,question2,question3,question4,question5]

    function score (){
        var sc = 0
        return function(correctAnswer){
            if(correctAnswer){
                sc++
            }return sc
        }
        
    }
    
    var keepScore = score();

    //function new question 

    function nextQuestion (){

        //6. Random question
        var x = Math.floor(Math.random() * allQuestions.length )
        var randomQuestion = allQuestions[x]
        
        var test = randomQuestion.displayQuestion()
        
        //7. Window prompt
        
        var y = prompt("Please select the correct answer (just type the number)")
        
        if (y !== "exit"){
            randomQuestion.cAnswer(parseInt(y),keepScore)
            nextQuestion()
        }
         
     
        
    }
    
  
    nextQuestion()
   

      
    
})()

