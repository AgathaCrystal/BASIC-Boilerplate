import "../scss/main.scss";
import { initNavigation, initActiveLinks } from './navigation';
import { initScrollEffects } from './scrollEffects';
import { initHamburgerMenu } from './hamburgerMenu';
import { initImageHandling } from './imageHandling';

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initActiveLinks();
  initScrollEffects();
  initHamburgerMenu();
  initImageHandling();
});
