const Employee = require('./employee')


class Engineer extends Employee {
    constructor(name, employeeID,email,gitHub) {
        super(name, employeeID,email)
        this.gitHub = gitHub;


    }
    getRole(){
return "engineer"
    }
}

  
  module.exports = Engineer;


//   * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`