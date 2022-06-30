const inquirer = require('inquirer');


class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    infoGrab() {
        const userInput = inquirer.prompt({
            type: 'input',
            message: 'Employee Name?',
            name: 'empName'
        },{
            type: 'input',
            message: 'Employee I.D Number?',
            name: 'empId'
        },{
            type: 'input',
            message: 'Employee Email?',
            name: 'empEmail'
        })}};


    this.name = userInput.empName;
    this.id = userInput.empId;
    this.email = userInput.empEmail;

module.exports = Employee
