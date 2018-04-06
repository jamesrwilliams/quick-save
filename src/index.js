export default class qs {

  constructor(args) {

    this.options = {
      storage: 'local',
      prefix: 'qs_',
      attribute: 'qs',
      debug: false
    };

    this.storage;

    this.initialize(args);

  }

  /**
   * Initialise the script
   */
  initialize(args) {

    // Parse user arguments
    this.options = Object.assign(this.options, args);

    // Determine the storage vector
    if (this.options.storage === 'local') {

      this.storage = window.localStorage;

    } else if (this.options.storage === 'session') {

      this.storage = window.sessionStorage;

    } else {

      console.error('QS - Unknown storage option. Please use either "session" or "local".');

    }

    this.$elms = document.querySelectorAll('[data-' + this.options.attribute + ']');

    for (let i = 0; i < this.$elms.length; i++) {

      let $elm = this.$elms[i];

      if (!$elm.name && this.options.debug === true) {

        console.warn('QS - Form element needs a name attribute.', $elm);

      } else {

        let content = this.readFromStorage($elm);

        if (content !== '') {

          $elm.value = JSON.parse(content);

        }

        $elm.addEventListener('change', (event) => this.writeToStorage(event.srcElement));

      }

    }

  }

  /**
   * Wrapper for writing to designated storage system.
   * @param  {object} $elm  HTML Node object of the field that has changed.
   * @return {undefined}
   */
  writeToStorage($elm) {

    this.storage.setItem(this.getStorageKey($elm), JSON.stringify($elm.value));

  }

  /**
   * Load field data from storage.
   * @param  {object} $elm HTML Node object of the field that has changed.
   * @return {object}      JSON encoded content from provided elements storage.
   */
  readFromStorage($elm) {

    let lsContent = this.storage.getItem(this.getStorageKey($elm));

    return lsContent;

  }

  /**
   * Returns the storage key using the provided element and the specified prefix.
   * @param  {object} $elm  HTML Node object of a field.
   * @return {string}       Storage key string
   */
  getStorageKey($elm) {

    let lsKey = this.options.prefix + $elm.tagName.toLowerCase() + '#' + $elm.name;

    return lsKey;

  }

  /**
   * Method that clears all storage data for provided key
   * @return {int} Number of removed elements.
   */
  removeFromStorage(key) {

    if (key) {

      this.storage.removeItem(key);

    }

  }

  /**
   * Clears the current storage vector
   * @return {undefined}
   */
  removeAll() {

    this.storage.clear();

  }

};
