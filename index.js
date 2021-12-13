// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project short description explaining the what, why, and how. What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes your project stand out?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Attach screen shots after building read me!"
    },
    {
        type: "input",
        name: "credits",
        message: "List your resources you used with links. If you used any third-party assets that require attribution or followed tutorials include the links."
    },
    {
        type: "list",
        name: "license",
        message: "This lets other developers know what they can and cannot do with your project.",
        choices: ["Apache 2.0", "BSD", " MIT", "GNU GPLv2", "ISC License", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type: "input",
        name: "features",
        message: "List the main features of your app here."
    },
    {
        type: "input",
        name: "contactMeE",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "contactMeG",
        message: "What is your Github?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Give your contributors guidelines for how to contribute to your work."
    },
    {
        type: "input",
        name: "test",
        message: "Do you have any tests for your application and how to run them?"
    }
    
    
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userresponses) =>{
        writeToFile(`${userresponses.title}.md`, generateMarkdown({ ...userresponses}));
    })
}

// Function call to initialize app
init();
