const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const fs = require('fs');

const firstQuestions = () => {
    console.log('Build your team!');
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
            if (isNaN(answer)) {
                return "Please enter a numeric value."
            }
            return true;
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

firstQuestions();

// Create a function to get the role that we're assigning to the new employee with a checkbox question

const getRole = () => {
    return inquirer.prompt([

{
type: 'checkbox',
name: 'role',
message: 'What role will your new employee assume?',
choices: ['Engineer', 'Manager', 'Intern'],
validate: roleInput => {
    if(roleInput) {
        return true
    } else {
        console.log ('You must enter a role for your new team member')
    }
}

},

])
}

getRole();

// How to connect this step to conditional questions for Manager, Intern, and Engineer?

const checkRole = () => {
    if 
}



// Write final questions for Github, Office Number, School and Create Variables in the Then to Place Answers in





// A writetoFile will be needed in order to return data into a template

const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
} 