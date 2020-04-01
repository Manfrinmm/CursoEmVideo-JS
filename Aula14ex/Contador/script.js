const inputStart = document.getElementById("start");
const inputEnd = document.getElementById("end");
const inputSteps = document.getElementById("steps");
const answer = document.querySelector("section p");

function handleCounter() {
  var start = Number(inputStart.value);
  var end = Number(inputEnd.value);
  var steps = Number(inputSteps.value);

  answer.innerHTML = "";

  if (!end || !steps) {
    answer.innerHTML = "Impossível contar!";
    return;
  }

  for (var i = start; i <= end; i += steps) {
    answer.innerHTML += `${i} ${
      i + steps > end ? " &#128073 &#127937 " : " &#128073 "
    }`;
  }
}
