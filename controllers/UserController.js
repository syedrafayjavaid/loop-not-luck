class UserController {

    constructor(userArray) {
        this.userArray = userArray;
    };

    // sing in user after authentication
    signIn = (username, password) => {

        let isExist = this.userArray.find(obj => {
            if (obj.username === username && obj.password === password) {
                return obj;
            }
        });

        return isExist ? true : false;
    }

    // register a new user 
    registerUser = (user) => {
        // Check if the user with similar username already exists
        let isExist = this.userArray.find(obj => {
            if (obj.username === user.username) {
                return obj;
            }
        });

        // throw an error if user with similar username already exists
        if (isExist) throw Error("User with the similar username already exist")
        else {
            // Creating a new user
            this.userArray.push(user);
            return ("User created Successfully")
        }

    }

    // remove a user 
    deleteUser = (username) => {

        // Finding the  index of user in memory
        const index = this.userArray.findIndex(object => {
            return object.username == username;
        })

        // If index is found remove the record 
        if (index != -1) {
            this.userArray.splice(index, 1);
            // this.logs.push({ action: "record deletion", category: "asylumSeeker", "cprNumber": cprNumber, deletedAt: new Date() })
            return `The user with username ${username} deleted Succefully`;
        }
        else {
            return `The user with username  ${username} not found in memory`;
        }

    }
}

module.exports = UserController;