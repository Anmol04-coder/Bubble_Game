var timer = 10;
var score = 0;
var hitrn = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 70; i++) {
    clutter += ` <div id="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer() {
  var timeInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timeInt);
      document.querySelector(
        "#pbottom"
      ).innerHTML = `<h1 id="endLine">GAME OVER<h1>`;
    }
  }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
  var clickedNo = Number(dets.target.textContent);
  if (hitrn == clickedNo) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
//increaseScore();
runTimer();
makeBubble();
