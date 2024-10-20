document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем введенные логин и пароль
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Здесь можно добавить проверку логина и пароля (например, по API или в localStorage)
    // Для примера, просто сохраняем логин и пароль в localStorage и переходим на страницу выбора класса
    localStorage.setItem('username', username); // Сохраняем логин
    localStorage.setItem('password', password); // Сохраняем пароль (для демонстрации, не рекомендуется в реальных приложениях)
    
    // Переход на страницу выбора класса
    window.location.href = 'select_class.html';
});
