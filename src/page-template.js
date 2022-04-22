const Employee = require("../lib/Employee")

const generateProfiles = teamArr => {

    const managerCard = manager => {
        return ` 
        <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">${manager.getRole()}</p>
        <a href="${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
        <p>${manager.getOfficeNumber()}</p>
        </div>
        `
    }
    const internCard = intern => {
        return `
        <div class='card-body'> 
        <h2 class='card-title'>${intern.getName()}</h2>
        <p class='card-text'>${intern.getRole()}</p>
        <a href="${intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
        </div>
        `
    }
    const engineerCard = engineer => {
        return `
        <div class='card-body'> 
        <h2 class='card-title'>${engineer.getName()}</h2>
        <p class='card-text'>${engineer.getRole()}</p>
        <a href="${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
        </div>
        `
    }
    const html = [];
    teamArr.forEach(employee => {
        console.log(html)
        switch (employee.getRole()) {
            case 'Manager':
               html.push(managerCard(employee))
                break;
            case 'Intern':
                html.push(internCard(employee))
                break;
            case 'Engineer':
                html.push(engineerCard(employee))
                break;
        }
    });
    return html.join("")
}


 module.exports = teamArr => {
     return`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
<header>
<h1>The Team</h1>
</header>
<main>
${generateProfiles(teamArr)}
</main>
</body>
</html>
`
}




