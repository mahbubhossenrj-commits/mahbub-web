const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

let currentLanguage = 'en';
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'bn' : 'en';
  document.documentElement.lang = currentLanguage;
  document.body.classList.toggle('bn', currentLanguage === 'bn');
  document.querySelectorAll('[data-en][data-bn]').forEach(element => {
    element.innerHTML = element.dataset[currentLanguage];
  });
  langToggle.textContent = currentLanguage === 'en' ? 'বাংলা' : 'English';
});

document.getElementById('year').textContent = new Date().getFullYear();
