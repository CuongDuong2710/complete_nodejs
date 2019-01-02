console.log('Starting notes.js')

module.exports.age = 25

module.exports.addNote = function() {
  console.log('addNote')
  return 'New note'
}

module.exports.addNoteArrow = () => {
  console.log('addNoteArrow')
  return 'New note arrow'
}

module.exports.plus = function(a, b) {
  return a + b
}

module.exports.minus = (a, b) => {
  return a - b
}
