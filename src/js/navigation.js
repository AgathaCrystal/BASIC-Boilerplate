export function initNavigation() {
  const navbarMenu = document.getElementById("navbar-menu");
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarNav = navbarMenu.querySelector("nav");
  const navbarBackdrop = navbarMenu.querySelector(".navbar-backdrop");

  console.log('test');

  function openMenu() {
    navbarMenu.classList.remove("hidden");
    setTimeout(() => {
      navbarNav.classList.remove("-translate-x-full");
    }, 10);
  }

  function closeMenu() {
    navbarNav.classList.add("-translate-x-full");
    setTimeout(() => {
      navbarMenu.classList.add("hidden");
    }, 300);
  }

  navbarToggle.addEventListener("click", openMenu);
  navbarBackdrop.addEventListener("click", closeMenu);
  navbarMenu.addEventListener("click", (e) => {
    if (e.target === navbarMenu) closeMenu();
  });
}

export function initActiveLinks() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = Array.from(document.querySelectorAll("main > section"));
  const sectionLinks = Array.from(navLinks).filter((link) =>
    sections.some((section) => `#${section.id}` === link.getAttribute("href"))
  );

  function setActiveLink() {
    const scrollPosition = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        sectionLinks.forEach((link) => link.classList.remove("font-bold", "text-primary"));
        const activeLink = sectionLinks.find(
          (link) => link.getAttribute("href") === `#${section.id}`
        );
        if (activeLink) activeLink.classList.add("font-bold", "text-primary");
      }
    });
  }

  function handleLinkClick(e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(href);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 200,
          behavior: "smooth",
        });
      }
    }
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);
  navLinks.forEach((link) => link.addEventListener("click", handleLinkClick));
}
