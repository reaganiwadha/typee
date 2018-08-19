const remote = require('electron').remote

function kill(){
    remote.getCurrentWindow().close();
}