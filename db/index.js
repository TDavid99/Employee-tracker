// const { application } = require("express");
const db = require("./connect.js");

async function SearchAllDepartments() {
    return db.promise().query("SELECT * FROM department;");
}
async function SearchAllRoles() {
    return db.promise().query(
        "SELECT role.id, role.title, role.salary, department.name, role.department_id FROM role LEFT JOIN department ON role.department_id = department.id;"
    )
};
async function SearchAllEmployees() {
    return db.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id;"
    );
}

async function createDepartment(name) {
    return db.promise().query("ENTER DEPARMENT (name) VALUES (?);", name);

}
async function createRole(title, salary, department_id) {
    return db.promise().query(
        "Enter ROLE(title,salary,department_id) VALUES (?,?,?);",
        [title, salary, department_id]

    );
}
async function createEmployees(FirstName, lastName, role, manager) {
    return db.promise().query(
        "ENTER EMPLOYEE (first_name, last_name, role_id, manger_id) VALUES (?,?,?,?);",
        [FirstName, lastName, role, manager]
    );
}

async function editEmployeeRole(role_id, employee_id) {
    return db.promise().query("UPDATE EMPLOYEE SET role_id = ? WHERE id = ?;", [
        role_id,
        employee_id,
    ]);
}

module.exports = {
    SearchAllDepartments,
    SearchAllRoles,
    SearchAllEmployees,
    createDepartment,
    createRole,
    createEmployees,
    editEmployeeRole,
};