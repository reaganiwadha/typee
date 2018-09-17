const {
    app,
    BrowserWindow,
    globalShortcut
} = require('electron');


let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        title: "Typee",
        'minWidth':800,
        'minHeight':600
    });
    mainWindow.setMenu(null);
    mainWindow.loadFile('index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    })

    globalShortcut.register('f5', function() {
		console.log('Re:Fresh');
		mainWindow.reload();
	})
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
