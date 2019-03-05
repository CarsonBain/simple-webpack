require('./scss/main.scss');
import img from '../src/images/thumb.png';
console.log('Webpack is working!');
document.querySelector(
  '.image'
).innerHTML = `<img src='${img}' alt='Thumbs up' />`;
