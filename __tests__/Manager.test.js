const Manager = require ("../lib/Manager")

describe ("testing Manager", () => {
    it ("creates an object of the manager data", () => {
        const manager1 = new Manager (
            "Ben", "44", "ben@gmail.com", "23"
        )
        expect (manager1.getName ()).toBe ("Ben")
        expect (manager1.getId ()).toBe ("44")
        expect (manager1.getEmail ()).toBe ("ben@gmail.com")
        expect (manager1.getOfficenumner ()).toBe ("23")
    })
})