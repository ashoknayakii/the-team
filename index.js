const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
// Create an empty array in which to place answers
const teamMembers = []

// Update this function to build a manager and ask manager specific questions therefore office number at the end

const buildManager = () => {
    console.log('Build your team!');
    inquirer.prompt([

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
            name: "office",
            message: "What is the employee's office number?",
            validate: answer => {
                if (!answer) {
                    return "Please enter at least one value."
                }
                return true;
            }
        },


    ]).then(answers => {
        const emp1 = new Employee(answers.name, answers.id, answers.email, answers.office);
        console.log(emp1);
        newTeamMember();


    })
};
// use a push method within that then statement to push answers into the array and then console log that array

const newTeamMember = () => {
    inquirer.prompt([
        
        {
            type: 'list',
            name: 'role',
            message: 'What role will your new employee assume or have you finished building your team?',
            choices: ['Engineer', 'Intern', 'Finished Building Team']
        },

    ]).then(answer => {
        console.log(answer)
        if (answer.role === "Engineer") {
            console.log("Engineer")
            engineerQuestion();
        }
        else if (answer.role === "Intern") {
            console.log("Intern")
            internQuestion();
        }
        else {
            console.log("Finished Building Team!")
        }
    })
}

// Create a menu function to allow user to select which type of employee to create.  This function routes to other functions either Engineer or Intern in which you will
// ask all 3 questions again and individual question again.
// Create a function to get the role that we're assigning to the new employee with a checkbox question

const engineerQuestion = () => {
    inquirer.prompt([

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
            name: "github",
            message: "What is the employee's github address?",
            when(answers) {
                return answers.role === "Engineer"
            }

        }


    ]).then(engineerAnswers => {
        const eng1 = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
        console.log(eng1);
        newTeamMember();
    })
};




const internQuestion = () => {
    inquirer.prompt([

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
            name: "school",
            message: "What school did the intern attend?",
            when(answers) {
                return answers.role === "Intern"

            }
        }

    ]).then(internAnswers => {
        const i = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
        console.log(i);
        newTeamMember();
    })
}



    // Write final questions for Github, Office Number, School and Create Variables in the Then to Place Answers in





    // A writetoFile will be needed in order to return data into a template

    // const writeToFile = (fileName, data) => {
    //     return fs.writeFileSync(path.join(process.cwd(), fileName), data);

    // } 
    buildManager();