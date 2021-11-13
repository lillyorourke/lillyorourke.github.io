let body = document.querySelector("body");
let text = document.getElementById("text");
let feedback = document.getElementById("feedback");
button = document.getElementById("button");
console.log(button);

let startTime = 0;

const messages = [
  "Xavier is cool",
  "lilly is lame",
  "Randy is fatS",
  "Isabel is lazy",
];

let isStarted = false;

button = document.getElementById("button");
button.innerHTML = "START";

button.onclick = () => {
  button.classList.toggle("stop");
  if (isStarted) {
    console.log("stopped");
    const timePassed = Date.now() - startTime;
    console.log(timePassed / 1000);
    text.innerHTML = formatTime(timePassed);
    isStarted = false;
    button.innerHTML = "START";
    feedback.innerHTML = giveFeedback(Math.abs(5000 - timePassed));
  } else {
    console.log("started");
    startTime = Date.now();
    isStarted = true;
    button.innerHTML = "STOP";
    feedback.innerHTML = "";
  }
};

function formatTime(time) {
  let formattedTime = (seconds = time / 1000);
  formattedTime = `${seconds.toFixed(3)}`.replace(".", ":");

  return formattedTime;
}

function onRepaint() {
  if (isStarted) {
    const timePassed = Date.now() - startTime;
    text.innerHTML = formatTime(timePassed);
  }
  window.requestAnimationFrame(onRepaint);
}

onRepaint();
function giveFeedback(score) {
  if (score == 0) {
    return "PERFECT!!";
  }
  if (score <= 10) {
    return "Legendary score";
  }
  if (score <= 20) {
    return "Great Job HAHA";
  }
  if (score <= 40) {
    return "not bad, i guess..";
  }
  if (score <= 70) {
    return "try harder next time";
  }
  if (score <= 100) {
    return "you're on the right track";
  }
  if (score <= 150) {
    return "come on, you can do better than that";
  }
  if (score <= 200) {
    return "you know what they say, practice makes perfect";
  }
  if (score <= 300) {
    return "even celia could do better than that";
  }
  if (score <= 500) {
    return "LOSER ALERT";
  }
  if (score <= 750) {
    return "you suck noob";
  }
  return "you make me sick";
}
