# Meu Projeto da Rinha de Interpretador
Este é um projeto que participa da Rinha de Interpretador, uma competição de programação que consiste em fazer um interpretador ou compilador que rode em uma máquina com 2 núcleos e 2G de RAM.

O interpretador ou compilador deve trabalhar com uma árvore sintática abstrata (AST) que está armazenada no formato JSON. Essa AST é gerada por uma ferramenta específica disponível no https://github.com/aripiprazole/rinha-de-compiler.

A responsabilidade do projeto é receber esse JSON que contém a AST e, em seguida, interpretar ou compilar o programa de acordo com as informações fornecidas na AST.

## Funcionalidades
O projeto implementa um interpretador em JavaScript que lê o JSON da AST e gera código JavaScript equivalente, usando a função eval para executar o código.

O projeto suporta os seguintes tipos de nós da AST:

- Let: declaração de variável
- Str: string literal
- Var: referência a variável
- Function: declaração de função
- If: condicional
- Call: chamada de função
- Binary: operação binária
- Int: inteiro literal
- Print: impressão na tela
## Requisitos
Para executar o projeto, é necessário ter instalado:

* Node.js


## Como clonar a aplicação
Para clonar a aplicação, você precisa ter o Git instalado no seu computador. Em seguida, execute o seguinte comando no terminal:

```git clone https://github.com/seu-usuario/meu-projeto.git```

Isso irá criar uma pasta chamada meu-projeto com os arquivos do projeto.
## Como usar
Para usar o projeto, você precisa ter o Node.js instalado no seu computador. Em seguida, execute o seguinte comando na pasta do projeto:

```npm i```

Isso irá instalar as dependências necessárias para o projeto.

Para rodar o interpretador, execute o seguinte comando:

```node index.js (caminho do arquivo .json)```

Onde (caminho do arquivo .json) é o caminho relativo ou absoluto do arquivo JSON que contém a AST que você quer interpretar.

Por exemplo, para rodar o arquivo files/fib.json, execute:

```node index.js files/fib.json```

O resultado do programa será impresso na tela.

## Como testar
Para testar o projeto, você pode usar o arquivo files/fib.rinha e gerar com o programa que disponibilizam no https://github.com/aripiprazole/rinha-de-compiler um JSON ou você pode usar diretamente o JSON que está em files/fib.json.

Durante a rinha, eles irão adicionar outros testes :)

Você também pode criar seus próprios arquivos .rinha e gerar os respectivos JSONs usando a ferramenta da Rinha.