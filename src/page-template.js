const Employee = require("../lib/Employee")

const generateProfiles = teamArr => {

    const managerCard = manager => {
        return ` 
        <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">${manager.getRole()}</p>
        <p>ID:${manager.getId()}</p>
        <a href="${manager.getEmail()}" class="card-link">email:${manager.getEmail()}</a>
        <p>office number:${manager.getOfficeNumber()}</p>
        </div>
        </div>
        `
    }
    const internCard = intern => {
        return `
        <div class='card-body'> 
        <h5 class='card-title'>${intern.getName()}</h2>
        <p class='card-text'>${intern.getRole()}</p>
        <p>ID:${intern.getId()}</p>
        <p>school attended:${intern.getSchool()}</p>
        <a href="${intern.getEmail()}" class="card-link">email:${intern.getEmail()}</a>
        </div>
        </div>
        `
    }
    const engineerCard = engineer => {
        return `
        <div class='card-body'> 
        <h5 class='card-title'>${engineer.getName()}</h2>
        <p class='card-text'>${engineer.getRole()}</p>
        <p>ID:${engineer.getId()}</p>
        <a href="${engineer.getEmail()}" class="card-link">email:${engineer.getEmail()}</a>
        <a href="${engineer.getGithub()}" class="card-link">github:${engineer.getGithub()}</a>
        </div>
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
    return `

     <!DOCTYPE html>
     <html lang="en">
     
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
             integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
         <link rel="stylesheet" href="../src/styles.css" />
         <title>Team Profile</title>
     </head>
     
     <body>
         <header>
             <h1>My Team</h1>
         </header>
         <main class="container col-12 col-lg-9 d-flex flex-column">
             <div class="card m-5 row justify-content-around" style="width: 18rem;">
${generateProfiles(teamArr)}
</div>
</div>
</div>
</main>
</body>

</html>
`
}




