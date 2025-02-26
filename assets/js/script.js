$(document).ready(function(){
    $('.blog__slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".blog__slider-arrow",
    arrows: true
    
    });
  });

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options); // Форматируем в нужный вид
  }

  // Функция для добавления даты ко всем постам
  function addDateToPosts() {
    const posts = document.querySelectorAll('.date'); // Находим все элементы с классом date

    posts.forEach((post, index) => {
      const currentDate = new Date(); // Получаем текущую дату
      post.textContent = formatDate(currentDate); // Устанавливаем дату для каждого поста
    });
  }

  // Запуск функции при загрузке страницы
  window.onload = addDateToPosts;


  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".trust-line");
    track.innerHTML += " " + track.innerHTML + " " + track.innerHTML + " " + track.innerHTML; // 4 цикла
    // Дублируем контент для бесконечной прокрутки
  });

  $(document).ready(function(){
    $('.certificate__slider').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    appendArrows:".certificate__slider-arrow",
    arrows: true
    
    });
  });