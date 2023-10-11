let d = localStorage.getItem('iteration');
let next  = document.getElementById('next');



if(d === 'bolly'){
    next.onclick = () =>{
        location.href = 'iterationB.html';
    }
}

else if(d === 'jap'){
    next.onclick = () =>{
        location.href = 'iternationJ.html';
    }
}
else if(d === 'harry'){
    next.onclick = () =>{
        location.href = 'iterationH.html';
    }
}
else if(d === 'people'){
    next.onclick = () =>{
        location.href = 'iterationP.html';
    }
}


let names = document.getElementById('name');
let nick = document.getElementById('nick');

names.onchange = () =>{
    localStorage.setItem('name', names.value);
}
nick.onchange = () =>{
    localStorage.setItem('nick', nick.value)
}