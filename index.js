// * Credits/Citations *
// 1 Module 10 lessons on OOP
// 2 Tutor Abdullah explained what jest is and how to run my tests on my terminal. He also helped me understand the role of classess and execute the  logic for the flow of my index.js file.
// 3 W3 schools tutorial on how to use "mailto" command in html for email address
// 4 Bootsrap documentation for styling the HTML
// 5 Bootstrap icons documentation
// 6 Jest documentation for running tests

// Inquirer and classes are called in the const below
const inquirer = require ("inquirer")
const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer")
const Intern = require ("./lib/Intern")
const generateHTML = require ("./src/js/script.js")

var employees = []

//Questions prompted to user when terminal is run
var managerList = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "ID",
        message: "What is your employee ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "number",
        message: "What is your office number?"
    },
]

var menuList = [
    {
        type: "list",
        name: "role",
        message: "What would like to do next?",
        choices: ["Add an Engineer", "Add an Intern", "Quit"]
    },
]

var engineerList = [
    {
        type: "input",
        name: "name",
        message: "Enter the name of the engineer."
    },
    {
        type: "input",
        name: "ID",
        message: "Enter the engineer's ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email."
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's github username."
    },
]

var internList = [
    {
        type: "input",
        name: "name",
        message: "Enter the name of the intern."
    },
    {
        type: "input",
        name: "ID",
        message: "Enter the intern's ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's email."
    },
    {
        type: "input",
        name: "school",
        message: "Enter the intern's school."
    },
]

function promptManager () {
    return inquirer.prompt (managerList)
    .then (managerInfo => {
        // console.log(managerInfo)
        var manager = new Manager (managerInfo.name, managerInfo.ID, managerInfo.email, managerInfo.number)
        // console.log(manager)
        employees.push (manager)
        promptMenu ()
    })
}

function promptMenu () {
    return inquirer.prompt (menuList)
    .then (choice => {
        // console.log(choice.role)
        if (
            choice.role === "Add an Engineer"
        ) {
            promptEngineer ()
        } else if (
            choice.role === "Add an Intern"
        ) {
            promptIntern ()
        } else {
            // console.log(employees);
            generateHTML (employees)
        }
    }) 
}

function promptEngineer () {
    return inquirer.prompt (engineerList)
    .then (engineerInfo => {
        // console.log(engineerInfo)
        var engineer = new Engineer (engineerInfo.name, engineerInfo.ID, engineerInfo.email, engineerInfo.github)
        // console.log(engineer)
        employees.push (engineer)
        promptMenu ()
    })
}

function promptIntern () {
    return inquirer.prompt (internList)
    .then (internInfo => {
        // console.log(internInfo)
        var intern = new Intern (internInfo.name, internInfo.ID, internInfo.email, internInfo.school)
        // console.log(intern)
        employees.push (intern)
        promptMenu ()
    })
}
promptManager ()
