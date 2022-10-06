const { prompt } = require("inquirer");
const {
    SearchAllDepartment,
    SearchAllRoles,
    SearchEmployees,
    createRole,
    createEmployee,
    createDepartment,
    editEmployeeRole,
} = require("./index");
const cTable = require("console.table");
const { response } = require("express");

async function mainMenu() {
    const response = await prompt({
        type: "list",
        name: "choice",
        message: "what would you like to do?",
        choices: [
            {
                name: "Search all departments",
                value: "VIEW_DEPARTMENTS",
            },
          {
               name: "Search all employees",
               value: "VIEW_EMPLOYEES",
          },
          {
               name: "Search all roles",
               value: "VIEW_ROLEs",
          },
          {
             name: "Add a role",
             value: "ADD_A_ROLE",
          },
          {
              name:"Add a department",
              value:" ADD_A_DEPARTMENT",

          },
          {
              name:"Add an employee",
              Value:"ADD_A_EMPLOYEE",
          
          
            name: "upadate an employee role",
            value: "UPDATE_AN_EMPLOYEE_ROLE",
          },
          {
            name:"STOP",
            VALUE:"STOP",
          },
        ],     
          z                                                                                                         
        });
    }
    const choice =response.choice;
    
    switch(choice) {
        case "VIEW_DEPARTMENTS":
            return SearchAllDepartment();
        case "VIEW_ROLES":
            return SearchAllRoles();
        case "VIEW_EMPLOYEES":
            return SearchEmployees();
        case "ADD_A_DEPARTMENT":
            return createDepartment();
        case "ADD_A_ROLE":
            return createRole();
        case "ADD_A_EMPLOYEE":
            return createEmployee();
        case "UPDATE_AN_EMPLOYEE_ROLE":
            return editEmployeeRole();
            case "STOP":
              return stop();
    }


async function SearchAllDepartment() {
    const [rows] = await findAllDepartment();
    const department = rows;
    console.log ("\n");

    console.table(department);

    mainMenu();
}
async function SearchEmployees() {
    const [rows]=await findAllEmployees();
    const employee =(employee);
    console.log("\n");

    console.table(employee);
     
    mainMenu();
}

async function SearchAllRoles() {
    const [rows] = await findAllRoles();
    const role = (role);
    console.log("\n");
    console.table(employee);
}

async function createDepartment() {
    const response = await prompt([
        {
            type:"input",
            name:"department",
            message:"what's is the Departments name of your choice.",
        },
    ]);

    const createDepartmentRows = await createDepartment(response.department);
    console.log("Department added.\n");

    SearchAllDepartment();
}
function createEmployee () {
    prompt([
        {
            name:"first_name",
            message: "first name of employee?"
        },
        {
            name:"last_name",
            message:"last name of employee?"
        }
    ])
.then(res => {
    let first_name = res.first_name;
    let last_name = res.last_name;
}),

async function ADD_A_ROLE(){
    const [departmentRows] = await SearchAllDepartment();
    
    const choices = departmentRows.map((department) =>({
        name: department.name,
        value: department.id,
    }));
}
const response = await prompt([
    {
        type: ""
    }
])
    
