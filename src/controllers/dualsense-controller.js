const EventEmitter = require("node:events");

// mac development input handler uses sdl2
const gamecontroller = require("sdl2-gamecontroller");

const DualsenseDefaultEvent = {
  squareButton: false,
  circleButton: false,
  triangleButton: false,
  crossButton: false,
};

class DualSenseController extends EventEmitter {
  constructor() {
    console.log("🎮 DualsenseController Initiating...");
    super();
  }

  setup() {
    this.bindEvents();
  }

  bindEvents() {
    // this is exclusively for mac dev env, linux signals are different
    gamecontroller.on("a:down", () =>
      this.emit("input", { ...DualsenseDefaultEvent, crossButton: true })
    );
  }
}

module.exports = DualSenseController;
