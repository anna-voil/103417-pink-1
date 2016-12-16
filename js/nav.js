var navItems = document.querySelector('.nav__items');
var navButton = document.querySelector('.nav__button');

navButton.addEventListener('click', function() {
  if (navItems.classList.contains('nav__items--opened')) { /*Проверка условия, что меню открыто и закрываем меню*/
    navItems.classList.remove('nav__items--opened'); /*Убираем модификатор --opened*/
    navButton.classList.remove('nav__button--opened'); /* -||- */
  } else {
    navItems.classList.add('nav__items--opened');
    navButton.classList.add('nav__button--opened');
  }
});
