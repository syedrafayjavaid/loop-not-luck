const database = require('./database/InMemDatabase');
const UserModel = require('./models/Users');
const PhotosModel = require('./models/Photos');
const CriminalModel = require('./models/Criminals');
const RefugeeModel = require('./models/Refugee');
const UserController = require('./controllers/UserController');
const PhotoController = require('./controllers/PhotoController');
const CriminalController = require('./controllers/CriminalController');
const RefugeeController = require('./controllers/RefugeeController');



//  Instances of controllers
const userConroller = new UserController(database.getUsers());
const photoConroller = new PhotoController(database.getPhotos());
const criminalController = new CriminalController(database.getCriminals());
const refugeeController = new RefugeeController(database.getRefugees());




// Instances of models
let user = new UserModel("rafay", "javaid", "policeCenter");
let user2 = new UserModel("rafay2", "javaid", "asylumCenter");
let criminal = new CriminalModel("123", "rafay", "kot addu", "black color");
let criminal2 = new CriminalModel("123", "rafay ali ", "kot  eew addu", "black ew wercolor");
let refugee = new RefugeeModel("123", "rafay", "kot addu", "black color");
let refugee2 = new RefugeeModel("1233", "rafaysfsdf", "kot afrgdddu", "blackgdf color");
let photo = new PhotosModel("123", "front", "rafay.jpg", new Date(), "asylumCenter");
let photo2 = new PhotosModel("123", "back", "rafay.jpg", new Date(), "asylumCenter");




try {
    refugee

    ///////// users /////////
    console.log(userConroller.registerUser(user));
    console.log(userConroller.registerUser(user2));

    ////////////////////////



    /////////// refugee //////////
    console.log(refugeeController.registerRefugee(user2, refugee));
    console.log(refugeeController.registerRefugee(user2, refugee2));

    // console.log(refugeeController.deleteUser(user2, "123"));
    // console.log(refugeeController.viewRefugee(user2, "123"));
    // console.log(refugeeController.viewRefugees(user2));
    // console.log(refugeeController.updateRefugee(user2, refugee2));

    ////////////////////////////


    ///////// criminal ////////

    console.log(criminalController.registerCriminal(user, criminal));
    // console.log(criminalController.deleteCriminal(user, "123"));
    // console.log(criminalController.viewCriminal(user, "123"));
    // console.log(criminalController.viewCriminals(user));
    // console.log(criminalController.updateCriminal(user2, criminal2));

    /////////////////////////////


    ///////// photos ////////

    console.log(photoConroller.registerPhoto(user2, photo));
    console.log(photoConroller.registerPhoto(user2, photo2));
    // console.log(photoConroller.deletePhotos(user2, "123"));
    // console.log(photoConroller.viewCprPhoto(user2, "123"));
    // console.log(photoConroller.viewCategoryPhotos(user2));

    /////////////////////////////



    console.log("logs", database.getLogs());




} catch (e) {
    console.log(e.message);
}


























