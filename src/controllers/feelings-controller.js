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
      console.log("🎮 me llego a los feels", ev);
      if (ev.squareButton) {
        this.handleSquareButton();
      }
    });
  }

  handleSquareButton() {
    this.emit("smile");
  }
}

module.exports = FeelingsController;
