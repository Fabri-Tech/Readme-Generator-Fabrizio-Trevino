// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [  {
    type: "input",
    name: "title",
    message: "What is the title of your project?:",
  },
  {
    type: "input",
    name: "description",
    message: "Can you provide a description of your project?:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?:",
  },
  {
    type: "input",
    name: "usage",
    message: "Can you provide usage information?:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license do you want to choose for your project?",
    choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?:",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?:",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?:",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?:",
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Great Job!");
    });
  }
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (responses) {
      writeToFile("README.md", generateMarkdown(responses));
    });
  }

// Function call to initialize app
init();


