const Employee = require ("../lib/Employee")

describe ("testing Employee", () => {
    it ("creates an object of the employee data", () => {
        const employee1 = new Employee (
            "John", "34", "john@gmail.com"
        )
        expect (employee1.getName ()).toBe ("John")
        expect (employee1.getId ()).toBe ("34")
        expect (employee1.getEmail ()).toBe ("john@gmail.com")
    })
})