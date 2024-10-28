const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (input.value < 1 || input.value > 100) {
    return;
  }
  for (let i = 0; i < input.value; i++) {
    const divBox = document.createElement("div");
    divBox.style.width = `${30 + i * 10}px`;
    divBox.style.height = `${30 + i * 10}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(divBox);
  }
  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
