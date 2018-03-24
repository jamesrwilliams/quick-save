# Quick Save

Utility script for saving forms fields to localStorage using data-attributes. Makes testing form applications quicker.
Quick-save uses the element type (i.e `input` or `textarea`) and the name attribute to generate a localStorage key for the data.

## Usage

Include the script and then initialize:

```
var qs = new qs();
```

## Options

_Work In Progress_

- [ ] Specify either local or session storage (default: local)
- [ ] Specify the storage key prefix (default: qs)
- [ ] Specify the data-attribute used for selecting fields to quick-save

```
var qs = new qs({
  
  storage: 'local',
  prefix: 'qs_',
  attribute: 'qs'
  
});
```