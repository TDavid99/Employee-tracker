
const { prompt } = require("inquirer");
const {
  SearchAllDepartments,
  SearchAllRoles,
  SearchAllEmployees,
  createRole,
  createEmployees,
  createDepartment,
  editEmployeeRole,
} = require("./db/index.js");
const cTable = require("console.table");
const db = require("./db/connect.js");
// const { } = require("sequelize/types/query-types");
// const { response } = require("express");

async function mainMenu() {
    // console.log("");
  const response= await prompt({
    type: "list",
    name: "choice",
    message: "what would you like to do?",
    choices: [
      {
        name: "Search all departments",
        value: "Search_DEPARTMENTS",
      },
      {
        name: "Search all employees",
        value: "Search_EMPLOYEES",
      },
      {
        name: "Search all roles",
        value: "Search_ROLES",
      },
      {
        name: "create a role",
        value: "Create_A_ROLE",
      },
      {
        name: "create a department",
        value: "Create_A_DEPARTMENT",
      },
      {
        name: "Create an employee",
        Value: "Create_A_EMPLOYEE",

        name: "update an employee role",
        value: "UPDATE_AN_EMPLOYEE_ROLE",
      },
      {
        name: "STOP",
        value: "EXIT",
      },
    ],
  });
  
//   .then ((data) => {
    // });
  
  const choice = response.choice;

  switch (choice) {
    case "Search_DEPARTMENTS":
      return FindAllDepartments();
    case "Search_ROLES":
      return FindAllRoles();
    case "Search_EMPLOYEES":
      return FindAllEmployees();
    case "Create_A_DEPARTMENT":
      return createNewDepartment();
    case "Create_A_ROLE":
      return addRole();
    case "Create_A_EMPLOYEE":
      return addEmployee();
    case "UPDATE_AN_EMPLOYEE_ROLE":
      return updateEmployeeRole();
    case "EXIT":
      return quit();
  }
}



async function FindAllDepartments() {
  console.log("hello world")
  const [rows] = await SearchAllDepartments();
  const departments = rows;
console.log(departments)
  console.table(departments);

  mainMenu();
}
async function FindAllEmployees() {
  const [rows] = await SearchAllEmployees();
  const employees = rows;
  console.table(employees);

  mainMenu();
}

async function FindAllRoles() {
  const [rows] = await SearchAllRoles();
  const roles = rows;

  console.table(rows);
  mainMenu();
}

async function createNewDepartment() {
  const response = await prompt([
    {
      type: "input",
      name: "department",
      message: "what's is the Departments name of your choice.",
    },
  ]);

  const createDepartmentRows = await createDepartment(response.department);

  console.log("Department added.\n");

  FindAllDepartments();
}
async function addRole() {

  const [departmentRows] = await SearchAllDepartments();

  const choices = departmentRows.map((department) => ({
    name: department.name,
    value: department.id,
  }));

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

  const salaryInt = parseInt(response.salary);

  const [createRoleRows] = await createRole(
    response.title,
    salaryInt,
    response.choice
  );
  console.log("Role add./n");

  FindAllRoles();
}
async function addEmployee() {

  const [employeeRows] = await SearchAllEmployees();

  const employeeChoices = employeeRows.map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id,

  }));

  const [roleRows] = await SearchAllRoles();

  const roleChoices = roleRows.map((role) => ({
    name: role.title,
    value: role.id,
  }));
  const { firstName, lastName, roleChoice, employeeChoice } = await prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is your Employee first name?",
    },
    {
      type: "input",
      name: "lastName",
      message: "What is your Employee last name?",
    },
    {
      type: "list",
      name: "roleSelected",
      message: "What is your Employee job title?",
      choices: roleChoices,
    },
    {
      type: "list",
      name: "employeeChoice",
      message: "Who is the Manager of the employee?",
      choices: employeeChoices,
    },
  ]);
  createEmployee(firstName, lastName, roleChoice, employeeChoice);
  console.log("Employee added.\n");
  FindAllEmployees();
}
async function updateEmployeeRole() {
  const [employeeRows] = await SearchAllEmployees();
  const employeeChoices = employeeRows.map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    vaule: employee.id,
  }));

  const [roleRows] = await SearchAllRoles();
  const roleChoices = roleRows.map((role) => ({
    name: role.title,
    vaule: role.id,
  }));

  const { employeeChoice, roleChoice } = await prompt([
    {
      type: "list",
      name: "employeeChoice",
      message: "what is name of the employee you would like yo update status?",
      choices: employeeChoices,
    },
    {
      type: "list",
      name: "roleChoice",
      message: "What is the new role for this employee",
      choices: roleChoices,
    },
  ]);
  editEmployeeRole(roleChoice, employeeChoice);

  console.log("Employee role added.\n");
  FindAllEmployees();
}
function quit() {
  console.log("All Done!");
  process.exit();
}
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');

  mainMenu();
});
// async function startProgram() {
//   await mainMenu();
// }
