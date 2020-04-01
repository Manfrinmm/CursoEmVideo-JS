function carregar() {
  var title = document.getElementById("msg");
  var img = document.getElementById("img");

  var data = new Date();
  var hour = data.getHours();

  if (hour > 6 && hour < 12) {
    img.setAttribute(
      "src",
      "http://www.radioburitis.com.br/files/2017/10/show-manha-novo-860x400.jpg"
    );

    document.body.style.background = "#fbec8a";
  } else if (hour > 12 && hour < 18) {
    img.src =
      "https://media-cdn.tripadvisor.com/media/photo-s/06/c4/78/b2/hostel-pe-na-mata.jpg";

    document.body.style.background = "#d3a363";
  } else {
    img.src =
      "https://www.mensagens10.com.br/wp-content/uploads/2013/05/7958573893.jpg";

    document.body.style.background = "#161137";
  }

  title.innerHTML = `Agora são ${hour} horas.`;
}
