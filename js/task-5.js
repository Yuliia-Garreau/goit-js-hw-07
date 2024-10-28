// const body = document.querySelector("body");
// element.addEventListener(event, handler, options);
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
function getRandomHexColor() {
  const color = span.textContent;
  return `#${Math.floor(Math.random(color) * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", function () {
  const getColor = getRandomHexColor();
  document.body.style.backgroundColor = getColor;
  span.textContent = getColor;
});
