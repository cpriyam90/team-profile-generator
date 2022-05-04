const fs = require ("fs")
function generateHTML (employees) {
    var employeeData = ""
    for (var i = 0; i < employees.length; i ++) {
        if (employees[i].getRole() === "Manager") {
            employeeData = employeeData + addManager (employees[i])
        } 
        else if (employees[i].getRole () === "Engineer") {
            employeeData = employeeData + addEngineer (employees[i])
        }
        else if (employees[i].getRole () === "Intern") {
            employeeData = employeeData + addIntern (employees[i])
        }
    }
    fs.writeFileSync("./dist/index.html", init(employeeData))
}



function addManager(manager) {
    return `
    <div class="card col-2 m-2">
        <div class="card-header bg-primary">
            <h5 class="card-title text-white">${manager.name}</h5>
            <h6 class="card-title text-white"><i class="bi bi-person-square"></i> Manager</h6>
        </div>
        <div class="bg-light text-dark">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Number: ${manager.officenumber}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
            </ul>
        </div>
    </div>
    `
}

function addEngineer(engineer) {
    return `
    <div class="card col-2 m-2">
        <div class="card-header bg-primary">
            <h5 class="card-title text-white">${engineer.name}</h5>
            <h6 class="card-title text-white"><i class="bi bi-git"></i> Engineer</h6>
        </div>
        <div class="bg-light text-dark">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank" class="card-link">${engineer.github}</a></li>
                <li class="list-group-item">Email: <a href=""mailto:${engineer.email}" class="card-link">${engineer.email}</a></li>
            </ul>
        </div>
    </div>
    `
}

function addIntern(intern) {
    return `
    <div class="card col-2 m-2">
        <div class="card-header bg-primary">
            <h5 class="card-title text-white">${intern.name}</h5>
            <h6 class="card-title text-white"><i class="bi bi-mortarboard-fill"></i> Intern</h6>
        </div>
        <div class="bg-light text-dark">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">School: ${intern.school}</li>
                <li class="list-group-item">Email: <a href=""mailto:${intern.email}" class="card-link">${intern.email}</a></li>
            </ul>
        </div>
    </div>
    `
}

function init (data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./css/style.css"/>
        <title>My Employees</title>
    </head>
    <body>
    <header class="bg-danger text-center m-2">
        <h1 class="text-white">My Team</h1>
    </header>
    <div class="row d-flex justify-content-center">
    ${data}
    </div>
   
   
    </body>
    </html>
    `
}

module.exports = generateHTML