export function initScrollEffects() {
  const header = document.querySelector("header");
  const mainNav = document.querySelector("#navbar-primary");
  let isTop = true;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0 && isTop) {
      header.style.transform = "translateY(-10px)";
      mainNav.style.boxShadow = "0 1px 4px rgba(0, 0, 0, 0.3)";
      isTop = false;
    } else if (scrollTop === 0 && !isTop) {
      header.style.transform = "translateY(0px)";
      mainNav.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0)";
      isTop = true;
    }
  }

  window.addEventListener("scroll", handleScroll);
}
