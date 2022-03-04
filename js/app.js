'use strict';

// Create constructor for cards which will then seperate out the cards for indexing and local storage. Allowing us track times completed.
let mentalCards = [];
let physicalCards = [];
let cardType = 'none';
let cardSubType = 'none';
let cardDisplay = 'none';
let cardChoice = NaN;
let chosenTask = [];
let selfEsteemDeck = [];
let nutritionDeck = [];

// DOM REFERENCES
const title = document.getElementById('title');
const main = document.getElementById('main');
const option = document.getElementById('buttons');
const quest = document.getElementById('question');
const aspect = document.getElementById('aspects');
const cardArea = document.getElementById('cardarea');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
let retrieveMentalDeck1 = localStorage.getItem('selfEsteemDeckStorage');
console.log(retrieveMentalDeck1)
let retrievePhysicalDeck1 = localStorage.getItem('nutritionDeckStorage');


//constructor function moved to own js files for card decks

//img loader for card back - if person clicks physical or mental ID cardback styling
function cardBackLoader() {
  let cardOneBack = document.createElement('img');
  cardOneBack.id = 'cardback';
  cardOneBack.class = 'card';
  if (cardType === 'physical') {
    cardOneBack.src = './img/physicalcardback.png';
  }
  else if (cardType === 'mental') {
    cardOneBack.src = './img/mentalcardback.png';
  }
  cardArea.appendChild(cardOneBack);
  console.log('card back loaded');
}

//CSS Loader Function
//TODO: link physical and mental stylesheets
function cssChange() {
  const head = document.getElementById('head');
  const link = document.createElement('link');
  if (cardType === 'physical') {
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './css/physical.css';
    head.appendChild(link);
  }
  else if (cardType === 'mental') {
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = './css/mental.css';

    head.appendChild(link);
  }
}

// Change to frame 2 of wireframe using JS to modify HTML
function aspectTitleChange() {
  //Remove title HTML children for replacing
  while (title.firstChild) {
    title.removeChild(title.firstChild);
  }

  //Replace header of Page
  let h1El = document.createElement('h1');
  h1El.textContent = `What aspect of your ${cardType} wellness do you want to improve today?`;
  title.appendChild(h1El);
}

// Change main body of frame 2
function aspectMainChange() {
  //Remove all children
  let appPoint = document.getElementById('apppoint');
  while (appPoint.firstChild) {
    appPoint.removeChild(appPoint.firstChild);
  }
  let buttons = document.getElementById('buttons');
  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild);
  }
  let greeting = document.getElementById('main');
  while (greeting.firstChild) {
    greeting.removeChild(greeting.firstChild);
  }
  let question = document.getElementById('question');
  while (question.firstChild) {
    question.removeChild(question.firstChild);
  }
  if (cardType === 'mental') {
    //Repopulate Buttons with either mental or physical aspects
    let buttonOneEl = document.createElement('button');
    buttonOneEl.name = 'selfEsteem';
    buttonOneEl.type = 'submit';
    buttonOneEl.textContent = 'Self Esteem';
    aspect.appendChild(buttonOneEl);
  }
  else if (cardType === 'physical') {

    let buttonTwoEl = document.createElement('button');
    buttonTwoEl.name = 'nutrition';
    buttonTwoEl.type = 'submit';
    buttonTwoEl.textContent = 'Nutrition';
    aspect.appendChild(buttonTwoEl);
  }
  let secondQuestion = document.createElement('p');
  secondQuestion.textContent = 'Here are a few things we can work on with you';
  question.appendChild(secondQuestion);
}

