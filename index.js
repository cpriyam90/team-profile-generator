//Questions prompted to user when terminal is run
var questionList = [
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
    {
        type: "list",
        name: "employee",
        message: "What employee are you adding?",
        choices: ["Engineer", "Intern"]
    },
]

var engineerList [
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
        message: "Enter the engineer's github."
    },
]

var InternList [
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
