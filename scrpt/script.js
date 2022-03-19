let audio = document.getElementById("audio");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let volup = document.getElementById("volup");
let voldown = document.getElementById("voldown");
let cur = document.getElementById("cur");
cur.value = 0;
play.addEventListener("click", function () {
  audio.play();
});
pause.addEventListener("click", function () {
  audio.pause();
});
volup.addEventListener("click", function () {
  audio.volume = audio.volume + 0.1;
});
voldown.addEventListener("click", function () {
  audio.volume = audio.volume - 0.1;
});

audio.addEventListener("timeupdate", function () {
  cur.max = audio.duration;
  percentPlayed = (audio.currentTime / audio.duration) * 100;
  cur.value = percentPlayed;
});
