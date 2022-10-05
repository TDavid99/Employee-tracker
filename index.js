const db = require("./");
 
async function findAllDepartment() {
    return db.query("SELECT * FROM department;");
}
  async function findAllRoles() {
    return db.query(
        "SELECT role.id, role.title, role.salary, department.name, role.department_id FROM role LEFT JOIN department ON employee.role_id = department.id," 
    )
  }