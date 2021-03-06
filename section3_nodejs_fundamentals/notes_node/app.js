console.log('Starting app')

const fs = require('fs')
const _ = require('lodash')

const notes = require('./notes')

var command = process.argv[2]
console.log('Command: ', command)
console.log(process.argv)

if (command === 'add')
  console.log('Adding new note')
else if (command === 'list')
  console.log('Listing all notes')
else if (command === 'read')
  console.log('Reading note')
else if (command === 'remove')
  console.log('Removing note')
else
  console.log('Command not recognized')

/* 
> node app.js add
Command:  add
Adding new note 

> node app.js remove --title="secret 2"
[ 'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Android\\ToDo\\complete_nodejs\\section3_nodejs_fundamentals\\notes_node\\app.js',
  'remove',
  '--title=secret 2' ]
*/