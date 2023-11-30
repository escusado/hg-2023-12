const EventEmitter = require("node:events");

class FeelingsController extends EventEmitter {
  dualSenseController;

  constructor() {
    console.log("💚 Feelings Controller starting... ");
    super();
  }

  setup({ dualSenseController }) {
    this.dualSenseController = dualSenseController;
    this.bindEvents();
  }

  bindEvents() {
    this.dualSenseController.on("input", (ev) => {
      if (ev.crossButton) {
        this.handleCrossButton();
      }
    });
  }

  handleCrossButton() {
    this.emit("smile");
  }
}

module.exports = FeelingsController;
