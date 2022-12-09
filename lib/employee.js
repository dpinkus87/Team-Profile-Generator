class Employee {
    constructor(name, employeeID,email) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
    }
    printInfo(){
    console.log(`Name: ${this.name}`);
    console.log(`Employee ID: ${this.employeeID}`);
    console.log(`Email: ${this.email}`)
}
    sayHi(){
        return `Hi my name is ${this.name}`
    }
}



// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`; returns `'Employee'`


module.exports = Employee;