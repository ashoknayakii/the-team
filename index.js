const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const fs = require('fs');
// Create an empty array in which to place answers
const teamMember = []

// Update this function to build a manager and ask manager specific questions therefore office number at the end

const firstQuestions = () => {
    console.log('Build your team!');
    return inquirer.prompt([
  
    {
        type: "input",
        name: "name",
        message: "What is the employee's full name?",
        validate: answer => {
            console.log(answer)
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
    {
        type: "input",
        name: "manager.office",
        message: "What is the employee's office number?",
        validate: answer => {
            if (!answer) {
                return "Please enter at least one value."
            }
            return true;
        }
    },
    {
        type: 'checkbox',
        name: 'role',
        message: 'What role will your new employee assume or have you finished building your team?',
        choices: ['Engineer', 'Intern', 'Finished Building Team'],
    },
    {
        type: "input",
        name: "engineer.github",
        message: "What is the employee's github address?",
        when(answers) {
            return answers.role === "Engineer"
        }
        
    },
    {
        type: "input",
        name: "intern.school",
        message: "What school did the intern attend?",
        when(answers) {
            return answers.role === "Intern"
        }
    }


]).then(answers => { 
        const emp1 = new Employee(answers.name, answers.id, answers.email, answers.office, answers.role, );
        console.log(emp1);
        console.log(emp1.firstQuestions());

    })
};
// use a push method within that then statement to push answers into the array and then console log that array

firstQuestions();
// Create a menu function to allow user to select which type of employee to create.  This function routes to other functions either Engineer or Intern in which you will
// ask all 3 questions again and individual question again.
// Create a function to get the role that we're assigning to the new employee with a checkbox question

const engineerQuestions = () => {
    return inquirer.prompt([
  
    {
        
    },
    

]).then(answers => { 
        const eng1 = new Employee(answers.github);
        console.log(eng1);
        console.log(engineerQuestions());

    })
};


// managerQuestions = () =>


// getRole();
// After engineer return to menu function.  
// How to connect this step to conditional questions for Manager, Intern, and Engineer?

// const checkRole = () => {
//     if 
// }



// Write final questions for Github, Office Number, School and Create Variables in the Then to Place Answers in





// A writetoFile will be needed in order to return data into a template

// const writeToFile = (fileName, data) => {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
// } 