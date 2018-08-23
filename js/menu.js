const remote = require('electron').remote;

function kill() {
    remote.getCurrentWindow().close();
}

$(".close.button").on("click", kill);

$(document.getElementById("buttonContainer").children).removeClass('keatas');

function buttonime() {
    var bc = document.getElementById("buttonContainer").children;
    bc[0].classList.add('keatas');
    for (var i = 1; i < bc.length; i++) {
        $(bc[i]).attr("style","animation-delay: "+150*i+"ms;");
        $(bc[i]).addClass('keatas');    
    }
}

//define buttons
$('#wbwm').on("click", startWbwm);

function startWbwm() {
    buttonime();
}