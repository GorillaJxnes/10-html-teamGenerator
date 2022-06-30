const inquirer = require('inquirer');
const Employee = require('./employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school
    };

    schoolGrab() {
        const userInput = inquirer.prompt({
            type: 'input',
            message: ' What school did the intern attend?',
            name: 'school'
        })};
}
this.school = userInput.github;

module.exports = Intern