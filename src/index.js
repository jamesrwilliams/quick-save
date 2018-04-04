export default class qs {

  constructor(args) {

    this.options = {
      storage: 'local',
      prefix: 'qs_',
      attribute: 'qs',
      debug: true
    };

    // TODO Load options
    this.initialize(this.options);

  }

  /**
   * Intialise the script
   */
  initialize(args) {

    this.$elms = document.querySelectorAll('[data-qs]');

    for (let i = 0; i < this.$elms.length; i++) {

      let $elm = this.$elms[i];

      if (!$elm.name) {

        console.log('QS - Form element needs a name attribute.', $elm);

      } else {

        let content = this.readLocalStorage($elm);

        if (content !== '') {

          // Load localStorage
          $elm.value = JSON.parse(content);

        }

        $elm.addEventListener('change', (event) => this.writeLocalStorage(event.srcElement));

      }

    }

  }

  /**
   * Wrapper for writing to designated storage system.
   * @param  {object} $elm  HTML Node object of the field that has changed.
   * @return {undefined}
   */
  writeLocalStorage($elm) {

    window.localStorage.setItem(this.getStorageKey($elm), JSON.stringify($elm.value));

  }

  /**
   * Load field data from storage.
   * @param  {object} $elm HTML Node object of the field that has changed.
   * @return {object}      JSON encoded content from provided elements storage.
   */
  readLocalStorage($elm) {

    let lsContent = window.localStorage.getItem(this.getStorageKey($elm));

    return lsContent;

  }

  /**
   * Returns the storage key using the provided element and the specified prefix.
   * @param  {object} $elm  HTML Node object of a field.
   * @return {string}       storage key string
   */
  getStorageKey($elm) {

    let lsKey = 'qs_' + $elm.tagName.toLowerCase() + '#' + $elm.name;

    return lsKey;

  }

  /**
   * Method that clears all storage data for provided key
   * @return {int} Number of removed elements.
   */
  clear(key) {

    // TOOD Clear all quick-save localstorage content;

  }

};
