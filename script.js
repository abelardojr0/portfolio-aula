let lastScrollTop = 0; // Armazena a posição do scroll anterior
const header = document.querySelector(".header"); // Seleciona o elemento header

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Posição atual do scroll

  if (currentScroll > lastScrollTop) {
    // Se o scroll foi para baixo, esconder o header
    header.classList.add("hidden");
  } else {
    // Se o scroll foi para cima, mostrar o header
    header.classList.remove("hidden");
  }

  // Atualiza a posição do scroll
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
