// script.js

// Функция для обработки нажатия кнопки логина
document.querySelector('.login').addEventListener('click', function () {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Простая проверка логина (это можно заменить на более сложную логику)
    if (email === 'user@example.com' && password === '{{sensitive data}}') {
        // Сохранение логина (или другой информации) в localStorage
        localStorage.setItem('userEmail', email);

        // Перенаправление на страницу выбора класса
        window.location.href = 'index.html';
    } else {
        alert('Неверный логин или пароль');
    }
});
