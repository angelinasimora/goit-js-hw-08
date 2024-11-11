function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Отримуємо посилання на необхідні елементи
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");

// Додаємо обробник події на кнопку
changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor(); // Генеруємо випадковий колір
  body.style.backgroundColor = randomColor; // Змінюємо фон body
  colorSpan.textContent = randomColor; // Відображаємо колір у span
});
