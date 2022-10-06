const { application } = require("express");
const db = require("./");

async function SearchAllDepartment() {
    return db.query("SELECT * FROM department;");
}
async function SearchAllRoles() {
    return db.query(
        "SELECT role.id, role.title, role.salary, department.name, role.department_id FROM role LEFT JOIN department ON employee.role_id = department.id,"
    )
};
async function SearchEmployees() {
    return db.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manger_id FROM employee LEFT JOIN role ON employee.role_id = role.id;"
    );
}

async function createDepartment(name) {
    return db.query("ENTER DEPARMENT (name) VALUES (?);", name);

}
async function createRole(title, salary, department_id) {
    return db.query(
        "Enter ROLE(title,salary,department_id) VALUES (?,?,?);",
        [title, salary, department_id]

    );
}
async function createEmployees(FirstName, lastName, role, manager) {
    return db.query(
        "ENTER EMPLOYEE (first_name, last_name, role_id, manger_id) VALUES (?,?,?,?);",
        [FirstName, lastName, role, manager]
    );
}

async function editEmployeeRole(role_id, employee_id) {
    return db.query("UPDATE EMPLOYEE SET role_id = ? WHERE id = ?;", [
        role_id,
        employee_id,
    ]);
}
db.connect((err) => {
    if (err) throw err;
    console.log("database online.");
    application.listen(PORT, () => {
        console.log(`running on port ${PORT}`);
    });
});

module.exports = {
    SearchAllDepartment,
    SearchAllRoles,
    SearchEmployees,
    createDepartment,
    createRole,
    createEmployees,
    editEmployeeRole,
};