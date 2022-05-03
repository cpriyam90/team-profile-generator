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
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    ${employeeData}
        
    </body>
    </html>
    `
}

function addManager(manager) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <h6 class="card-subtitle mb-2 text-muted">${manager.ID}</h6>
            <a href="#" class="card-link">${manager.email}</a>
            <h6 class="card-subtitle mb-2 text-muted">${manager.number}</h6>
        </div>
    </div>
    `
}

function addEngineer(engineer) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">engineer</h6>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.ID}</h6>
            <a href="#" class="card-link">${engineer.email}</a>
            <h6 class="card-subtitle mb-2 text-muted">${engineer.number}</h6>
        </div>
    </div>
    `
}

function addIntern(intern) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">intern</h6>
            <h6 class="card-subtitle mb-2 text-muted">${intern.ID}</h6>
            <a href="#" class="card-link">${intern.email}</a>
            <h6 class="card-subtitle mb-2 text-muted">${intern.number}</h6>
        </div>
    </div>
    `
}