const db = require("./");
 
async function SearchAllDepartment() {
    return db.query("SELECT * FROM department;");
}
  async function SearchAllRoles() {
    return db.query(
        "SELECT role.id, role.title, role.salary, department.name, role.department_id FROM role LEFT JOIN department ON employee.role_id = department.id," 
    )
  };
}
async function SearchEmployees() {
    return db.query(
        "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manger_id FROM employee LEFT JOIN role ON employee.role_id = role.id;"
    );
}

async function createDepartment(name){
    return db.query("ENTER DEPARMENT (name) VAULES (?);", name);

}
async