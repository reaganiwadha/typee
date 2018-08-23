const remote = require('electron').remote;

function kill(){
    remote.getCurrentWindow().close();
}

$(".close.button").on("click", kill);


function buttonime(){
    var bc = document.getElementById("buttonContainer").children;
    bc[0].classList.add('keatas');
    for(var i=1; i<bc.length; i++){
        setTimeout(function(i){
            bc[i].classList.add('keatas');
        },150*i,i);
    }
}

function startWbwm(){
    buttonime();
}