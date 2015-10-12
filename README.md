# normalize.css.js
Inject normalize.css into browser by require("normalize.css.js"). This also returns the css code and safe to run on the server.

 * No browserify transform needed.
 * This works similar to [insert-css](https://www.npmjs.com/package/insert-css).
 * Always installs the latest [normalize.css](https://www.npmjs.com/package/normalize.css).
 * Runs safely on both client and server

## Example
```js
require("normalize.css.js");
```
On the browser it will inject the css into the `<head>`

You can also use this to get the css code of normalize.css
```js
var normalize_css_code = require("normalize.css.js");
```

## Install
```sh
$ npm install --save normalize.css.js
```

## License
MIT
