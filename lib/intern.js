const Employee = require('./employee')

class Intern extends Employee {
  constructor(name, employeeID, email, school) {
    
    super(name, employeeID, email)
    this.school = school;
  }
  getRole() {
    return "intern";
  }
}


module.exports = Intern;