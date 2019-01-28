var cards = document.getElementsByClassName("card")
let hasFlippedCard = false;
let firstCard, secondCard;

let lock = false;

for(var j=0; j<cards.length;j++){
    cards[j].addEventListener("click", cardOpen);
}

function cardOpen(){
    if (lock) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    //first click
    if(!hasFlippedCard){ 
        hasFlippedCard = true;
        firstCard = this;
        return;
    }else{
        secondCard = this;
        checkMatch();
    }
    
}

function checkMatch(){
   // if(firstCard.dataset.num === secondCard.dataset.num){
   //     disableCards();
   // }else{
   //     unflipCards();
   // }
}

function unflipCards(){
    lock = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    
        resetBoard();
    }, 500);
}

function disableCards(){
    firstCard.removeEventListener('click', cardOpen);
    secondCard.removeEventListener('click', cardOpen);
    hasFlippedCard = false;
    lock = false;
    firstCard = null;
    secondCard = null;
}

function resetBoard(){
    hasFlippedCard = false;
    lock = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle(){
    for (var i = 0; i< cards.length; i++){
        cards[i].style.order = Math.floor(Math.random() * 24);
    }
})();
