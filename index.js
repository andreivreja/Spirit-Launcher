const electron = require('electron');
const {app, BrowserWindow, ipcMain} = electron;
const path = require('path');

let win
app.on('ready', () => {
	win = new BrowserWindow({width: 1200, height: 670, backgroundColor: '#231515', frame: false, resizable: false, show: false});

	
	
	//win.webContents.openDevTools()
	
	win.webContents.once('dom-ready', () => {
		win.show();
	});
	//win.show();
	
	win.loadURL(path.join(__dirname, '/html/Launcher.html'));
});



app.on('window-all-closed', () => {
  app.exit();
});