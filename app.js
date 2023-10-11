let bolly = document.getElementById('bolly');
let jap = document.getElementById('jap');
let harry = document.getElementById('harry');
let people = document.getElementById('people');
bolly.onclick = () => {
    localStorage.setItem('iteration','bolly');
}

jap.onclick = () =>{
    localStorage.setItem('iteration','jap');
}

harry.onclick = () =>{
    localStorage.setItem('iteration','harry');
}

people.onclick = () => {
    localStorage.setItem('iteration', 'people');
}


let newgame = document.getElementById('new-game');
function randomise(){
    let x = Math.floor(Math.random()*4);
    switch(x){
        case 0:
            newgame.onclick = () => localStorage.setItem('iteration','bolly');
            break;
        case 1:
            newgame.onclick = () => localStorage.setItem('iteration','jap');
            break;

        case 2:
            newgame.onclick = () => localStorage.setItem('iteration', 'harry');
            break;
        
        case 3:
            newgame.onclick = () => localStorage.setItem('iteration', 'people');
            break;
    }
    console.log(x);
   
};
randomise();

