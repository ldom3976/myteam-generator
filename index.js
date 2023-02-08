const inquirer = require("inquirer");
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
//const Employee = require('./lib/Employee.js');
const fs = require('fs');
const pageTemplate = require('./dist/pageTemplate');

//array for employees
var employees = [];

const promptManager = function () {
    //prompts manager
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Enter an ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address for the employee?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the office phone number of the employee?',
            validate: office => {
            if (office) {
                return true;
            } else {
                console.log('Enter an office phone number.');
                return false;
            }

            }
        },
    ])
    
    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
    })
};


//menu
const promptMenu = function (employees) {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Which employee would you like to add?',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Enter an ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Enter an email.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?",
            when: (input) => input.role === 'Engineer',
            vaildate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Enter a GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Where does the intern attend school?',
            when: (input) => input.role === 'Intern',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Enter a school.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Add another employee?',
            default: false
        }

    ])

    .then(employeesData => {
        let { name, id, email, role, github, school, confirmAddEmployee} = employeesData;
        let employee;

        if(role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }
        employees.push(employees);

        if(confirmAddEmployee) {
            return menu(employees)
        } else {
            //console.log(employees);
            return employees;
        }
    })
};

promptManager()
.then(promptMenu)
.then(data => {
    const pageHTML = pageTemplate(data)

    fs.writeFile('./index.html', pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team page was created. Check index.html")
        }
    })
});45