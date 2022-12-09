const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, employeeID, email, gitHub) {
        
        super(name, employeeID, email)
        this.gitHub = gitHub;
    }
    getRole() {
        return "engineer";
    }
}


module.exports = Engineer;