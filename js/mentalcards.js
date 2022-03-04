'use strict';

let selfEsteemCardList = ['selfEsteem1', 'selfEsteem2', 'selfEsteem3', 'selfEsteem4', 'selfEsteem5'];

//Constructor function for self-esteem cards

function SelfEsteemCard(name, fileExtension = 'png') {
  this.name = name;
  this.src = `./img/${name}.${fileExtension}`;
  this.alt = `${name}`;
  this.subType = 'selfEsteem';
  this.deckType = 'self esteem';
  this.completed = 0;
  selfEsteemDeck.push(this);
}

function createSelfEsteemDeck(){
  for (let i = 0; i < selfEsteemCardList.length; i++){
    new SelfEsteemCard(selfEsteemCardList[i]);
  }
  console.log(selfEsteemDeck);
  mentalCards.push(selfEsteemDeck);
  console.log(mentalCards);
}

// let cards = document.querySelectorAll('selfEsteemCardList');

// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });

