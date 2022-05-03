const Engineer = require ("../lib/Engineer")

describe ("testing Engineer", () => {
    it ("creates an object of the engineer data", () => {
        const engineer1 = new Engineer (
            "Sam", "54", "sam@gmail.com", "sam54"
        )
        expect (engineer1.getName ()).toBe ("Sam")
        expect (engineer1.getId ()).toBe ("54")
        expect (engineer1.getEmail ()).toBe ("sam@gmail.com")
        expect (engineer1.getGithub ()).toBe ("sam54")
    })
})