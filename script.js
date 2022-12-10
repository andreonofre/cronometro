
// const iniciar = document.querySelector(".start-btn");

var sec = 0; 
var min = 0;
var hour = 0;

var intervalo;

function start(){
    intervalo = setInterval(watch, 1000); //passando a função count chamada em intervalos de 1s
};


function pause(){
    clearInterval(intervalo)
};


function stop(){
    clearInterval(intervalo);
    sec = 0; 
    min = 0;
    hour = 0;
    document.getElementById("watch").innerText = "00" + " : " +"00" + " : " + "00";
};


function watch (){
    sec++; //contando os segundos segundos +=1
    if(sec == 60){ //quando chegar a 60s, min vai ser 1m
        min++
        sec = 0 //zerando sec
        if(min == 60){
            hour++
            min = 0;
        }

    };
    
    // show min and sec
    document.getElementById("watch").innerText = hour + " : " + min + " : " + sec; 
};

