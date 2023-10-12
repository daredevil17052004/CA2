const tiles = document.querySelectorAll('.card');

let containsFlippedTiles = false;
let boardLock = false;
let tileOne;
let tileTwo;
let no = 0;
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
        gameOver();
    }else{
        setTimeout(unFlip,700);
    }
}




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


// if(localStorage.getItem('game')===10){
//     location.href = 'index.html';
// }
// console.log(localStorage.getItem('game'))
let game = localStorage.getItem('game');
function gameOver(){
    if(no === 10){
        location.href='highscore.html';
    }
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


// var time = 0;
// var timerId ;
// var timer = document.getElementById('timer');

// function startTimer(){
//     time = 0;
//     timer.innerHTML = time;
//     timerId = setInterval(() =>{
//         time++;
//         if(no === 10){
//             localStorage.setItem('timeOfGame',time);
//         }
//     },1000);
// }
// startTimer();
// function resetTime(IntervalId){
//     clearInterval(IntervalId);
//     startTimer();
// }
var seconds = 0;
setInterval(startTimer,1000);
var sec = document.getElementById('seconds');
var min = document.getElementById('minutes')
var timer = document.getElementById('timer')
function startTimer(){
    ++seconds;
    sec.innerHTML = seconds%60;
    min.innerHTML = Math.floor(seconds/60);
    
    localStorage.setItem('timeTaken',seconds);  
}



let skip = document.getElementById('skip');
skip.onclick = () =>{
    location.href = 'highscore.html';
}