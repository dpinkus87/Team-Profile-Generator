const managerQuestions = [{
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

const engineerQuestions = [{
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
    message: "What is your GitHub user?",
    name: "gitHub",
  }]

  const internQuestions = [{
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
    message: "What is your school?",
    name: "school",
}]

const menuQuestion = {
    type: "list",
    message: "Would you like to add anyone to the team?",
    name: "addTeam",
    choices: ["manager", "engineer", "intern", "finished"]
}

module.exports = {
    managerQuestions, engineerQuestions, internQuestions, menuQuestion
}