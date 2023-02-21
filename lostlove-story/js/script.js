const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const themeBtn = document.querySelectorAll('.theme-btn');

const navToggleFunc = function () {
  nav.classList.toggle('active');
};

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

const setTheme = function (theme) {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(theme);
  for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].classList.remove('light', 'dark');
    themeBtn[i].classList.add(theme === 'light-theme' ? 'light' : 'dark');
  }
  localStorage.setItem('theme', theme);
};

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', function () {
    setTheme(
      document.body.classList.contains('light-theme') ? 'dark-theme' : 'light-theme'
    );
  });
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
}