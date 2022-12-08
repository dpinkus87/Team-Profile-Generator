
class Manager {
    constructor(name, employeeID,email,officeNumber) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
        this.officeNumber = officeNumber
    }
    printInfo()
    console.log(`Name: ${this.name}`);
    console.log(`Emplpyee ID: ${this.employeeID}`);
    console.log(`Email: ${this.email}`);
    console.log(`Office Number: ${this.officeNumber}`);
}

// TODO: Create an array of questions for Manager input
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
},{
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
}]