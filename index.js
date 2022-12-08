const generateHTML = require("./generateHTML")
const inquirer = require("inquirer")
const fs = require("fs")

const Employee = require("./employee")
const Manager = require("./manager")
const Engineer = require("./engineer")
const Intern = require("./intern")


function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile("./dist/index.html", generateHTML(data), err => console.log(err))
}

function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile("Index.html", answers)
    })
}

init();