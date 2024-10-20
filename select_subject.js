// select_subject.js

// Получаем все кнопки выбора предметов
const subjectOptions = document.querySelectorAll('.subject-option');

// Добавляем обработчики событий на кнопки выбора предметов
subjectOptions.forEach(option => {
    option.addEventListener('click', function() {
        const selectedSubject = this.getAttribute('data-subject');
        // Сохраняем выбранные данные в localStorage
        localStorage.setItem('selectedSubject', selectedSubject);
        
        // Переход на страницу dashboard
        window.location.href = 'dashboard.html'; // Переход на страницу dashboard
    });
});
