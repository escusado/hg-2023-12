const EventEmitter = require("node:events");

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

  // use this after succesfully parsin the controller input
  handleInputReading() {
    // TODO: transform parsed inputo to a readable format
    const fakeInput = {
      squareButton: true,
    };

    this.emit("input", { ...DualsenseDefaultEvent, ...fakeInput });
  }
}

module.exports = DualSenseController;
