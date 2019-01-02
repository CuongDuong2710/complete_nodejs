console.log('Starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

var res = notes.addNote()
console.log(res)

var resArrow = notes.addNoteArrow()
console.log(resArrow)

/* var user = os.userInfo()
console.log(user)

fs.appendFile('greetings.txt', `Hello word ${user.username} . You are ${notes.age}.`) */