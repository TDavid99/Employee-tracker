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
 async function createEmployee () {
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
        type: "input",
        name: "title",
        message: "What is the name of your employee role?",
    },
    {
        type: "input",
        name: "Salary",
        message: "What is the salary for this employee role?",
    },
    {
        type: "list",
        name: "choice",
        message: "What department does this employee belong?",
        choices,
    },
]);
}
const salaryInt = parseInt(response.salary);

const [createRolesection] = await createRole(
    response.title,
    salaryInt,
    response.choice
    );
    console.log("Role add./n");
    
    SearchAllRoles();

    async function ADD_A_EMPLOYEE() {
        const [employeesection] =await SearchEmployees();
        const employeeSelection = employeesection.map ((employee) => ({
         name : `${employee.first_name} ${employee.last_name}`,
         value: employee.id,
        }));

        const [roleSection] = await SearchAllRoles();
            const roleChoices = roleSection.map((role) => ({
                name: role.title,
                value: role.id,
            
    }));
        const {firstName, lastName, roleSelected, employeeSelected} = await prompt([
            {
                type: " input",
                name: "firstName",
                message: "Employee first name?",
            },
            {
                type: "input",
                name: "lastName",
                message: "Employee last name?",
            },
            {
                type:"list",
                name: "roleSelected",
                message: "Employee job title?",
                choices: roleSelected,

            },
            {
                type:"list",
                name:"employeeChoice",
                message: "Manager of the employee?",
                choices: employeeSelected,
            },
        ]);
    }
     createEmployee(firstName, lastName , roleSelected, employeeSelected);
     console.log("employee added.\n");
     SearchEmployees();
 function stop() {
    console.log("All Done!");
    process.exit();
 }
 mainMenu();