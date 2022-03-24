const Intern = require('../lib/Intern')

test("can get a role via method",() => {
    const role = "Intern"
    const i = new Intern ("Steven Smith", 1, "me@gmail.com", "Harvard");
    expect(i.getRole()).toBe(role)
})

test("can get a school via constructor",() => {
    const school = "Harvard"
    const i = new Intern("Steven Smith", 1, "me@gmail.com", school);
    expect(i.school).toBe(school)
})

test("can get a school via method",() => {
    const school = "Harvard"
    const i = new Intern("Steven Smith", 1, "me@gmail.com", school);
    expect(i.getSchool()).toBe(school)
})