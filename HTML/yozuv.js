const words = ["Dasturchiman", "Dizaynerman", "Mobilografman" ,"Millionerman"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;
const speed = 100;
const pause = 1500;
const textEl = document.getElementById("changing-text");

function type() {
  currentWord = words[i];
  if (isDeleting) {
    j--;
    textEl.textContent = currentWord.substring(0, j);
  } else {
    j++;
    textEl.textContent = currentWord.substring(0, j);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, pause);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, speed);
  }
}

type();