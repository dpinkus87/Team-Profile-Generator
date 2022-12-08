const Employee = require("./manager");

class Employee {
    constructor(name, employeeID,email) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }
    printInfo()
    console.log(`Name: ${this.name}`);
    console.log(`Emplpyee ID: ${this.employeeID}`);
    console.log(`Email: ${this.email}`);
}

// TODO: Create an array of questions for Employee input
const questions = [{
    type: "input",
    message: "What is your name?",
    name: "name",
},{
    type: "input",
    message: "What is your employee ID?",
    name: "employeeID",
},{
    type: "input",
    message: "What is your email address?",
    name: "emailAddress",
}]



// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`; returns `'Employee'`