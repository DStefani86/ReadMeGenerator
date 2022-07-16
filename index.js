const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
    },
    {
        type: 'checkbox',
        message: 'What License would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache_2.0', 'BSD_3--Clause']
    },
    {
        type: 'input',
        message: 'What is your installation process?',
        name: 'install',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(answers) {
        const data = generateMarkdown(answers)
        writeToFile("README.md", data);
    })
}

// Function call to initialize app
init();
