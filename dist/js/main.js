window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("pwanii").click();
  //   console.log(document.getElementById("pwanii"));
});
function letaMaelezo(rangi, kiungo, id) {
  let maelezo, viungo;
  maelezo = document.getElementsByClassName("maelezo");
  viungo = document.getElementsByClassName("kiungo");

  //   Ficha Maelezo yote kwanza kabla ya yote
  for (let index = 0; index < maelezo.length; index++) {
    const element = maelezo[index];
    element.style.display = "none";
  }

  //   Ondoa darasa la 'hai' kwenye viungo vyote kwanza kabla ya yote
  for (let index = 0; index < viungo.length; index++) {
    const element = viungo[index];
    element.style.backgroundColor = "";
  }

  //   Rudisha div.maelezo iliyochaguliwa
  document.getElementById(id).style.display = "block";
  document.getElementById(id).style.backgroundColor = rangi;

  // Rusidha darasa la 'hai' kwenye kiungo kilichochaguliwa
  kiungo.style.backgroundColor = rangi;
}
