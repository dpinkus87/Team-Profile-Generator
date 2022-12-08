class Engineer {
    constructor(name, employeeID,email,gitHub) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
        this.gitHub = gitHub;
    }
    printInfo()
    console.log(`Name: ${this.name}`);
    console.log(`Emplpyee ID: ${this.employeeID}`);
    console.log(`Email: ${this.email}`);
    console.log(`GitHub: ${this.gitHub}`);
}


function Engineer(name, age) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
  
    if (typeof age !== "number" || isNaN(age) || age < 0) {
      throw new Error("Expected parameter 'age' to be a non-negative number");
    }
  
    this.name = name;
    this.age = age;
  }
  
  module.exports = Engineer;
  


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

//   * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`