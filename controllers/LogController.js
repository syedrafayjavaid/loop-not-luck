class LogController {

    constructor(logArray) {
        this.logArray = logArray;
    };

    createLog = (action, user) => {
        this.logArray.push({ action, user, createdAt: new Date() })
    }
}

module.exports = LogController;