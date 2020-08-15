import SmoothScroll from 'smooth-scroll';

export default scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  easing: 'Linear'
});
