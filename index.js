const inquirer = require('inquirer');
const pool = require('./config');
const VIEW_ALL_EMPLOYEES = 'View all employees';
const VIEW_ALL_ROLES = 'View all roles';
const VIEW_ALL_DEPARTMENTS = 'View all departments';
const ADD_DEPARTMENT = 'Add Department';
const ADD_EMPLOYEE = 'Add Employee';
const ADD_ROLE = 'Add Role';
const UPDATE_ROLE = 'Update Employee role';
const QUIT = 'Quit';




const prompt = [
    {
        message: 'What would you like to do?',
        type: 'list',
        choices: [VIEW_ALL_EMPLOYEES, VIEW_ALL_ROLES, VIEW_ALL_DEPARTMENTS, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE, UPDATE_ROLE, QUIT],
        name: 'choice'
    },


]

function main() {
    inquirer.prompt(prompt)
        .then((response) => {
            console.log(response.choice);
            
            switch (response.choice) {
                case VIEW_ALL_EMPLOYEES:
                    viewAllemployees()
                    break;

                case VIEW_ALL_DEPARTMENTS:
                    viewAllDepartments()
                    break;

                case VIEW_ALL_ROLES:
                    viewAllRoles()
                    break;
                case ADD_DEPARTMENT:
                    addDepartment()
                    break;
                case ADD_ROLE:
                    addRole()
                    break;

                case ADD_EMPLOYEE:
                    addEmployee()
                    break;

                case UPDATE_ROLE:
                    updateRole()
                    break;


                case  QUIT: 
                    exit()
                    break;
            }

            
        })
}


function viewAllemployees() {
    pool.query("SELECT * FROM employee")
        .then(({ rows }) => {
            console.table(rows);
            main();
        })
}

function viewAllRoles() {
    pool.query("SELECT * FROM role")
        .then(({ rows }) => {
            console.table(rows);
            main();
        })
}

function viewAllDepartments() {
    pool.query("SELECT * FROM department")
        .then(({ rows }) => {
            console.table(rows);
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
        .then(({ departmentName }) => {
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
        .then(({ roleName }) => {
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
        .then(({ employeeName }) => {
            pool.query("INSERT INTO employee (employee_name) VALUES ($1)", [employeeName])
                .then(() => {
                    console.log('Employee was added.');
                })
        })

}

function updateRole(employee_id) {
    inquirer.prompt([
        {
            message: 'What is the name of the employee ID you would like to update the role of?',
            name: 'employeeRole'
        }

    ])
        .then(({ employeeRole }) => { // TODO: FIX this query
            pool.query("UPDATE employee SET role_id= $1 WHERE id = $2", [employeeRole, employee_id])
                .then(() => {
                    console.log('Employee information was added.');
                })
        })

}

function exit() {
    console.log('Bye bye');
    process.exit();
}

main();