var fs = require("fs");
var CleanCSS = require("clean-css");
var cssToCssJS = require("css-to-css.js");

var normalize_css     = fs.readFileSync(require.resolve("normalize.css"), "utf8");
var normalize_css_min = new CleanCSS().minify(normalize_css).styles;
var normalize_css_js  = cssToCssJS(normalize_css_min);

fs.writeFileSync("./index.js", "module.exports = " + normalize_css_js);
