const electron = require('electron');
const { app } = electron;
const { ipcMain: ipc } = electron;
const { dialog } = electron;
const { BrowserWindow } = electron;
// const sass = require('node-sass')
// const fs = require('fs');

let win;

// function compileSass() {
//   sass.render({
//     file: 'assets/css/main.scss',
//     outFile: 'assets/css/main.css',
//     outputStyle: 'comporessed'
//   }, (err, result) => {
//     fs.writeFile('assets/css/main.css', result.css, err => {
//       console.log(err)
//     })
//   })
// }

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL(`file://${__dirname}/index.html`);
    // win.webContents.openDevTools()
  win.on('close', () => {
    // fs.unlink(__dirname + '/assets/css/main.css')
  });
}

app.on('ready', () => {
  // compileSass()
  createWindow();
});

ipc.on('insert-error', (ev, err) => {
  dialog.showErrorBox('Insertion error',
    `There was an error in inserting your task:\n${err}`);
});
ipc.on('find-error', (ev, err) => {
  dialog.showErrorBox('Find error',
    `There was an error in finding your task:\n${err}`);
});
ipc.on('update-error', (ev, err) => {
  dialog.showErrorBox('Update error',
    `There was an error in updating your task:\n${err}`);
});
ipc.on('remove-error', (ev, err) => {
  dialog.showErrorBox('Remove error',
    `There was an error in removing your task:\n${err}`);
});
