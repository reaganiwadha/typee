const remote = require('electron').remote;

function kill() {
    remote.getCurrentWindow().close();
}

function buttonime(link) {
    var buttons = $("#buttonContainer").children();
    buttons.each(function(i){
        $(this).addClass("keatas");
        $(this).css("animation-delay", 25*i+"ms");
    });
    buttons.last().on("animationend", function(){
        //TODO: add actual handler
        console.log("Animation End.");
    });
}

function startWbwm() {
    buttonime("game/wbwm.html");
}

//define buttons
$('#wbwm').on("click", startWbwm);
$(".close.button").on("click", kill);
