const RefugeeController = require('./RefugeeController');
const CriminalController = require('./CriminalController');
const LogController = require("./LogController");
const Database = require('../database/InMemDatabase');
const { photos, logs } = require('../database/InMemDatabase');

class PhotoController {

    constructor(photoArray) {
        this.photoArray = photoArray;
    };




    // register a new photo 
    registerPhoto = (user, photo) => {

        const logController = new LogController(Database.getLogs());


        const refugeeController = new RefugeeController(Database.getRefugees());
        const criminalController = new CriminalController(Database.getCriminals());

        // If the type of user is police
        if (user.type == "policeCenter") {


            // Checking the user is authorized or not
            if (photo.category != "policeCenter") {
                return ("Sorry user is not authorized to perfrom this action")
            }
            else {

                // Finding if the cpr number in criminal
                const found = criminalController.viewCriminal(user, "123");

                // check if the criminal is found
                if (typeof (found) == "object") {

                    // Check if the similar photo already exists
                    let isExist = this.photoArray.find(obj => {
                        if (obj.cprNumber === photo.cprNumber && obj.angel === photo.angel) {
                            return obj;
                        }
                    });

                    // throw an error if photo of criminal with same  cpr number and angel already exists
                    if (isExist) throw Error("Photo with the similar cpr Number and angel already exist")
                    else {
                        // Creating a new photo of criminal
                        this.photoArray.push(photo);
                        logController.createLog(`photo create with cpr number ${photo.cprNumber} and angel ${photo.angel} `, user.username)

                        return ("Photo registered successfully")
                    }


                }
                // If the criminal is not found
                else {
                    return (`Criminal with cpr number ${photo.cprNumber} not found in criminals record`)
                }



            }

        }
        else if (user.type == "asylumCenter") {


            // Checking the user is authorized or not
            if (photo.category != "asylumCenter") {
                return ("Sorry user is not authorized to perfrom this action")
            }
            else {


                // Finding if the cpr number in refugee
                const found = refugeeController.viewRefugee(user, "123");

                // check if the refugee is found
                if (typeof (found) == "object") {

                    // Check if the similar photo already exists
                    let isExist = this.photoArray.find(obj => {
                        if (obj.cprNumber === photo.cprNumber && obj.angel === photo.angel) {
                            return obj;
                        }
                    });

                    // throw an error if photo of refugee with same cpr number and angel already exists
                    if (isExist) throw Error("Photo with the similar cpr Number and angel already exist")
                    else {
                        // Creating a new photo of refugee
                        this.photoArray.push(photo);
                        logController.createLog(`photo create with cpr number ${photo.cprNumber} and angel ${photo.angel} `, user.username)
                        return ("Photo registered successfully")
                    }

                }
                else {
                    return (`Refugee with cpr number ${photo.cprNumber} not found in criminals record`)
                }


            }



        }


    }

    // remove photos of a cpr number
    deletePhotos = (user, cprNumber) => {

        const logController = new LogController(Database.getLogs());

        // finding the indices of cpr number
        const indicesArray = [];
        for (let index = 0; index < this.photoArray.length; index++) {
            if (this.photoArray[index].cprNumber === cprNumber) {
                indicesArray.push(index);
            }
        }



        // checking the authorization
        if (indicesArray.length > 0) {

            // if the photo type and user type matches means user is authorized
            if (this.photoArray[indicesArray[0]].category == user.type) {

                // removing photos
                for (let i = 0; i < indicesArray.length; i++) {
                    this.photoArray.splice(indicesArray[i], 1);
                }
                logController.createLog(`photo deleted with cpr number ${cprNumber} `, user.username)
                return ("Photos Deleted Successfully")
            }
            else {
                return ("Sorry user is not authorized to perfrom this action")
            }

        }
        else {
            return (`No photos found with cpr Number${cprNumber} `)
        }

    }

    // view photos of a specific cpr number
    viewCprPhoto(user, cprNumber) {

        const logController = new LogController(Database.getLogs());


        const foundPhotos = this.photoArray.filter(object => {
            return object.cprNumber == cprNumber;

        })

        if (foundPhotos.length > 0) {
            // Checking the authorization
            if (user.type == foundPhotos[0].category) {
                logController.createLog(`photo viewed with cpr number ${cprNumber} `, user.username)
                return foundPhotos;
            }
            else {
                return ("Sorry user is not authorized to perfrom this action")
            }


        }
        else {
            return ("No record found")
        }


    }

    // view photos of a sepcific category
    viewCategoryPhotos(user) {

        const logController = new LogController(Database.getLogs());


        const foundPhotos = this.photoArray.filter(object => {

            return object.category == user.type;

        })

        if (foundPhotos.length > 0) {
            logController.createLog(`photo viewed with category ${user.type} `, user.username)
            return foundPhotos;
        }
        else {
            return ("No record found")
        }


    }





}

module.exports = PhotoController;