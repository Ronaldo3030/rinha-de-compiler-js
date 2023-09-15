const fs = require('fs')
const { compileNode } = require('./utils')

const fileName = process.argv[2]
const file = fs.readFileSync(String(fileName), 'utf8')

const compile = (jsonCode) => {
  const ast = JSON.parse(jsonCode)

  const code = compileNode(ast.expression);
  // console.log(code)

  eval(code)
}

compile(file);