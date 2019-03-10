// import sketch from 'sketch'
// // documentation: https://developer.sketchapp.com/reference/api/
//
// export default function() {
//   sketch.UI.message("It's alive 🙌")
// }

import BrowserWindow from 'sketch-module-web-view'

let win = new BrowserWindow({ width: 800, height: 600 })
win.on('closed', () => {
    win = null
})


// // Load a remote URL
// win.loadURL('https://github.com')

// const Panel = `http://localhost:8000#${Math.random()}`;
// win.loadURL(Panel)

win.loadURL(require('./dist/index.html'))
