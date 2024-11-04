const fs = require("fs");
const path = require("path");

class ClocoLogger {
  constructor(filePath) {
    this.filePath = filePath;
    this.enterLog();
  }

  static createLogger(filePath) {
    return new ClocoLogger(filePath);
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

const clocoNepalLogger = ClocoLogger.createLogger("logs/cloco-np.log");
clocoNepalLogger.log("Factory Method practice start");
clocoNepalLogger.log("Log in cloco np");

const clocoJapanLogger = ClocoLogger.createLogger("logs/cloco-jp.log");
clocoJapanLogger.log("-------Initialized-cloco-japan-Log------");
clocoJapanLogger.log("Log in cloco jp");

console.log(clocoNepalLogger !== clocoJapanLogger); // true
