const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: `Provide a short description explaining the what, why, and how of your project. 
        - What was your motivation?
        - Why did you build this project? 
        - What problem does it solve?
        - What did you learn?'`,
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps for installation for this project?",
    name: "install",
  },
  {
    type: "input",
    message: "How is this project used?",
    name: "usage",
  },
  {
    type: "list",
    messgage: "Which license are you using for this project?",
    name: "license",
    choices: [
      "MIT",
      "GPLv3",
      "MPL_2.0",
      "Apache_2.0",
      new inquirer.Separator(),
      "I do not want to use a license",
    ],
  },
  {
    type: "input",
    message: "How can others constribute to this project?",
    name: "contribute",
  },
  {
    type: "input",
    message: "How can users test this project?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "GitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, response) {
  fs.writeFile(fileName, response, (err) =>
    err ? console.error(err) : console.log(response)
  );
}

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions).then((response) =>
    // fs.writeFile("README.md", generateMarkdown(response), (err) =>
    // err ? console.error(err) : console.log(response)
    // )
    writeToFile("README.md", generateMarkdown(response))
  );
}

// Function call to initialize app
init();
