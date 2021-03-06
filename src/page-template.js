const Employee = require("../lib/Employee")

const generateProfiles = teamArr => {

    const managerCard = manager => {
        return `
        <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        <a href="mailto:${manager.getEmail()}" class="list-group-item">Email: ${manager.getEmail()}</a>
        </ul>
        </div> 
        </div>
        `
    }
    const internCard = intern => {
        return `
        <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <p class="card-text">${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
          <a href="mailto:${intern.getEmail()}" class="list-group-item">Email: ${intern.getEmail()}</a>
        </ul>
        </div>
        </div>
        `
    }
    const engineerCard = engineer => {
        return `
        <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <p class="card-text">${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <a href="mailto:${engineer.getEmail()}" class="list-group-item">Email: ${engineer.getEmail()}</a>
        <a href="https://github.com/${engineer.getGithub()}" class="list-group-item">Github: ${engineer.getGithub()}</a>
        </ul>
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
         <main class="container my-3">
             <div class="m-6 row justify-content-around">
${generateProfiles(teamArr)}
</div>
</main>
</body>

</html>
`
}



