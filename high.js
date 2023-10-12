let nickname = localStorage.getItem('nick')
console.log(nickname)

let nam = document.getElementById("new-score");
nam.innerHTML = nickname;

// window.onload =() =>{
//     document.body.ul.append(nam);
// }

let time = document.getElementById('timeTaken');
let localTime = localStorage.getItem('timeTaken');
let showTimw = `${Math.floor(localTime/60)} : ${localTime%60}`;
time.innerHTML = showTimw


let playAgain = document.getElementById('playAgain');
let homeBtn = document.getElementById('homeBtn');

// playAgain.onclick = () =>{

//     location.href = `${localStorage.getItem('iteration')}.html`;
// }
let l = localStorage.getItem('iteration');
console.log(l)
playAgain.onclick = () => {
    location.href = `${l}.html`;
}

homeBtn.onclick = () =>{
    location.href = `index.html`;
}