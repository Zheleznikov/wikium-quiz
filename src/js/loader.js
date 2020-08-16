const loader = document.querySelector('.loader');


export default function() {
  console.log('hey')
  loader.classList.add('loader_on');
  setTimeout(() => loader.classList.remove('loader_on'), 3000)
}