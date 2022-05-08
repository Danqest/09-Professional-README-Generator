const inquirer = require("inquirer");
const fs = require("fs");
inquirer
  .prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?",
      },
    {
      type: "input",
      name: "description",
      message: "Write a short description of the purpose of this project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Write a short set of instructions for installation of the project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Write a short set of instructions for how to use the project.",
      
    },
    {
      type: "input",
      name: "contributing",
      message: "Write a short set of instructions for how to contribute to the project.",
    },
    {
      type: "input",
      name: "tests",
      message: "Write a short set of instructions for how to test the project.",
    },
    {
        type: "input",
        name: "username",
        message: "If people need to contact you for questions, what is your github username?",
      },
      {
        type: "input",
        name: "email",
        message: "Additionally, what is your email in case people want to reach out to you directly?",
      },
      {
        type: "rawlist",
        name: "license",
        message: "Write license would you like to use with this README generator?",
        choices: [
          'MIT',
          'Apache',
          'GPL',
          'BSD'
        ]
        
      },
  ])
  .then((data) => {
    console.log(data);
    const readme = generateREADME(data)
    const filename = `README.md`;
    fs.writeFile(filename, readme, (err) =>
      err ? console.log(err) : console.log("Success!"))
    })

  function generateREADME(data) {
    return `
  # ${data.projectTitle}
  ![license](https://img.shields.io/badge/${data.license}-License-green)
  
  ## DESCRIPTION:
  
  ${data.description}

  ## TABLE OF CONTENTS:
  - [INSTALLATION](#Installation)
  - [USAGE](#Usage)
  - [CONTRIBUTING](#Contributing)
  - [TESTS](#Tests)

  ## <a name="Installation"></a> INSTALLATION:
  
  ${data.installation}
  
  ## <a name="Usage"></a> USAGE:
  
  ${data.usage}

  ## <a name="Contributing"></a> CONTRIBUTING:
  
  ${data.contributing}

  ## <a name="Tests"></a> TESTS:
  
  ${data.tests}

  ## QUESTIONS:
  
  Reach me at my Github and Email address:
  
  Github: https://www.github.com/${data.username}
  Email: ${data.email}

  ## LICENSE:
  
  This application is covered under the ${data.license} License.
      
  ## WALKTHRU VIDEO:
  https://drive.google.com/file/d/1JC7a1FePN4NBECYRweojPbQzWoVI49CH/view
      `
    }