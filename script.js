document.addEventListener("DOMContentLoaded", () => {
  // Бургер-меню
  const toggle = document.querySelector('.navbar__toggle');
  const mobileMenu = document.querySelector('.navbar__menu-mobile');
  
  console.log('Toggle found:', toggle);
  console.log('Mobile menu found:', mobileMenu);
  
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const isOpen = mobileMenu.classList.contains('navbar__menu-mobile--open');
      console.log('Menu is open:', isOpen);
      
      if (isOpen) {
        // Закрываем меню
        mobileMenu.classList.remove('navbar__menu-mobile--open');
        toggle.classList.remove('navbar__toggle--active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Открыть меню');
        console.log('Menu closed');
      } else {
        // Открываем меню
        mobileMenu.classList.add('navbar__menu-mobile--open');
        toggle.classList.add('navbar__toggle--active');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Закрыть меню');
        console.log('Menu opened');
        console.log('Menu classes:', mobileMenu.className);
      }
    });

    // Закрываем меню при клике на ссылку
    const mobileLinks = mobileMenu.querySelectorAll('.navbar__link-mobile');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('navbar__menu-mobile--open');
        toggle.classList.remove('navbar__toggle--active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Открыть меню');
      });
    });

    // Закрываем меню при клике вне его
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('navbar__menu-mobile--open');
        toggle.classList.remove('navbar__toggle--active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Открыть меню');
      }
    });
  }

  // Оригинальный код для кнопки
  const button = document.getElementById("actionButton");
  if (!button) return;

  button.addEventListener("click", () => {
    console.log("JS работает ✅");
    alert("JS подключён и работает!");
  });
});

