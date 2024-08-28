import './src/styles/main.scss'
import {injectSVGs} from './src/js/svgloader.js';
import {svgStrings} from "./src/js/svgStrings.js";
import {mountCarousel} from "./src/js/mountCarousel.js";
import {mountAccordion} from "./src/js/mountAccordion.js";

injectSVGs('data-svg', svgStrings);
mountCarousel('main-carousel');
mountAccordion();
