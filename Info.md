## Gaming

- Phaser
- PixiJs
- Impact
- Melon.js
- CraftyJs

## bibliografia Vídeo#03

- JavaScript O guia definitivo
- JavaScript O guia do programador

## Tipos primitivos Vídeo#05

- Number
  - Infinity
  - NaN
- String
- Boolean
- Null (É considerado um objeto)
- Undefined
- Object
  - Array
- Function

## Conversão Vídeo#06

- `Number.parseInt(n)` ou `parseInt(n)`

  - Faz conversão de um numero para inteiro

- `Number.parseFloat(n)` ou `parseFloat(n)`

  - Faz conversão de um numero para float

- `Number(n)`

  - Faz conversão para o tipo recebido (flota ou int)

- `String(n)` ou `n.toString()`

  - Faz a conversão para string

- Atributos

  `n.length` : Tamanho da string

  `n.toUpperCase()` : Maiúscula

  `n.toLowerCase()` : Minusculas

  `n.toFixed(x)` : Para escolher a quantidade de casas decimais, sendo x a quantidade. Esse método retorna uma string.

  `n.replace('a','b')` : Para trocar uma coisa (a) por outra (b)

  `n.toLocaleString('x', {style: 'currency', currency: "BRL"})` : Busca o local (x), estiliza como dinheiro, e define a moeda

## Operadores Vídeo#07

- Aritméticos

  - `+` Soma.
  - `-` Subtração.
  - `*` Multiplicação.
  - `/` Divisão.
  - `%` Resto da divisão.
  - `**` Potência.

- Simplificação

  - `n+=A` Realiza a operação `Aritmética` do valor `n` com valor `A`.
  - `n-=A` Realiza a operação `Aritmética` do valor `n` com valor `A`.
  - `n*=A` Realiza a operação `Aritmética` do valor `n` com valor `A`.
  - `n/=A` Realiza a operação `Aritmética` do valor `n` com valor `A`.
  - `n**=A` Realiza a operação `Aritmética` do valor `n` com valor `A`.
  - `n%=A` Realiza a operação `Aritmética` do valor `n` com valor `A`.

- Incremento
  - Pós
    - `n++` Realiza a operação `Aritmética` do valor `n` com 1.
    - `n--` Realiza a operação `Aritmética` do valor `n` com 1.
  - Pré
    - `++n` Realiza a operação `Aritmética` do valor `n` com 1.
    - `--n` Realiza a operação `Aritmética` do valor `n` com 1.

## Operadores Vídeo#08

- Relacionais

  - `A > B` Valor `A` maior `B`. Retorna um valor booleano.
  - `A < B` Valor `A` menor`B`. Retorna um valor booleano.
  - `A >= B` Valor `A` maior e igual `B`. Retorna um valor booleano.
  - `A <= B` Valor `A` menor e igual`B`. Retorna um valor booleano.
  - `A == B` Valor `A` igual `B`. Retorna um valor booleano.
  - `A != B` Valor `A` diferente `B`. Retorna um valor booleano.
  - `A === B` Valor `A` igual e mesmo tipo `B`. Retorna um valor booleano.

- Lógicos

  - `!` Negação de um valor booleano.
  - `&&` Conjunção.
  - `||` Disjunção.

- Ternário
  - `teste? true : false`.

## Métodos(seletores) de acesso Vídeo#09

- Árvore DOM
  - location
  - document
    - html
      - head
        - meta
        - title
        - style
      - body
        - h1 ...
        - script
  - history

métodos de acesso:

- Marca:
  - `getElementsByTagName("element")` : Seleciona o `element` do HTML. Consegue selecionar mais de um objeto.
  - `getElementsByTagName("element")[x]` : Seleciona o `element` do HTML na posição `x` da DOM.
- Id:
  - `getElementById("element")`.
- Nome:
  - `getElementsByName("element")`.
- Classe:
  - `getElementsByClassName("element")`.
- Seletor - Seleção com os seletores do CSS:
  - `querySelector("element")`.
  - `querySelectorAll("element")`.
- Atributos:
  - innerText -> Pega o texto dentro do elemento
  - innerHTML -> Pega o conteúdo dentro do elemento
  - Toda classe é representada por `.`
  - Toda div é presentada por `#`

## Eventos de um elemento Vídeo#10

[Biográfia](https://developer.mozilla.org/pt-BR/docs/Web/Events)

- `mouseenter` -> mouse entra na area da div
- `mousemove` -> mouse se move na area
- `mousedown` -> mouse é pressionado dentro da area
- `mouseup` -> mouse é "des-pressionado" dentro da area
- `click` -> area é clicada pelo mouse
- `mouseout` -> mouse sai da area

## Array Vídeo#15

- `n.push(x)` Adiciona `x` ao Array `n`.
- `n.length` Retorna o tamanho do Array `n`.
- `n.sort()` Ordena os dados dentro do Array `n`.
- `n.indexOf(x)` Retorna a posição do item(`x`) no Array `n`. Caso tenha, ele retorna a posição, se não retorna -1.

- `for(let index in n){}` Percorre cada posição(`index`) do Array `n`.
- `for(let item of n){}` Percorre cada elemento(`item`) do Array `n`.
