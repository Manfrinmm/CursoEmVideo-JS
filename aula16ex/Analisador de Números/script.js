const inputNumber = document.getElementById("number");
const response = document.getElementById("response");
const tableValues = document.getElementById("values");
var number;
const numbers = [];

var smaller = null;
var bigger = null;

function calculateSumAndAverage() {
  var sum = 0;

  for (number of numbers) {
    sum += number;
  }
  const average = sum / numbers.length;

  return [sum, average];
}

function NumberAlreadyAdd(number) {
  const numberFound = numbers.find(item => item == number);

  if (numberFound) {
    return true;
  }

  return false;
}

function addNumber() {
  number = Number(inputNumber.value);

  if (number < 1 || number > 100) {
    inputNumber.focus();

    inputNumber.value = "";

    return alert("Erro, adicione um número válido!");
  }

  if (NumberAlreadyAdd(number)) {
    inputNumber.focus();

    inputNumber.value = "";

    return alert("Número já adicionado!");
  }

  if (bigger === null || bigger < number) {
    bigger = number;
  }

  if (smaller === null || smaller > number) {
    smaller = number;
  }

  numbers.push(number);

  const option = document.createElement("option");
  const value = document.createTextNode(`Valor ${number} adicionado.`);

  option.appendChild(value);

  tableValues.appendChild(option);

  inputNumber.value = "";
  response.innerHTML = "";
}

function generateResult() {
  const [sum, average] = calculateSumAndAverage();

  const message = `
  <p>Ao todo, tempos ${numbers.length} números cadastrados</p>
  <p>O maior valor informado foi ${bigger}.</p>
  <p>O menor valor informado foi ${smaller}.</p>
  <p>Somando todos os valores, temos ${sum}.</p>
  <p>A média dos valores digitados é ${average.toFixed(2)}.</p>
  `;

  response.innerHTML = message;
}
