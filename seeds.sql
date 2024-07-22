INSERT INTO department(id, name)
    VALUES  (01, 'Conquering'),
            (02, 'Foreign Relations'),
            (03, 'Passive Agressive HR')


INSERT INTO role(id, title, salary, department_id)
    VALUES  (101, 'Vanguard', 100000.00, 01),
            (102, 'Work Dictator', 200000,00, 02),
            (103, 'Big Boss', 500000.00, 03)



INSERT INTO role(id, first_name, last_name, role_id, manager_id)
    VALUES  (201, 'Arthur', 'Wart', 101, NULL),
            (202, 'Scar', 'Lion' 102, 111),
            (203, 'Hades', 'Olympus', 103, NULL)