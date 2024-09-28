let userObj = {
    firstName: "Vovka",
    lastName: "Morkovka",
    age: 24,

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(userObj.fullName());