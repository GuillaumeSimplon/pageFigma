const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('navbarScrolled');
  } else if (window.scrollY <= 50) {
    navbar?.classList.remove('navbarScrolled');
  }
});