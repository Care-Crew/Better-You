let mentalCards = [];
let physicalCards = [];
let selfEsteemDeck = [];
let nutritionDeck = [];
let retrieveMentalDeck1 = localStorage.getItem('selfEsteemDeckStorage');
let retrievePhysicalDeck1 = localStorage.getItem('nutritionDeckStorage');
let datasets = ['mental','physical'];




// let storeData = function () 
//     const imageJSON = JSON.stringify(Product.productArray);

let mentalChartData = 0;

function calcMentalChartData() {
    for (let i = 0; i < mentalCards.length; i++) {
        console.log(mentalCards, i)
        for (let j = 0; j < selfEsteemDeck.length; j++) {
            console.log(selfEsteemDeck, j)
            mentalChartData += mentalCards[i][j].completed;

        }

    }

}
let physicalChartData = 0;
console.log ("physicalcards",physicalCards );
function calcPhysicalChartData() {

    for (let i = 0; i < physicalCards.length; i++) {
        for (let j = 0; j < nutritionDeck.length; j++) {
            physicalChartData += physicalCards[i][j].completed;
            // console.log(physicalCards[i][j].completed)
            console.log(typeof physicalChartData)
            
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
console.log(mentalChartData);
calcPhysicalChartData();
console.log(physicalChartData);

const ctx = document.getElementById('myChart').getContext('2d');
const imageChart = new Chart(ctx, {

    type: 'bar',


    data: {
        labels: datasets,
        datasets: [{
            label: ['mental tasks completed'],
            borderColor: '#F2C078',
            backgroundColor: '#345995',
            hoverBackgroundColor: '#F2C078',
            data: [mentalChartData],
            // data:[1,4,3,1,4]
        }, {
            label: ['physical tasks completed'],
            borderColor: '#F2C078',
            backgroundColor: '#CA1551',
            hoverBackgroundColor: '#3A2E39',
            data: [physicalChartData],
            // data: [2,1,2,3,4]
        }]
    }, 

    options: {
        scales: {
            yAxis: {
                ticks: {
                    beginAtZero: true
                },
                // stacked: true
            },
            xAxis: {
            }
        }
    }
})
