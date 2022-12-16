var spieler = document.querySelector(".player");

var spielfeld = document.querySelector(".playground");
var vollbildButton = document.querySelector(".fullscreen");

var spielfeld = document.querySelector(".playground");
var backgroundPosition = 0;

vollbildButton.addEventListener("click", function () {
  spielfeld.requestFullscreen();
});

spieler.style.left = "0px";
spieler.style.top = "280px";
var timerspielerfallen = new Timer(50);

var spielfeld = document.querySelector(".playground");

var timer = new Timer(60);

function steuerung() {
  if (keyboard(32) && parseInt(spieler.style.top) == 280) {
    spieler.style.top = parseInt(spieler.style.top) - 80 + "px";
  }
  if (parseInt(spieler.style.top) < 280 && timerspielerfallen.ready()) {
    spieler.style.top = parseInt(spieler.style.top) + 80 + "px";
  }
  if (keyboard(39)) {
    spieler.style.left = parseInt(spieler.style.left) + 5 + "px";
  }
  if (keyboard(37)) {
    spieler.style.left = parseInt(spieler.style.left) - 5 + "px";
  }
}

function plattenErstellen(posTop, posLeft, typPlatte) {
  var h = document.createElement("div");
  h.classList.add(typPlatte);
  h.style.top = posTop;
  h.style.left = posLeft;
  spielfeld.appendChild(h);
}

plattenErstellen("300px", "0px", "boden");

const MAX = 280;
const MIN = 0;

for (let index = 0; index < 5; index++) {
  posTopRand = Math.random() * (MAX - MIN) + MIN;
  posLeftRand = Math.random() * (MAX - MIN) + MIN;
  plattenErstellen(posTopRand + "px", posLeftRand + "px", "platten");
}

function loop() {
  // springen
  steuerung();
  //platten();
  if (timer.ready()) {
  }

  //TODO
  /*
- Hindernisse (Tutorial) erstellen (Platten erstellen)
- Random einfügen
- Kollision Tutorial (an Platte anwenden)
- Stoppuhr einfügen
- Highscore einfügen
*/
  window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);
