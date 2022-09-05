class InMemDatabase {
    constructor() {

        /**
         * We are using following arrays as entities considering we are using in-memory database.
         */
        this.users = [];
        this.logs = [];
        this.photos = [];
        this.criminals = [];
        this.refugees = [];
    }

    getUsers = () => { return this.users };

    getLogs = () => { return this.logs };

    getPhotos = () => { return this.photos };

    getCriminals = () => { return this.criminals };

    getRefugees = () => { return this.refugees };
};

module.exports = new InMemDatabase();