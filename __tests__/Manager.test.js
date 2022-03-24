const Manager = require('../lib/Manager');

test("can get a role via method",() => {
    const role = "Manager"
    const e = new Manager ("Steven Smith", 1, "me@gmail.com", 333);
    expect(e.getRole()).toBe(role)
})

test("can set an office number via constructor",() => {
    const officeNumber = 333
    const e = new Manager ("Steven Smith", 1, "me@gmail.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber)
})

test("can get an office number via method",() => {
    const officeNumber = 333
    const e = new Manager ("Steven Smith", 1, "me@gmail.com", officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber)
})


