export default class Form {
  constructor(form) {
    this.form = form;
    this.button = this.form.querySelector('.form__button');
    this.name = this.form.querySelector('.name');
    // this.surname = this.form.querySelector('.surname');
    this.email = this.form.querySelector('.email');
    this.phone = this.form.querySelector('.phone');
    this.handle();
  }

  validation() {
    if (this.name.value.length > 1 && this.email.value.length > 1 && this.phone.value.length > 1) {
      this.button.removeAttribute('disabled');
    } else {
      this.button.setAttribute('disabled', 'disabled');
    }
  }

  handle() {
    this.form.addEventListener('input', this.validation.bind(this));
  }



  sendUserData() {
    return fetch('http://httpbin.org/post', {
      method: 'POST',
      // mode: 'no-cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      body: new FormData (this.form)
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
    .catch((err) => {
      throw new Error(err);
    });
  }
}