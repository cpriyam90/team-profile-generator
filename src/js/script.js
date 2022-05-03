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
    <div class="card col-2" style="width: 18rem;">
        <div class="card-body cardBody">
            <h5 class="card-title title">${manager.name}</h5>
            <h6 class="card-title title">Manager</h6>
            <h6 class="card-subtitle">${manager.id}</h6>
            <a href="#" class="card-link">${manager.email}</a>
            <h6 class="card-subtitle">${manager.number}</h6>
        </div>
    </div>
    `
}

function addEngineer(engineer) {
    return `
    <div class="card col-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.id}</h6>
            <a href="#" class="card-link">${engineer.email}</a>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.github}</h6>
        </div>
    </div>
    `
}

function addIntern(intern) {
    return `
    <div class="card col-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <h6 class="card-subtitle mb-2 text-muted">${intern.id}</h6>
            <a href="#" class="card-link">${intern.email}</a>
            <h6 class="card-subtitle mb-2 text-muted">${intern.school}</h6>
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
        <link rel="stylesheet" href="./css/style.css"/>
        <title>My Employees</title>
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="row d-flex justify-content-center">
    ${data}
    </div>
   
   
    </body>
    </html>
    `
}

module.exports = generateHTML