console.log("Heres JS");

let cards = [];
let currentIndex = 0;
let cardImage = document.getElementById('cardImage');
let popUp = document.getElementById('popUp');
let mask = document.getElementById('mask');
let popUpHeader = document.getElementById('popUpHeader');
let attempts = document.getElementById('attempts');
let rotations = 0;

async function getData(url) {
    try {
        console.log('getting data');
        //waiting until fetch function returns response
        let response = await fetch(url);
        //waiting until response is converted to JSON format
        let data = await response.json();
        console.log('data retrieved');
        return data;
    }
    catch (err) {
        //erro handling
        console.error("Error: ", err);
    }
}

async function loadData() {

    //waing until we get the data 
    let data = await getData('https://deckofcardsapi.com/api/deck/new/draw/?count=5');
    cards = data.cards;
    attempts.innerHTML = `Attempt: ${currentIndex+1}/5`;
    cardImage.src = cards[currentIndex].image;
    rotations = 0;
}

loadData();

function yesClick(){
    displayPopUp();
    popUpHeader.innerHTML = "Good job !!!"
    popUpHeader.style.color = "green";
}

function noClick() {
    if(currentIndex < 4) {
        currentIndex++;
        rotations += 360;
        attempts.innerHTML = `Attempt: ${currentIndex+1}/5`;
        cardImage.style.rotate = `y ${rotations}deg`
        cardImage.src = cards[currentIndex].image;
    }
    else {
        popUpHeader.innerHTML = "You lost :("
        popUpHeader.style.color = "black";
        displayPopUp();
    }
}

function resetGame() {
    rotations = 0;
    currentIndex = 0;
    hidePopUp();
    loadData();
}

function displayPopUp(){
    popUp.style.display = "flex";
    mask.style.display = "flex";
}

function hidePopUp(){
    popUp.style.display = "none";
    mask.style.display = "none";
}


