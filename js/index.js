console.log("Heres JS");

let cards = [];
let currentIndex = 0;
let cardImage = document.getElementById('cardImage');
let popUp = document.getElementById('popUp');
let mask = document.getElementById('mask');
let popUpHeader = document.getElementById('popUpHeader');
let rotations = 360;

async function getData(url) {
    try {
        console.log('getting data');
        let response = await fetch(url);
        let data = await response.json();
        console.log('data retrieved');
        return data;
    }
    catch (err) {
        console.error("Error: ", err);
    }
}

async function loadData() {
    let data = await getData('https://deckofcardsapi.com/api/deck/new/draw/?count=3');
    cards = data.cards;
    cardImage.src = cards[currentIndex].image;
}

loadData();

function yesClick(){
    displayPopUp();
    popUpHeader.innerHTML = "Good job !!!"
    popUpHeader.style.color = "green";
}

function noClick() {
    if(currentIndex < 2) {
        currentIndex++;
        cardImage.style.rotate = `y ${rotations}deg`
        cardImage.src = cards[currentIndex].image;
        rotations += 360;
    }
    else {
        popUpHeader.innerHTML = "You lost :("
        popUpHeader.style.color = "black";
        displayPopUp();
    }
}

function resetGame() {
    rotations = 360;
    hidePopUp();
    currentIndex = 0;
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


