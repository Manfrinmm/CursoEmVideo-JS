var number = document.getElementById("number");
var table = document.querySelector("select#table");

function generateTable() {
  if (number.value.trim() === "") {
    alert("Por favor preencha os dados!");
    number.focus();

    return;
  }

  table.innerHTML = "";

  for (var i = 0; i <= 10; i++) {
    const option = document.createElement("option");
    const value = document.createTextNode(
      `${i} x ${number.value} = ${i * number.value}`
    );

    option.appendChild(value);

    table.appendChild(option);

    table.size = "11";
  }
}
