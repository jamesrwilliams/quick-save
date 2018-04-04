# Quick Save

Utility script for saving forms fields to localStorage using data-attributes. Makes testing form applications quicker.
Quick-save uses the element type (i.e `input` or `textarea`) and the name attribute to generate a localStorage key for the data.

## Usage

### 1. Include the Script

Either serve locally or you can use the [jsdeliver](https://www.jsdelivr.com/) CDN version:

```
https://cdn.jsdelivr.net/gh/jamesrwilliams/quick-save@1.0.0/lib/qs.js
```

### 2. Add the `data-qa` attribute 

The script requires a name attribute (this is used for the LocalStorage key) for elements you want to be saved:

```
<input type="text" data-qs name="example" id="name">
```

### 3. Initialize:

```
var qs = new qs();
```

## Options

_Work In Progress_

- [ ] Specify either local or session storage (default: local)
- [ ] Specify the storage key prefix (default: qs)
- [ ] Specify the data-attribute used for selecting fields to quick-save
- [ ] Debug - Notifies if elements are missing required attributes (name vs data-qs-name etc)

```
var qs = new qs({
  
  storage: 'local',
  prefix: 'qs_',
  attribute: 'qs',
  debug: true
  
});
```
