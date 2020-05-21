var scores ; var roundScore ; var activePlayer ; var gamePlaying ; var test ;

init();

 document.querySelector(".btn-roll").addEventListener("click", function (){
     if (gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".dice").style.display = "inline";
        document.querySelector(".dice").src = "dice-"+ dice + ".png"
        dice === 6 ? test = test + dice : test = 0
        
        if (test === 12 ){
            document.querySelector("#score-"+ activePlayer).textContent = 0
            nextPlayer (); 
        }if (dice !== 1){
            roundScore = roundScore + dice;
            document.querySelector("#current-" + activePlayer ).textContent = roundScore;
        }else{
            nextPlayer();
        }
             
     }
       
 })
 

document.querySelector(".btn-hold").addEventListener("click", function (){
    if (gamePlaying){
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.querySelector("#score-"+ activePlayer).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >= 100){
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
};

document.querySelector(".btn-new").addEventListener("click", init);

function init (){
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0 ; 
    gamePlaying = true ;
    test = 0 ;
   
    document.querySelector(".dice").style.display = "none";
   
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