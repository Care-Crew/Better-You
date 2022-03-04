'use strict';

let nutritionCardList = ['nutrition1', 'nutrition2', 'nutrition3', 'nutrition4', 'nutrition5'];

//Constructor function for self-esteem cards

function NutritionCard(name, fileExtension = 'png') {
  this.name = name;
  this.src = `./img/${name}.${fileExtension}`;
  this.alt = `${name}`;
  this.subType = 'physical';
  this.deckType = 'physical';
  this.completed = 0;
  nutritionDeck.push(this);
}

function createNutritionDeck(){
  for (let i = 0; i < nutritionCardList.length; i++){
    new NutritionCard(nutritionCardList[i]);
  }
  console.log(nutritionDeck);
  physicalCards.push(nutritionDeck);
}

initializePage();