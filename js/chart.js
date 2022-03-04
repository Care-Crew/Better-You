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
    labels: ['Tasks Comitted/Completed'],
    datasets: [{
      label: 'Physical',
      data: [physicalChartData],
      backgroundColor: [
        'rgba(255, 99, 132, 0.3)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    },
    {
      label: 'Mental',
      data: [mentalChartData],
      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
      borderColor: ['rgba(54, 162, 235, 1)'],
      borderWidth: 1
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
