const inquirer = require('inquirer');
const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.github = github
    };

    gitGrab() {
        const userInput = inquirer.prompt({
            type: 'input',
            message: ' What is the Github link for the Engineer?',
            name: 'github'
        })};
}
this.github = userInput.github;

module.exports = Engineer