const { Board, Thermometer } = require('johnny-five')
const fs = require('fs')
const path = require('path')

const board = new Board()

function start() {
  board.on('ready', () => {
    const thermometer = new Thermometer({
      controller: 'TMP36',
      pin: 'A0',
    })

    thermometer.on('change', () => {
      const ts = Date.now()
      const date = new Date(ts)
      let day = date.getDate()
      let month = date.getMonth() + 1
      let hours = date.getUTCHours() + 2
      let year = date.getFullYear()
      const { celsius } = thermometer
      let record = day + ',' + month + ',' + year + ',' + hours + ',' + celsius
      save(day,month,hours,year,celsius,record);
    })
  })
}

function save(day,month,hours,year,celsius,record) {

  console.log('Thermometer')
  console.log('day: ', day)
  console.log('month: ', month)
  console.log('year: ', year)
  console.log('hours: ', hours)
  console.log('celsius: ', celsius)
  console.log('--------------------------------------')

  var fs = require('fs')
  var logStream = fs.createWriteStream(path.resolve('./src/database/log.csv'), {
    flags: 'a',
  })
  logStream.write(record)
  logStream.end('\n')
  sleep(60000);
}

function sleep(milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}


module.exports = { board, start }

