const { createWindow } =require('./main')
const { app } = require("electron")

require('./database')
//Cada vez que se modifica el codigo lo recarga
require('electron-reload')(__dirname) 

app.whenReady().then(createWindow)