let mentalCards = [];
let physicalCards = [];
let selfEsteemDeck = [];
let nutritionDeck = [];
let retrieveMentalDeck1 = localStorage.getItem('selfEsteemDeckStorage');
let retrievePhysicalDeck1 = localStorage.getItem('nutritionDeckStorage');
let datasets = ['mental','physical'];




// let storeData = function () {
//     const imageJSON = JSON.stringify(Product.productArray);

let mentalChartData = 0;

function calcMentalChartData() {
    for (let i = 0; i < mentalCards.length; i++) {
        for (let j = 0; j < selfEsteemDeck.length; j++) {
            mentalChartData += mentalCards[i][j].completed;
            console.log(mentalChartData);
        }

    }

}
let physicalChartData = 0;

function calcPhysicalChartData() {

    for (let i = 0; i < physicalCards.length; i++) {
        for (let j = 0; j < nutritionDeck.length; j++) {
            physicalChartData += physicalCards[i][j].completed;
            console.log(physicalChartData);
        }

    }
}

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
parseData();
calcMentalChartData();
calcPhysicalChartData();

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Tasks Comitted or Completed'],
    datasets: [{
      label: 'Physical',
      data: [physicalChartData],
      backgroundColor: [
        'rgba(255,199,153,0.5)'
      ],
      borderColor: [
        'rgb(255,199,153)'
      ],
      borderWidth: 2
    },
    {
      label: 'Mental',
      data: [mentalChartData],
      backgroundColor: ['rgba(196,191,231,0.5)'],
      borderColor: ['rgb(196,191,231)'],
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
