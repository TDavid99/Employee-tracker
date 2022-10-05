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
               value: "VIEW_EMPL"
          }

                                                                                                                                
    }}
}