const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

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
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Were there any contributions?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What tests were ran?',
        name: 'tests',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}


function init() {
    inquirer
    .prompt(questions)
    .then(function(answers) {
        const data = generateMarkdown(answers)
        writeToFile("README.md", data);
    })
}


init();
