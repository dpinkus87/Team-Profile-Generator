class Intern {
    constructor(name, employeeID,email, school) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
        this.school = school;
    }

    
    printInfo()
    console.log(`Name: ${this.name}`);
    console.log(`Emplpyee ID: ${this.employeeID}`);
    console.log(`Email: ${this.email}`);
    console.log(`School: ${this.school}`);
}


function Intern(name, age) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  
    if (typeof age !== "number" || isNaN(age) || age < 0) {
      throw new Error("Expected parameter 'age' to be a non-negative number");
    }
  
    this.name = name;
    this.age = age;
  };


// * `getSchool()`

// * `getRole() overridden to return `'Intern'`


  

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

module.exports = Intern;