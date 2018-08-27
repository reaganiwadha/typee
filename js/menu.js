const remote = require('electron').remote;

function kill() {
    remote.getCurrentWindow().close();
}

function buttonime(link) {
    var bc = document.getElementById("buttonContainer").children;
    bc[0].classList.add('keatas');
    for (var i = 1; i < bc.length; i++) {
        $(bc[i]).attr("style","animation-delay: "+150*i+"ms;");
        $(bc[i]).addClass('keatas');    
    }
    $(bc[bc.length-1]).on("animationend", function(){
        $('#buttonContainer').load('game/wbwm.html', function(){
            console.log('loaded '+link);
            $('#title').text('Back');
            $('#title').addClass('button');
            $('#title').addClass('back');
            $('#title').addClass('nav');
            
        });
    })
}

function startWbwm() {
    buttonime("game/wbwm.html");
}

//define buttons
$('#wbwm').on("click", startWbwm);
$(".close.button").on("click", kill);