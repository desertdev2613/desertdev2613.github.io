const startBtn = document.querySelector('.beer-button');
const randomBeer = document.querySelector('.random-beer');
const volumeDisplay = document.querySelector('.volume');
const descriptionDisplay = document.querySelector('.description');
const pairing = document.querySelector('.pairing');

function beerGenerator(event) {
// prevent new window from opening
event.preventDefault(); 

    fetch('https://api.punkapi.com/v2/beers/random')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const name = data[0].name; 
        const description = data[0].description;
        const {volume} = data[0]; // how to access an object in an object 
        const volumeValue = volume.value;
        const volumeUnit = volume.unit;
        const foodPairing = '<ul>' + '<li>' + data[0].food_pairing[0] + '</li>' + '<li>' + data[0].food_pairing[1] + '</li>'+ '<li>' + data[0].food_pairing[2] + '</li>'+'<br/>';
        console.log(foodPairing)
    randomBeer.innerHTML = name + ' ' + '<br/>';
    volumeDisplay.innerHTML = volumeValue + volumeUnit
    descriptionDisplay.innerHTML = description; 
    pairing.innerHTML = '<b>' + 'Goes great with: '+ '</b>' + '<br/>'+ '<br/>' + foodPairing; 
    })
}

startBtn.addEventListener('click', beerGenerator)


