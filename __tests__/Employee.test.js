const Employee = require('../lib/Employee');


test("test can create employee object",() => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object")
}) 

test("can set a name via constructor",() => {
    const name = "Steven Smith"
    const e = new Employee(name);
    expect(e.name).toBe(name)
})

test("can set a id via constructor",() => {
    const id = 1
    const e = new Employee("Steven Smith", id);
    expect(e.id).toBe(id)
})

test("can set a email via constructor",() => {
    const email = "me@gmail.com"
    const e = new Employee("Steven Smith", 1, email);
    expect(e.email).toBe(email)
})

test("can get a name via method",() => {
    const name = "Steven Smith"
    const e = new Employee(name);
    expect(e.getName()).toBe(name)
})

test("can get a id via method",() => {
    const id = 1
    const e = new Employee("Steven Smith", id);
    expect(e.getId()).toBe(id)
})

test("can get an email via method",() => {
    const email = "me@gmail.com"
    const e = new Employee("Steven Smith", 1, email);
    expect(e.getEmail()).toBe(email)
})

test("can get a role via method",() => {
    const role = "Employee"
    const e = new Employee("Steven Smith", 1, "me@gmail.com");
    expect(e.getRole()).toBe(role)
})