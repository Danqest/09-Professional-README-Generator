const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
        type: "input",
        name: "projectTitle",
      //   message: "What is your name?",
      },
    {
      type: "input",
      name: "description",
    //   message: "What is your name?",
    },
    {
        type: "input",
        name: "tableOfContents",
      //   message: "What is your name?",
      },
    {
      type: "input",
      name: "installation",
    //   message: "Where are you located?",
    },
    {
      type: "input",
      name: "usage",
    //   message: "Write a short Bio about yourself",
      
    },
    {
      type: "input",
      name: "contributing",
    //   message: "What is your GitHub URL",
    },
    {
      type: "input",
      name: "tests",
    //   message: "What is your LinkedIn URL",
    },
    {
        type: "input",
        name: "username",
      //   message: "What is your LinkedIn URL",
      },
      {
        type: "input",
        name: "github",
      //   message: "What is your LinkedIn URL",
      },
      {
        type: "input",
        name: "email",
      //   message: "What is your LinkedIn URL",
      },
      {
        type: "input",
        name: "license",
      //   message: "Write a short Bio about yourself",
        
      },
  ])
  .then((data) => {
    console.log(data);
    const readme = generateREADME(data)
    const filename = `README.me`;
    fs.writeFile(filename, readme, (err) =>
      err ? console.log(err) : console.log("Success!"))
    })

    function generateREADME(data) {
        return `# ${data.projectTitle}
        DESCRIPTION:
        ${data.description}

        TABLE OF CONTENTS:
        1) Installation
        2) Usage
        3) Contribution Guidelines
        4) Test Instructions

        1) INSTALLATION:
        ${data.installation}

        2) USAGE:
        ${data.usage}

        3) CONTRIBUTION GUIDELINES:
        ${data.contributing}

        4) TEST INSTRUCTIONS:
        ${data.tests}

        QUESTIONS - CONTACT:
        Github: ${data.username}
        Email: ${data.email}

        LICENSE:
        ${data.license}

          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
          <title>Document</title>
        </head>
        <body>
          <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Hi! My name is ${data.name}</h1>
            <p class="lead">I am from ${data.Location}.</p>
            <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
            <ul class="list-group">
              <li class="list-group-item">My GitHub username is ${data.gitHub}</li>
              <li class="list-group-item">LinkedIn: <a href="${data.linkedIn}">${data.linkedIn}</a></li>
            </ul>
          </div>
        </div>
        </body>
        </html>`
    }