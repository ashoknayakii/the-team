const Employee = require('../lib/Employee');


test('creates a new employee object', () => {
    const employee = new Employee('Steven Smith', 'stevensmith@gmail.com', 1);

    expect(employee.name).toBe('name');
    expect(employee.email).toBe('email');
    expect(employee.id).toBe('id');
    expect(employee.role).toBe('role');
})

test('gets users name and stores in the object', () => {
    const employee = new Employee('Steven Smith');

    expect(employee.getName()).toHaveProperty('name');
});


test('gets users email and stores in the object', () => {
    const employee = new Employee('Steven Smith');

    expect(employee.getEmail()).toHaveProperty('email');
});


test('gets users role within the team', () => {
    const employee = new Employee ('Steven Smith');

    expect(employee.getRole()).toHaveProperty('');

})


// test('gets id for new employee', () => {
//     const employee = new Employee('Steven Smith');
//     const teamCount = employee.id.length;

//     employee.addTeamMember(new )



//     expect(employee.getId())
// })