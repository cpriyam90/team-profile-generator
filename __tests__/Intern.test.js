const Intern = require ("../lib/Intern")

describe ("testing Intern", () => {
    it ("creates an object of the intern data", () => {
        const intern1 = new Intern (
            "Betty", "18", "betty@gmail.com", "Columbia"
        )
        expect (intern1.getName ()).toBe ("Betty")
        expect (intern1.getId ()).toBe ("18")
        expect (intern1.getEmail ()).toBe ("betty@gmail.com")
        expect (intern1.getSchool ()).toBe ("Columbia")
    })
})