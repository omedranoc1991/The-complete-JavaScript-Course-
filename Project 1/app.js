/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

 var scores ; var roundScore ; var activePlayer ; var gamePlaying ; var test ; 

init();
var lastDice ;
 document.querySelector(".btn-roll").addEventListener("click", function (){
     if (gamePlaying){
         //challenge3
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").style.display = "inline";
        document.querySelector(".dice2").style.display = "inline";
        document.querySelector(".dice").src = "dice-"+ dice + ".png"
        document.querySelector(".dice2").src = "dice-"+ dice2 + ".png"
        // challenge 1
        if(lastDice === 6 && dice === 6){
            scores[activePlayer] = 0;
            document.querySelector("#score-"+ activePlayer).textContent = 0 ;
            nextPlayer();
        }else if (dice !== 1 && dice2 !== 1){
            roundScore = roundScore + dice + dice2;
            document.querySelector("#current-" + activePlayer ).textContent = roundScore;       
        } else {            
            nextPlayer();
        }
     lastDice = dice;
     }
   
 })
 
document.querySelector(".btn-hold").addEventListener("click", function (){
    if (gamePlaying){
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.querySelector("#score-"+ activePlayer).textContent = scores[activePlayer];
        //challenge 2
        var input = document.querySelector(".final-score").value;
        var winingValue;
        if(input){
            winingValue = input;            
        }else{
            winingValue = 100;
        }

        if(scores[activePlayer] >= winingValue){
            document.querySelector("#name-"+ activePlayer).textContent = "Winner!";
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            gamePlaying = false ;
        } else {
            nextPlayer();
        }
    }
    
})
 
function nextPlayer (){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
         roundScore = 0;
         document.querySelector("#current-"+ activePlayer).textContent = roundScore;  

         document.querySelector("#current-0").textContent = 0;
         document.querySelector("#current-1").textContent = 0;

         document.querySelector(".player-0-panel").classList.toggle("active");
         document.querySelector(".player-1-panel").classList.toggle("active");

         document.querySelector(".dice").style.display = "none";
         document.querySelector(".dice2").style.display = "none";
};

document.querySelector(".btn-new").addEventListener("click", init);

function init (){
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0 ; 
    gamePlaying = true ;
    test = 0 ;
   
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".dice2").style.display = "none";

    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector("#name-0").textContent = "saul" ;
    document.querySelector("#name-1").textContent = "oscar";
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
   
}