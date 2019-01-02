console.log('Starting app')

const fs = require('fs')
const os = require('os')
const notes = require('./notes')

var plus = notes.plus(3, 5)
console.log(plus)

var minus = notes.minus(5, 3)
console.log(minus)

/* var user = os.userInfo()
console.log(user)

fs.appendFile('greetings.txt', `Hello word ${user.username} . You are ${notes.age}.`) */