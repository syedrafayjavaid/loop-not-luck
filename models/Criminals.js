class Criminal {
    constructor(cprNumber, name, currentAddress, physicalDescription) {
        this.cprNumber = cprNumber;
        this.name = name;
        this.currentAddress = currentAddress;
        this.physicalDescription = physicalDescription;
        this.createdAt = new Date();
    }

    getCriminals = () => {
        return { cprNumber: this.cprNumber, name: this.name, currentAddress: this.currentAddress, physicalDescription: this.physicalDescription, createdAt: this.createdAt }
    }
}

module.exports = Criminal;