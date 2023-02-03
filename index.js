/* installed dependencies 
need to : add necessary folders (lib, dist), run test,  */

const inquirer = require("inquirer");
const fs = require('fs');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');
const generateSite = require('./lib/generate-site');
const employee = require('./lib/employee');
const { prompt } = require('inquirer');
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Enter your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: employee => {
                if (employee) {
                    return true;
                } else {
                    console.log('Enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'phone',
            message: 'What is your phone number?',
            validate: phone => {
            if (phone) {
                return true;
            } else {
                console.log('Enter your phone number');
                return false;
            }

            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new manager(answers.name, answers.id, answers.email, answers.phone);
            teamMembers.push(manager);
            promptMenu();
    })
}

const promptMenu = () => {
    return inquirer.prompt([

    ])
}