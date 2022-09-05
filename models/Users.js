class User {
    constructor(username, password, type) {
        this.username = username;
        this.password = password;
        this.type = type;
        this.createdAt = new Date();
    }

    getUsers = () => {
        return { username: this.username, password: this.password, type: this.type, createdAt: this.createdAt }
    }
}

module.exports = User;