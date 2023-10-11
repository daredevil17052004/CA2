const tiles = document.querySelectorAll('.card');

let containsFlippedTiles = false;
let boardLock = false;
let tileOne;
let tileTwo;
shufflingOfTiles();
function flipTile() {
    this.classList.toggle('flip');

    if(boardLock) return;
    if(this === tileOne) return;

    if(!containsFlippedTiles){
        containsFlippedTiles = true;
        tileOne = this;
        return;
    }else{
        tileTwo = this;
        boardLock = true;
        areTilesMatching();
    }
}

//Functioning of the Game

function areTilesMatching(){
    let areMatch = tileOne.dataset.card === tileTwo.dataset.card;
    if(areMatch){
        stopFlipping();
        no = no +1 
        console.log(no);
        localStorage.setItem('game',no);
    }else{
        setTimeout(unFlip,1000);
    }
}
let no = 0;



function stopFlipping(){
    tileOne.removeEventListener('click', flipTile);
    tileTwo.removeEventListener('click', flipTile);
    reset();
}


function unFlip(){
    tileOne.classList.remove('flip');
    tileTwo.classList.remove('flip');
    reset();
}

function reset() {
    containsFlippedTiles = false;
    boardLock = false;
    tileOne = null;
    tileTwo = null;
}

function shufflingOfTiles(){
    tiles.forEach(tile =>{
        let x = Math.floor(Math.random()*20);
        tile.style.order = x;
    })
}

tiles.forEach(tile => tile.addEventListener('click',flipTile));

// tiles.forEach(tile => {
//     tile.addEventListener('click', flipTile);
//     let totalTiles = 20;
//     let flippedCards = 0;
//     flippedCards++;
//     if(flippedCards === totalTiles){
//         location.href = 'index.html';
//     }
// });

// let d = document.querySelectorAll('.cards');
// d.forEach(di => {
//     if()
// })

function gameOver(){
    if(localStorage.getItem('game')===10){
        location.href = 'index.html';
    }
}
gameOver();
console.log(localStorage.getItem('game'))