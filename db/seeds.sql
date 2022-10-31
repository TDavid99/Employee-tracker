USE employee_db;

INSERT INTO department (name)
VALUES 
("Construction Worker"),
("Engineer"),
("Sales & Marketing");

INSERT INTO role (title, salary, department_id)
VALUES
("Project Manager", 65000, 1),
("Civil Engineer", 60000, 3),
("Accounting", 60000, 2 )

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("frank", "Johnson", 1, null),
("paul", "Johnson", 2, 1),
("walter", "Johnson", 3, null);