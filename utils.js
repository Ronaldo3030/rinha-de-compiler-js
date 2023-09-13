const readData = (data) => {
  const valueExpression = data.kind

  switch (valueExpression) {
    case 'Let':
      console.log('é pra add um valor')
      break;
    case 'Str':
      console.log(data.value)
      break;
    case 'Print':
      readData(data.value)
      break;
    default:
      console.log('Undefined method')
      break;
  }
}

module.exports = { readData }