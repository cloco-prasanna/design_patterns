const fs = require("fs");
const path = require("path");

class ClocoLogger {
  static instance = null;

  constructor(filePath) {
    if (ClocoLogger.instance) { 
      return ClocoLogger.instance;
    }

    this.filePath = filePath;
    this.enterLog();
    ClocoLogger.instance = this;
  }

  enterLog() {
    const logDir = path.dirname(this.filePath);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    fs.appendFileSync(this.filePath, "---Initialized Logger---\n");
  }

  log(message) {
    const time = new Date().toISOString();
    const data = `${time} - ${message}\n`;
    fs.appendFileSync(this.filePath, data);
  }
}

const clocoLogger1 = new ClocoLogger("logs/singleton.log");
clocoLogger1.log("Singleton practice start");
clocoLogger1.log("Log from logger 1 ");

const clocoLogger2 = new ClocoLogger("logs/singleton.log");
clocoLogger2.log("Log from logger 2");
clocoLogger1.log("Singleton Practice End");

console.log(clocoLogger1 === clocoLogger2);
