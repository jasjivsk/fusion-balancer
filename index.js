// import native addon
const addonGreet = require('bindings')('greet');

// expose module API
console.log('gretting ', addonGreet );
console.log('gretting ', addonGreet.greetHello('sample') );