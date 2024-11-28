let timerElement = document.getElementById("timer");
let header1 = document.getElementById("header1");
let header2 = document.getElementById("header2");
let footer1 = document.getElementById("footer1");
let footer2 = document.getElementById("footer2");
let scrollTopBtn = document.getElementById("scrollTopBtn");

let timeLeft = 90;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    timeLeft = 90;
    toggleHeadersAndFooters();
  }
}

function toggleHeadersAndFooters() {
  header1.classList.toggle("hidden");
  header2.classList.toggle("hidden");
  footer1.classList.toggle("hidden");
  footer2.classList.toggle("hidden");
}

setInterval(updateTimer, 1000);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
