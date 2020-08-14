export default class Form {
  constructor(form) {
    this.form = form;
    this.button = this.form.querySelector('.form__button');
    this.name = this.form.querySelector('.name');
    this.surname = this.form.querySelector('.surname');
    this.email = this.form.querySelector('.email');
    this.phone = this.form.querySelector('.phone');
    this.handle();
  }

  handle() {
    // this.button.addEventListener('click', () => {
    //   console.log('clicked');
    // })

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.sendUserData(this.name.value, this.surname.value, this.email.value, this.phone.value)
      .then(res => {
        console.log(res.data);
        window.location.hash = '#12';
      })

    })
  }

  sendUserData(name, surname, email, phone) {
    return fetch('http://httpbin.org/post', {
      method: 'POST',
      // mode: 'no-cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin',
      body: JSON.stringify({
        name, surname, email, phone
      }),
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