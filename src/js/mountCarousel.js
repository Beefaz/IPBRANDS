//mounts carousel and changes location of buttons in order to match style

export function mountCarousel(className = 'main-carousel') {
  new Flickity(`.${className}`);
  const carousel = document.getElementsByClassName(className)[0];
  const controls = carousel.querySelectorAll(`.flickity-prev-next-button.previous, .flickity-page-dots, .flickity-prev-next-button.next`);
  const controlsContainer = document.createElement('div');

  controlsContainer.className = "flickity-controls";
  controlsContainer.append(...controls);
  carousel.append(controlsContainer);
}
