class Photo {
    constructor(cprNumber, angel, name, expiry, category, createdBy) {

        this.cprNumber = cprNumber;
        this.name = name;
        this.angel = angel;
        this.category = category;
        this.expiry = expiry;
        this.createdAt = new Date();
        this.createdBy = createdBy;
    }

    getPhotos = () => {
        return { cprNumber: this.cprNumber, name: this.name, angel: this.angel, expiry: this.expiry, createdAt: this.createdAt, category: this.category, createdBy: this.createdBy }
    }
}

module.exports = Photo;