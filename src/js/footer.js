const footer = document.querySelector('.footer');
const footerShare = document.querySelector('.footer__share');
const footerPres = document.querySelector('.footer__modal');

export function showShare() {
  footer.classList.add('footer_all');
  footerShare.classList.add('footer__share_on');
  footerPres.classList.add('footer__modal_on');
}

export function hideShare() {
  footer.classList.remove('footer_all');
  footerShare.classList.remove('footer__share_on');
  footerPres.classList.remove('footer__modal_on');
}