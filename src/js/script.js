const fs = require ("fs")

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