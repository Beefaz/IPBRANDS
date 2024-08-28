export function injectSVGs(attributeName ='data-svg', svgs = {}) {
  const elements = document.querySelectorAll(`[${attributeName}]`);

  elements.forEach(element => {
    const svgKey = element.getAttribute(attributeName);
    const svgString = svgs[svgKey];

    if (svgString) {
      element.innerHTML = svgString;
      const svgElement = element.querySelector('svg');
      svgElement.classList.add('injected-svg');
    } else {
      console.error('No SVG string found for:', svgKey);
    }
  });
}
