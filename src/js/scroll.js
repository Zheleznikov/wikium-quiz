import SmoothScroll from 'smooth-scroll';

export default scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  easing: 'Linear',
  speedAsDuration: true
});
