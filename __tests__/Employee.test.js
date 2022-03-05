const Employee = require('../lib/Employee');


test('creates a new employee object', () => {
    const employee = new Employee('Steven Smith');

    expect(employee.name).toBe('name');
    expect(employee.email).toBe('email');
    expect(employee.id).toBe('id');
})