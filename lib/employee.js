class Employee {
    constructor(name, employeeID, email) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Employee ID: ${this.employeeID}`);
        console.log(`Email: ${this.email}`)
    }

}


module.exports = Employee;