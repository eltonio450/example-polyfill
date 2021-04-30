const polyfillLibrary = require('polyfill-library');
const fs =require("fs")

polyfillLibrary.getPolyfillString({
    uaString: 'Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)',
    minify: true,
    features: {
        'Intl.~locale.en': {}
    }
}).then(function(bundleString) {
    fs.writeFileSync("polyfill.js", bundleString);
});