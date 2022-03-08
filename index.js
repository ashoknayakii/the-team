const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const createTeam = () => {
    console.log('Build your Team!');
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's full name?",
            validate: answer => {
                if (!answer) {
                    return "Please enter at least one value."
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number",
            validate: answer => {
                if (isNan(answer)) {
                    return "Please enter a numeric value."
                }
            
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?",
            validate: answer => {
                if (!answer) {
                    return "Please enter a valid email address."
                }
                const passRegex = answer.match(/\S+@\S+\.\S+/);
                if (!passRegex) {
                    return "Please enter a valid email address."
                }
                return true;
            }
        },



    ]).then(answers => {
        const emp1 = new Employee(answers.employeeName, answers.employeeId, answers.employeeEmail);
        console.log(emp1);
        console.log(emp1.getName());

    })
};

createTeam();
