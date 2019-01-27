var cards = document.getElementsByClassName("card")
console.log(cards)

let hasFlippedCard = false;
let firstCard, secondCard;

let lock = false;

for(var i=0; i<cards.length;i++){
    cards[i].addEventListener("click", cardOpen);
}

function cardOpen(){
    console.log('chengsi')
    console.log(lock)
    console.log(this)
    console.log(firstCard)
    if (lock) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    //first click
    if(!hasFlippedCard){ 
        hasFlippedCard = true;
        firstCard = this;
        console.log(this)
        return;
    }
    secondCard = this;
    checkMatch();
}

function checkMatch(){
    if(firstCard.src === secondCard.src){
        disableCards();
    } else{
        unflipCards();
    }
}

function unflipCards(){
    lock = true;

    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
}

function disableCards(){
    this.removeEventListener('click', cardOpen);
    this.removeEventListener('click', cardOpen);

    resetBoard();
}

function resetBoard(){
    [hasFlippedCard, lock] = [false, false];
    [firstCard, secondCard] = [null,null];
}

function shuffle(){
    for(var i=0;i<cards.length; i++){
        let randomPos = Math.floor(Math.random()*24);
        card[i].style.order = randomPos;
    }
}
