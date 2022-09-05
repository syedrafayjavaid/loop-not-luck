const database = require('./database/InMemDatabase');
const UserModel = require('./models/Users');
const PhotosModel = require('./models/Photos');
const CriminalModel = require('./models/Criminals');
const RefugeeModel = require('./models/Refugee');
const LogsModel = require('./models/Logs');
const UserController = require('./controllers/UserController');
const PhotoController = require('./controllers/PhotoController');
const CriminalController = require('./controllers/CriminalController');
const RefugeeController = require('./controllers/RefugeeController');
const LogController = require('./controllers/LogController');



//  Instances of controllers
const userConroller = new UserController(database.getUsers());
const photoConroller = new PhotoController(database.getPhotos());
const criminalController = new CriminalController(database.getCriminals());
const refugeeController = new RefugeeController(database.getRefugees());
const logController = new LogController(database.getLogs());



// Instances of models
let user = new UserModel("rafay", "javaid", "policeCenter");
let user2 = new UserModel("rafay2", "javaid", "asylumCenter");
let criminal = new CriminalModel("123", "rafay", "kot addu", "black color");
let criminal2 = new CriminalModel("123", "rafay ali ", "kot  eew addu", "black ew wercolor");
let refugee = new RefugeeModel("123", "rafay", "kot addu", "black color");
let refugee2 = new RefugeeModel("1233", "rafaysfsdf", "kot afrgdddu", "blackgdf color");
let photo = new PhotosModel("123", "front", "rafay.jpg", new Date(), "asylumCenter");
let photo2 = new PhotosModel("123", "back", "rafay.jpg", new Date(), "asylumCenter");

// let refugee2 = new RefugeeModel(0, "123", "rafaysfsdf", "kot afrgdddu", "blackgdf color");




// let photo = new UserModel(0, "rafay", "javaid", "police");




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



    console.log("ssdfsdf", database.getLogs());




} catch (e) {
    console.log(e.message);
}

// console.log(database.getUsers());




























// import { AsylumSeeker } from "./AsylumSeeks.js";
// import UserController from "./controllers/UserController";
// import { Criminal } from "./Criminal.js";



// // Photo Gallery memory 
// const memory = [{
//     cprNumber: '1234',
//     name: 'rafay',
//     currentAddress: 'no Address',
//     category: 'criminal',
//     physicalDescription: 'no apperance',
//     leftProfile: 'leftImage',
//     righProfile: 'rightImage',
//     frontProfile: 'frontImage',
//     createdAt: "2022-09-02T16:32:23.347Z"
// },
// {
//     cprNumber: '1236',
//     name: 'rafay',
//     currentAddress: 'no Address',
//     category: 'criminal',
//     physicalDescription: 'no apperance',
//     leftProfile: 'leftImage',
//     righProfile: 'rightImage',
//     frontProfile: 'frontImage',
//     createdAt: "2022-09-02T16:32:23.347Z"
// },
// ];
// const logs = [];




// const asylumSeeker = new AsylumSeeker(memory, logs);
// const criminal = new Criminal(memory, logs);




// //////////////////// CRIMINAL SEEKERS ///////////////////////



// // creating Criminal
// criminal.createCriminal("1234", "rafay", "no Address", "no apperance", "leftImage", "rightImage", "frontImage");
// criminal.createCriminal("1235", "rafay", "no Address", "no apperance", "leftImage", "rightImage", "frontImage");
// criminal.createCriminal("1236", "rafay", "no Address", "no apperance", "leftImage", "rightImage", "frontImage");


// // delete criminal
// criminal.deleteCriminal("1235")

// // view criminal
// const criminl = criminal.viewCriminal("1236e")

// // view criminals
// const crimials = criminal.viewCriminals()

// // console.log("The criminal has", crimials)



// ///////////////////////////////////////////////////////////





// /////////////////////////// Asylum seekers /////////////////////////////

// // creating Asylum Seeker
// asylumSeeker.createAsylumSeeker("1234", "rafay", "no Address", "no apperance", "leftImage", "rightImage", "frontImage");
// asylumSeeker.createAsylumSeeker("1235", "rafay", "no Address", "no apperance", "leftImage", "rightImage", "frontImage");
// asylumSeeker.createAsylumSeeker("1236", "rafay", "no Address", "no apperance", "leftImage", "rightImage", "frontImage");


// // delete Asylum Seeker
// asylumSeeker.deleteAsylumSeeker("1235")

// // view Asylum Seeker
// const assylumSeeker = asylumSeeker.viewAsylumSeeker("1236e")

// // view Asylum Seekers
// const asylumSeekers = asylumSeeker.viewAsylumSeekers()


// // view Asylum Seekers
// const update = asylumSeeker.updateAsylumSeekers("1236")

// // console.log("The Asylum Seekers has", asylumSeekers)



// /////////////////////////////////////////////////////




// console.log("The memory has", memory);
// // console.log("The logs has \n", logs);
