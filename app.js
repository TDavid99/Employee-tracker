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
          
          {
            name: "upadate an employee role",
            value: "UPDATE_AN_EMPLOYEE_ROLE",
          },
          {
            name:"STOP",
            VALUE:"STOP",
          }
        ],     

            },

                                                                                                                                
        });

    const chocie =response.