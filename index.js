const fs = require('fs')
const { compileNode } = require('./utils')

try {
  const fileName = process.argv[2]
  const file = fs.readFileSync(String(fileName), 'utf8')
  const compile = (jsonCode) => {
    const ast = JSON.parse(jsonCode)

    const code = compileNode(ast.expression);
    // console.log(code)
    eval(code)
  }

  const start = process.hrtime();
  compile(file);
  const diff = process.hrtime(start);
  const nanoseconds = diff[0] * 1e9 + diff[1];
  const seconds = nanoseconds / 1e9;
  console.log(`\x1b[34mInterpreter Exec. Time in: ${seconds.toFixed(2)} seconds\x1b[0m`);
} catch (error) {
  console.log('\x1b[31m ERROR: \n \x1b[0m' + error.message);
}

