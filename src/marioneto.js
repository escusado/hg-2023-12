const DualSenseController = require("./controllers/dualsense-controller.js");
const OledController = require("./controllers/oled-controller.js");
const FeelingsController = require("./controllers/feelings-controller.js");

// images for a monocrhome 128x32 oled display, basic feeling image 0 off, 1 on
const FeelingImagesMap = {
  smile: [
    0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
  ],
};

class Marioneto {
  // keeps the dualsense instance
  dualSenseController;
  oledController;

  // this class instantiates all the micro services for the app, these include the DualSenseController and the OledDisplayController
  constructor() {
    console.log("🤖 Booting Marioneto... ");
    this.dualSenseController = new DualSenseController();
    this.oledController = new OledController();
    this.feelingsController = new FeelingsController();
  }

  setup() {
    this.dualSenseController.setup();
    this.feelingsController.setup({
      dualSenseController: this.dualSenseController,
    });
    this.bindEvents();
  }

  bindEvents() {
    this.feelingsController.on("smile", this.handleSmile.bind(this));
  }

  handleSmile() {
    this.oledController.renderImage(FeelingImagesMap["smile"]);
  }
}

module.exports = Marioneto;
