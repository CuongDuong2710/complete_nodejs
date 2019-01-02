console.log('Starting app')

const fs = require('fs')
const os = require('os')

var user = os.userInfo()
console.log(user)

fs.appendFile('greetings.txt', `Hello word ${user.username}`)

/* { uid: -1,
  gid: -1,
  username: 'cuong.duong',
  homedir: 'C:\\Users\\cuong.duong',
  shell: null } */