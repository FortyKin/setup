const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const letters = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97));
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomLetter = getRandomLetter();
  color.textContent = randomLetter;
});

function getRandomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}