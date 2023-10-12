let d = localStorage.getItem('iteration');
let next  = document.getElementById('next');



if(d === 'bolly'){
    next.onclick = () =>{
        location.href = 'bolly.html';
    }
}

else if(d === 'jap'){
    next.onclick = () =>{
        location.href = 'jap.html';
    }
}
else if(d === 'harry'){
    next.onclick = () =>{
        location.href = 'harry.html';
    }
}
else if(d === 'people'){
    next.onclick = () =>{
        location.href = 'people.html';
    }
}


let names = document.getElementById('name');
// names.defaultValue = 'Player';
let nick = document.getElementById('nick');
// nick.defaultValue = 'PlayerDash';

names.onchange = () =>{
    localStorage.setItem('name', names.value);
}
nick.onchange = () =>{
    localStorage.setItem('nick', nick.value);
}
