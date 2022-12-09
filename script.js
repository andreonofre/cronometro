
// const iniciar = document.querySelector(".start-btn");

var sec = 0; 
var min = 0;

function start(){
    setInterval(watch, 1000); //passando a função count chamada em intervalos de 1s
};


function pause(){
    console.log("Start");
};


function stop(){
    console.log("Start");
};


function watch (){
    sec++; //contando os segundos
    if(sec == 60){ //quando chegar a 60s, min vai ser 1m
        min++
        sec = 0
    };
    
    document.getElementById("watch").innerText = sec;
    console.log(sec);
};