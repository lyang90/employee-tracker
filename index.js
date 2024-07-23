const inquirer = require('inquirer');
const VIEW_ALL_EMPLOYEES = 'View all employees';
const VIEW_ALL_ROLES = 'View all roles';
const VIEW_ALL_DEPARTMENTS = 'View all departments';
const ADD_DEPARTMENT = 'Add Department';
const ADD_EMPLOYEE = 'Add Employee';
const ADD_ROLE = 'Add Role';
const QUIT = 'Quit';



const prompt = [
    {
        message: 'What would you like to do?',
        type: 'list',
        choices: [VIEW_ALL_EMPLOYEES, VIEW_ALL_ROLES, VIEW_ALL_DEPARTMENTS, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE ,QUIT],
        name: 'choice'
    },


]

function main() {
    inquirer.prompt(prompt)
        .then((choice) => {
            const options = {
                VIEW_ALL_EMPLOYEES: viewAllemployees,
                VIEW_ALL_DEPARTMENTS: viewAllDepartments,
                VIEW_ALL_ROLES: viewAllRoles,
                ADD_DEPARTMENT: addDepartment,
                ADD_ROLE: addRole,
                ADD_EMPLOYEE : addEmployee,
                QUIT: exit
            }

            options[choice]();
        })
}


function viewAllemployees() {
    pool.query("SELECT * FROM employee")
        .then(({ rows }) => {
            console.log(rows);
            main();
        })
}

function viewAllRoles() {
    pool.query("SELECT * FROM role")
        .then(({ rows }) => {
            console.log(rows);
            main();
        })
}

function viewAllDepartments() {
    pool.query("SELECT * FROM department")
        .then(({ rows }) => {
            console.log(rows);
            main();
        })
}

function addDepartment() {
    inquirer.prompt([
        {
            message: 'What is the name of the department you would like to add?',
            name: 'departmentName'
        }

    ])
    .then(({departmentName}) => {
        pool.query("INSERT INTO department (department_name) VALUES ($1)", [departmentName])
        .then(() => {
            console.log('Department was added.');
        })
    })
    
}

function addRole() {
    inquirer.prompt([
        {
            message: 'What is the name of the role you would like to add?',
            name: 'roleName'
        }

    ])
    .then(({roleName}) => {
        pool.query("INSERT INTO role (role_name) VALUES ($1)", [roleName])
        .then(() => {
            console.log('Role was added.');
        })
    })
    
}


function addEmployee() {
    inquirer.prompt([
        {
            message: 'What is the name of the employee you would like to add?',
            name: 'employeeName'
        }

    ])
    .then(({employeeName}) => {
        pool.query("INSERT INTO employee (employee_name) VALUES ($1)", [employeeName])
        .then(() => {
            console.log('Employee was added.');
        })
    })
    
}

function exit() {
    console.log('Bye bye');
    process.exit();
}

main();