let cards=[]
let sum=0;
let sumEL=document.getElementById("sum-el");
let hasBlackjack = false;
let isAlive = false;

let message=""
let messageDisplay = document.getElementById("message-el");

let cardEL=document.getElementById("card-el");
let player={
    name:"Ansh",
    money:1000
}
let playerEL=document.getElementById("player-el");

playerEL.textContent=player.name+": $"+player.money;

function getRandomNumber(){
    let randomNumber= Math.floor(Math.random()*13)+1        //it gives random number maths.rnadome gives value between 0.0000 to 0.9999 and maths.floor covent points to nautral number.
    if(randomNumber>10){     //this logic is for game rules
        return 10;
    }
    else if(randomNumber===1){
        return 11;
    }
    else{
        return randomNumber
    }

}

function startGame(){
    isAlive=true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards=[firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEL.textContent= "Cards: ";
    for(let i=0;i<cards.length;i++){
        cardEL.textContent+=cards[i]+" "
    }
    sumEL.textContent="Sum:"+" "+sum;
    if (sum < 21) {
        message = "Do you want to draw a new card";

    }
    else if (sum === 21) {
        message = "Wohooo! You've got a BlackJack";
        hasBlackjack = true;
    }
    else {
        message = "You are out of the game!";
        isAlive = false;
    }
    messageDisplay.textContent=message;
}

function newCard(){
    if(isAlive===true && hasBlackjack===false){
    let card=getRandomNumber();
    sum+=card;
    cards.push(card);
    renderGame();
    }
}
