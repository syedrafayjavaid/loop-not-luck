const LogController = require("./LogController");
const Database = require('../database/InMemDatabase');

class RefugeeController {

    constructor(refugeeArray) {
        this.refugeeArray = refugeeArray;
    };


    // register a new refugee 
    registerRefugee = (user, refugee) => {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to create refugee
        if (user.type !== "asylumCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {
            // Check if the refugee with similar cpr number already exists
            let isExist = this.refugeeArray.find(obj => {
                if (obj.cprNumber === refugee.cprNumber) {
                    return obj;
                }
            });

            // throw an error if refugee with similar cpr number already exists
            if (isExist) throw Error("Refugee with the similar cpr Number already exist")
            else {
                // Creating a new refugee
                this.refugeeArray.push(refugee);
                logController.createLog(`refugee created with cpr number ${refugee.cprNumber}`, user.username)

                return ("Refugee registered successfully")
            }

        }
    }

    // remove a refugee 
    deleteRefugee = (user, cprNumber) => {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to delete refugee
        if (user.type !== "asylumCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {

            // Finding the  index of refugee in memory
            const index = this.refugeeArray.findIndex(object => {
                return object.cprNumber == cprNumber;
            })

            // If index is found remove the record 
            if (index != -1) {
                this.refugeeArray.splice(index, 1);
                logController.createLog(`refugee deleted with cpr number ${cprNumber}`, user.username)
                return `The refugee with cpr number ${cprNumber} deleted Succefully`;
            }
            else {
                return `The refugee with cpr number  ${cprNumber} not found in memory`;
            }

        }


    }

    // view a refugee
    viewRefugee(user, cprNumber) {

        const logController = new LogController(Database.getLogs());


        // Checking the user is authorized to delete refugee
        if (user.type !== "asylumCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {

            const refugee = this.refugeeArray.filter(object => {
                if (object.cprNumber == cprNumber) {
                    return object;
                }
            })

            if (refugee) {
                logController.createLog(`refugee viewed with cpr number ${cprNumber}`, user.username)
                return refugee;

            }
            else {
                return ("No record found")
            }


        }

    }

    // view refugees
    viewRefugees(user) {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to delete refugee
        if (user.type !== "asylumCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {
            logController.createLog("refugees viewed", user.username)
            return this.refugeeArray;
        }

    }

    // view refugees
    updateRefugee(user, refugee) {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to delete refugee
        if (user.type !== "asylumCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {
            // Finding the  index of refugee in memory
            const index = this.refugeeArray.findIndex(object => {
                return object.cprNumber == refugee.cprNumber;
            })

            // if the record found
            if (index != -1) {

                if (this.refugeeArray[index].name != refugee.name) {
                    this.refugeeArray[index].name = refugee.name
                }
                if (this.refugeeArray[index].currentAddress != refugee.currentAddress) {
                    this.refugeeArray[index].currentAddress = refugee.currentAddress
                }
                if (this.refugeeArray[index].physicalDescription != refugee.physicalDescription) {
                    this.refugeeArray[index].physicalDescription = refugee.physicalDescription
                }
                logController.createLog(`refugee updated with ${cprNumber}`, user.username)
                return ("Record updated successfully")

            }
            else {
                return (`The refugee with the  cpr number ${refugee.cprNumber} not found`)
            }




        }

    }





}

module.exports = RefugeeController;