const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігає перезавантаженню сторінки

  const { email, password } = form.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевірка на порожні поля
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  // Збираємо дані у об'єкт
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData); // Виводимо об'єкт в консоль

  form.reset(); // Очищення форми
});

