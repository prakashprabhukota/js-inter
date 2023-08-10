const btn_start = document.getElementById("start");
const btn_stop = document.getElementById("stop");
const btn_reset = document.getElementById("reset");

let hourEle = document.getElementById("hour");
let minEle = document.getElementById("min");
let secEle = document.getElementById("sec");

let hour = 0;
let min = 0;
let sec = 0;
let timerId;

btn_start.addEventListener("click", () => fnStart());
btn_stop.addEventListener("click", () => fnStop());
btn_reset.addEventListener("click", () => fnReset());

function fnStart() {
  fnStop();
  console.log("Timer started");
  timerId = setInterval(() => myTimer(), 1000);
}
function fnStop() {
  clearInterval(timerId);
  console.log("Stopped the clicked");
}
function fnReset() {
  hour = 0;
  min = 0;
  sec = 0;
  updatePage();
  console.log("Clock has been Reset");
}

function myTimer() {
  sec++;
  console.log("Seconds running ", sec);
  if (sec > 59) {
    sec = 0;
    min++;
  }
  if (min > 59) {
    min = 0;
    hour++;
  }
  updatePage();
}

function formatTime(key) {
  return key >= 10 ? `${key}` : `0${key}`;
}

function updatePage() {
  hourEle.innerText = formatTime(hour);
  minEle.innerText = formatTime(min);
  secEle.innerText = formatTime(sec);
}
