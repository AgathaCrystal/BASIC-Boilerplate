export function initHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navbarMenu = document.getElementById('navbar-menu');

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    navbarMenu.classList.toggle('hidden');
  });
}
