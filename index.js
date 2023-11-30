const Marioneto = require("./src/marioneto.js");

console.log("💚 Starting app");

global.marioneto = new Marioneto();
marioneto.setup();
console.log("🥐> firing event");
marioneto.dualSenseController.handleInputReading();
