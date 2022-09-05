class Log {
    constructor(action, user) {
        this.action = action;
        this.user = user;
        this.createdAt = new Date();
    }

    getLogs = () => {
        return { action: this.action, user: this.user, createdAt: this.createdAt }
    }
}

module.exports = Log;