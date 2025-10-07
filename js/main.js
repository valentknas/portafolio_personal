// 🌙 Espera a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", () => {

  // 🔹 Scroll suave entre secciones
  const links = document.querySelectorAll('.menu-personal a[href^="#"]');
  const headerHeight = document.querySelector(".header-personal").offsetHeight;

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const offsetTop = target.offsetTop - headerHeight + 10; // ajusta el +10 si el título sigue muy arriba
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // 🔹 Cambiar color al enlace activo mientras haces scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".menu-personal a");

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + headerHeight + 100; // margen para detección

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`.menu-personal a[href="#${section.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  });

  // 🔹 Inicializa AOS (animaciones)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
});
