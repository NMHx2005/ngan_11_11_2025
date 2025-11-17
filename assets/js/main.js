document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 900,
    easing: "ease-out-quart",
    once: true,
    offset: 80,
  });

  const scrollLinks = document.querySelectorAll('.nav__links a, .footer__column a[href^="#"], .logo');
  const scrollOffset = 70;

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;
        event.preventDefault();
        const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - scrollOffset,
          behavior: "smooth",
        });
      }
    });
  });
});

