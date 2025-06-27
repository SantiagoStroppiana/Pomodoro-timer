const { app, BrowserWindow } = require('electron');
const { platform } = require('os');
const path = require('path')

function creatWindow() {

    const win = new BrowserWindow({
        with: 400,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'render.js')
        }
    });

    win.loadFile('index.html');

}

app.whenReady().then(creatWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});