//Frame 3 change
//title change frame 3
function cardTitleChange() {
  while (title.firstChild) {
    title.removeChild(title.firstChild);
  }
  let cardTitle = document.createElement('h1');
  cardTitle.textContent = `Please select a wellness task below`;
  title.appendChild(cardTitle);
}
/*Pick card to populate selection - find deck in either physical or mental deck with proper subtype and then use to display properly randomized card*/
function cardPicker() {
  if (cardSubType === 'selfEsteem') {
    cardChoice = Math.floor(Math.random() * selfEsteemCardList.length);
    let cardOne = document.createElement('img');
    cardOne.src = mentalCards[0][cardChoice].src;
    cardOne.id = 'cardOne';
    cardOne.class = 'card';
    cardArea.appendChild(cardOne);
    chosenTask = mentalCards[0][cardChoice];
  }
  else if (cardType === 'physical') {
    cardChoice = Math.floor(Math.random() * nutritionCardList.length);
    console.log(cardChoice);
    let cardOne = document.createElement('img');
    cardOne.src = physicalCards[0][cardChoice].src;
    cardOne.id = 'cardOne';
    cardOne.class = 'card';
    cardArea.appendChild(cardOne);
    chosenTask = physicalCards[0][cardChoice];
  }
}
// populate card
function cardMain() {
  //clear main
  let appPoint = document.getElementById('apppoint');
  while (appPoint.firstChild) {
    appPoint.removeChild(appPoint.firstChild);
  }
  let buttons = document.getElementById('aspects');
  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild);
  }
  let question = document.getElementById('question');
  while (question.firstChild) {
    question.removeChild(question.firstChild);
  }
  // render Card Back
  cardBackLoader();

}

//event handler for wellness option
function handleOption(event) {
  let optionClicked = event.target.value;
  cardType = optionClicked;
  aspectTitleChange();
  console.log('changed to aspect ' + cardType);
  //change to appropriate theme
  cssChange();
  console.log(`Css style changed to ${cardType}`);
  aspectMainChange();

  console.log('main changed');
  console.log('cardType:', cardType);
  option.parentElement.removeChild(option);
  main.parentElement.removeChild(main);
  option.removeEventListener('click', handleOption);
}

//event handler for aspect of wellness option chosen
function handleAspect(event) {
  let aspectClicked = event.target.name;
  let displayText = event.target.decktype;
  cardSubType = aspectClicked;
  cardDisplay = displayText;
  console.log('cardSubType', cardSubType);
  cardTitleChange();
  console.log('title changed');
  cardMain();
  quest.parentNode.removeChild(quest);
  aspect.parentNode.removeChild(aspect);
  // next step: selected aspect takes you to three cards of sub-category and user selects
}

//event handler for what card has been clicked
function handleClick() {
  modal.style.display = 'block';
  cardPicker();
  cardArea.removeEventListener('click', handleClick);
}
//card clicked flips displays tasks


// // (stretch goal) event handler for if activity was completed
// function handleButton(event){
//   let buttonClicked = event.target.name;
// }

option.addEventListener('click', handleOption);
aspect.addEventListener('click', handleAspect);
cardArea.addEventListener('click', handleClick);
// /*elementId*/.addEventListener('click', handleButton);


// Store data from selection
function storeData() {
  let stringMentalDeck1 = JSON.stringify(selfEsteemDeck);
  let stringPhysicalDeck1 = JSON.stringify(nutritionDeck);
  localStorage.setItem('selfEsteemDeckStorage', stringMentalDeck1);
  localStorage.setItem('nutritionDeckStorage', stringPhysicalDeck1);
}

//Pull data from storage


//parse data from storage
function parseData() {
  let parsedMentalDeck1 = JSON.parse(retrieveMentalDeck1);
  selfEsteemDeck = parsedMentalDeck1;
  console.log('sed', selfEsteemDeck)
  let parsedPhysicalDeck1 = JSON.parse(retrievePhysicalDeck1);
  nutritionDeck = parsedPhysicalDeck1;
  //distribute Data
  mentalCards.push(selfEsteemDeck);
  console.log(mentalCards);
  physicalCards.push(nutritionDeck);
  console.log(physicalCards);
}

function initializePage() {
  if (retrieveMentalDeck1) {
    parseData();
  }
  else {
    buildDecks();
  }
}

function buildDecks() {
  createSelfEsteemDeck();
  createNutritionDeck();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function committed () {
  chosenTask.completed++;
  storeData();
  modal.style.display = 'none';
}
