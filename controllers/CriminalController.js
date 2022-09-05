const LogController = require("./LogController");
const Database = require('../database/InMemDatabase');
class CriminalController {

    constructor(criminalArray) {
        this.criminalArray = criminalArray;
    };



    // register a new criminal 
    registerCriminal = (user, criminal) => {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to create criminal
        if (user.type !== "policeCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {
            // Check if the criminal with similar cpr number already exists
            let isExist = this.criminalArray.find(obj => {
                if (obj.cprNumber === criminal.criminal) {
                    return obj;
                }
            });

            // throw an error if criminal with similar cpr number already exists
            if (isExist) throw Error("Criminal with the similar cpr Number already exist")
            else {
                // Creating a new criminal
                this.criminalArray.push(criminal);
                logController.createLog(`criminal created with cpr number ${criminal.cprNumber}`, user.username)
                return ("Criminal registered successfully")
            }

        }
    }

    // remove a criminal 
    deleteCriminal = (user, cprNumber) => {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to delete criminal
        if (user.type !== "policeCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {

            // Finding the  index of criminal in memory
            const index = this.criminalArray.findIndex(object => {
                return object.cprNumber == cprNumber;
            })

            // If index is found remove the record 
            if (index != -1) {
                this.criminalArray.splice(index, 1);
                logController.createLog(`criminal deleted with cpr  number ${cprNumber}`, user.username)
                return `The criminal with cpr number ${cprNumber} deleted Succefully`;
            }
            else {
                return `The criminal with cpr number  ${cprNumber} not found in memory`;
            }

        }


    }

    // view a criminal
    viewCriminal(user, cprNumber) {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to delete refugee
        if (user.type !== "policeCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {

            const criminal = this.criminalArray.find(object => {
                if (object.cprNumber == cprNumber) {
                    return object;
                }
            })

            if (criminal) {
                logController.createLog(`criminal viewed with cpr  number ${cprNumber}`, user.username)
                return criminal;

            }
            else {
                return ("No record found")
            }


        }

    }

    // view criminals
    viewCriminals(user) {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to delete refugee
        if (user.type !== "policeCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {
            logController.createLog("criminals viewed ", user.username)
            return this.criminalArray;
        }

    }

    // view criminal
    updateCriminal(user, criminal) {

        const logController = new LogController(Database.getLogs());

        // Checking the user is authorized to delete refugee
        if (user.type !== "policeCenter") {
            return ("Sorry user is not authorized to perfrom this action")
        }
        else {
            // Finding the  index of criminal in memory
            const index = this.criminalArray.findIndex(object => {
                return object.cprNumber == criminal.cprNumber;
            })

            // if the record found
            if (index != -1) {

                if (this.criminalArray[index].name != criminal.name) {
                    this.criminalArray[index].name = criminal.name
                }
                if (this.criminalArray[index].currentAddress != criminal.currentAddress) {
                    this.criminalArray[index].currentAddress = criminal.currentAddress
                }
                if (this.criminalArray[index].physicalDescription != criminal.physicalDescription) {
                    this.criminalArray[index].physicalDescription = criminal.physicalDescription
                }
                logController.createLog(`criminals updated with cpr number${criminal.cprNumber}`, user.username)
                return ("Record updated successfully")

            }
            else {
                return (`The criminal with the  cpr number ${criminal.cprNumber} not found`)
            }




        }

    }



}

module.exports = CriminalController;