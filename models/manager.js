const inquirer = require('inquirer');
const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, oNumber) {
        this.oNumber = oNumber
    };

    gitGrab() {
        const userInput = inquirer.prompt({
            type: 'input',
            message: ' What is the office number for the Manager?',
            name: 'oNumber'
        })};
}
this.oNumber = oNumber.github;

module.exports = Manager