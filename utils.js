const compileNode = (node) => {
  let jsCode = "";
  switch (node.kind) {
    case "Let":
      jsCode += `let ${node.name.text} = ${compileNode(node.value)};`;
      break;

    case "Str":
      return `"${node.value}"`;

    case "Var":
      return node.text;

    case "Function":
      jsCode += `function(${node.parameters[0].text}){${compileNode(node.value)}}`
      break;

    case "If":
      jsCode += `if(${compileNode(node.condition)}){
        return ${compileNode(node.then)}
      }else{
        return ${compileNode(node.otherwise)}
      }`
      break;

    case "Call":
      jsCode += `${compileNode(node.callee)}(${compileNode(node.arguments[0])})`;
      break;

    case "Binary":
      return `${compileNode(node.lhs)} ${binaryOp(node.op)} ${compileNode(node.rhs)}`

    case "Int":
      return node.value;

    case "Print":
      jsCode += `console.log(${compileNode(node.value)});`;
      break;

    default:
      break;
  }

  if(node.next){
    jsCode += compileNode(node.next)
  }

  return jsCode;
}

const binaryOp = (op) => {
  switch (op) {
    case "Add":
      return '+';
    case "Sub":
      return '-';
    case "Mul":
      return '*';
    case "Div":
      return "/";
    case "Lt":
      return "<";
    case "Gt":
      return ">";
    case "Lte":
      return "<=";
    case "Gte":
      return ">=";
    case "And":
      return "&&";
    case "Or":
      return "||";
    default:
      break;
  }
}

module.exports = { compileNode }