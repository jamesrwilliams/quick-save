# Quick Save

Utility script for saving forms fields to browser storage using data-attributes. Makes testing form applications quicker.
QuickSave uses the element type (i.e `input` or `textarea`) and the name attribute to generate a storage key for the data.

## Usage

### 1. Include the Script

Either serve locally or you can use the [jsdeliver](https://www.jsdelivr.com/) CDN version:

```html
https://cdn.jsdelivr.net/gh/jamesrwilliams/quick-save@1.0.0/lib/qs.js
```

### 2. Add the `data-qa` attribute 

The script requires a name attribute (this is used for the storage key) for elements you want to be saved:

```html
<input type="text" data-qs name="example" id="name">
```

N.B - You can change the data- attribute using the [attribute option](#options).

### 3. Initialize:

```js
var qs = new qs();
```

## Options

Change script settings by passing an options object to the constructor, like so:

```js
var qs = new qs({
  
  attribute: 'qs',
  debug: true
  prefix: 'qs_',
  storage: 'local',
  
});
```

|Setting|Description|Example Value|Default Value|
|---|---|---|---|
|`attribute`| Replace the default data attribute to a custom one. Eg `data-[attribute]` | `custom-attribute` | `qs` |
|`debug`| Enable verbose feedback on missing attributes | `true` or `false` | `true` |
|`prefix`| Use a custom prefix for the storage keys | `custom_` | `qs_` |
|`storage`| Change the storage class for the data. |`session` or `local`|`local`|
