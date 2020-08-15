export default function removeHash() {
  setTimeout(() => {
    history.pushState("", document.title, window.location.pathname);
  }, 1);
}