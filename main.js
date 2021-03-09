const { BrowserWindow, app } = require('electron');
const path= require('path')


function createWindow()
{
    const win = new BrowserWindow({
        width:1200,
        height:800,
        webPreferemces:{
            nodeIntegration:false,
            worldSaveExecuteJavaScript:true,
            contextIsolation:true,
        }
    });
    win.removeMenu();
    win.loadFile('index.html');
}
if(!app.isPackaged)
{
    require('electron-reload')(__dirname,{electron:path.join(__dirname,'node_modules','.bin','electron')})
}

app.whenReady().then(createWindow);