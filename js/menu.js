const remote = require('electron').remote;

function kill() {
    remote.getCurrentWindow().close();
}

function buttonime(link) {
    var buttons = $(".modecard");
    buttons.each(function(i){
        $(this).addClass("goZero");
        $(this).css("animation-delay", 300*i+"ms");
    });
    buttons.last().on("animationend", function(){
        //TODO: add actual handler
        console.log("Animation End.");
        mainWindow.setPosition(50,30);
    });
}

function startWbwm() {
    buttonime("game/wbwm.html");
}

//define buttons
$('#wbwm').on("click", startWbwm);
$(".close.button").on("click", kill);
