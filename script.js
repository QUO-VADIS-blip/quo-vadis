const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));

const lang = document.querySelector('#language');
lang?.addEventListener('change', () => {
  const value = lang.value;
  if (value === 'en') alert('English version can be connected here.');
  if (value === 'fr') alert('Version française peut être connectée ici.');
  if (value === 'nl') window.scrollTo({top:0, behavior:'smooth'});
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => nav?.classList.remove('open'));
});
