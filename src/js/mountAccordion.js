import '../styles/accordion.scss';
export function mountAccordion() {
  const accordionContainer = document.getElementsByClassName('accordion')[0];
  if (!accordionContainer) return;

  const questionElements = accordionContainer.querySelectorAll('.accordion__item');

  questionElements.forEach((element) => {
    element.addEventListener('click', () => {
      const activeElement = accordionContainer.querySelector('.accordion__item.active');

      if (activeElement && activeElement !== element) {
        activeElement.classList.toggle('active');
      }
      //todo prideti next selektoriu, graziam isskleidimui.
      element.classList.toggle('active');
    });
  });
}
