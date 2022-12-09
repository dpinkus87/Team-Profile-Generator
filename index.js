const generateHTML = require("./generateHTML")
const inquirer = require("inquirer")
const fs = require("fs")

const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const {internQuestions, managerQuestions, engineerQuestions, menuQuestion} = require("./questions")

const team = []

function writeToFile() {
    // console.log(data);
    fs.writeFile("./dist/index.html", generateHTML(team), err => console.log(err))
}

function promptManager() {
    inquirer.prompt(managerQuestions).then(({
        name,
        employeeID,
        emailAddress,
        officeNumber
    }) => {
        const manager = new Manager(name, employeeID, emailAddress, officeNumber)
        team.push(manager)
    })
}

function promptEngineer() {
    inquirer.prompt(engineerQuestions).then(({
        name,
        employeeID,
        emailAddress,
        gitHub,
    }) => {
        const engineer = new Engineer(name, employeeID, emailAddress, gitHub)
        team.push(engineer)
    })
}

function promptIntern() {
    inquirer.prompt(internQuestions).then(({
        name,
        employeeID,
        emailAddress,
        school,
    }) => {
        const intern = new Intern(name, employeeID, emailAddress, school)
        team.push(intern)
    })
}


function addToTeam() {
    inquirer.prompt(menuQuestion).then(({addTeam}) => {
        if(addTeam === "manager"){
        promptManager()
    } else if(addTeam === "engineer"){ 
        promptEngineer()
    } else if(addTeam === "intern"){
        promptIntern()
    } else if (addTeam === "finished"){
        generateHTML()
    }
}) 
}

function init() {
    inquirer.prompt(menuQuestion).then(answers => {
        console.log(answers);
        writeToFile("Index.html", answers)
    })
}

init();
promptManager()
// promptEngineer()
// promptIntern()