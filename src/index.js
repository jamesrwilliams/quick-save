export default class qs {

  constructor() {

    console.log('QS Demo');

    this.$elms = document.querySelectorAll('[data-qs]');

    for (let i = 0; i < this.$elms.length; i++) {

      let $elm = this.$elms[i];

      if (!$elm.name) {

        console.log("QS - Form Elements need a 'name' attribute.");

      }

      window.localStorage.setItem($elm.name, JSON.stringify($elm.value));

      // $elm.addEventListener('input', function(event){

      // console.log("Changed", event);

      // });

    }

  }

  writeLocalStorage($elm) {

    console.log('writeLocalStorage');

  }

  readLocalStorage($elm) {

    console.log('readLocalStorage');

  }

};
