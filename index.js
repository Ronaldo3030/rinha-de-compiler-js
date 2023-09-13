const fs = require('fs')
const { readData } = require('./utils')

const fileName = process.argv[2]
const file = fs.readFileSync(String(fileName), 'utf8')
const data = JSON.parse(file)

readData(data.expression)