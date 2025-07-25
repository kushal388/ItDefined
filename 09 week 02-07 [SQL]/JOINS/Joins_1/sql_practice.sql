 use test;
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT CHECK (age >= 0),
    department VARCHAR(100),
    salary DECIMAL(10, 2) CHECK (salary >= 0),
    company VARCHAR(100),
    state VARCHAR(100),
    phone BIGINT NOT NULL UNIQUE CHECK (phone BETWEEN 6000000000 AND 9999999999)
);


INSERT INTO users (name, email, age, department, salary, company, state, phone) VALUES
('Kushal', 'kushal@example.com', 24, 'Developer', 55000.00, 'Infosys', 'Karnataka', '9876543210'),
('Rakesh', 'rakesh@example.com', 25, 'HR', 48000.00, 'Wipro', 'Karnataka', '9123456789'),
('Rohith', 'rohith@example.com', 23, 'Sales', 46000.00, 'TCS', 'Tamil Nadu', '9988776655'),
('Chaitanya', 'chaitanya@example.com', 22, 'Marketing', 47000.00, 'Accenture', 'Andhra Pradesh', '9876501234'),
('Meghu', 'meghu@example.com', 24, 'Cybersecurity', 52000.00, 'HCL', 'Karnataka', '9876512345'),
('Narashimha', 'narashimha@example.com', 25, 'Support', 43000.00, 'Tech Mahindra', 'Andhra Pradesh', '9876523456'),
('Dia', 'dia@example.com', 21, 'Design', 41000.00, 'Zoho', 'Goa', '9876534567'),
('Pooja', 'pooja@example.com', 22, 'HR', 46000.00, 'Infosys', 'Kerala', '9876545678'),
('Ankit', 'ankit@example.com', 23, 'Developer', 54000.00, 'Google', 'Delhi', '9876556789'),
('Divya', 'divya@example.com', 21, 'Support', 42000.00, 'TCS', 'Maharashtra', '9876567890'),
('Suresh', 'suresh@example.com', 25, 'Cybersecurity', 58000.00, 'Wipro', 'Bihar', '9876578901'),
('Neha', 'neha@example.com', 24, 'Sales', 47000.00, 'Amazon', 'Maharashtra', '9876589012'),
('Manoj', 'manoj@example.com', 23, 'Developer', 55000.00, 'Infosys', 'Karnataka', '9876590123'),
('Sneha', 'sneha@example.com', 22, 'HR', 46000.00, 'HCL', 'Kerala', '9876601234'),
('Alok', 'alok@example.com', 25, 'Finance', 60000.00, 'Deloitte', 'Bihar', '9876612345'),
('Simran', 'simran@example.com', 21, 'Design', 43000.00, 'Adobe', 'Punjab', '9876623456'),
('Tarun', 'tarun@example.com', 24, 'Marketing', 47000.00, 'Accenture', 'Uttar Pradesh', '9876634567'),
('Isha', 'isha@example.com', 24, 'Testing', 55000.00, 'Google', 'Karnataka', '9876645678'),
('Arjun', 'arjun@example.com', 22, 'Sales', 48000.00, 'TCS', 'Delhi', '9876656789'),
('Meera', 'meera@example.com', 22, 'Support', 45000.00, 'Tech Mahindra', 'Andhra Pradesh', '9876667890');

SELECT * FROM test.users;

-- truncate users;



ALTER TABLE users
ADD phone VARCHAR(15) NOT NULL UNIQUE CHECK (phone REGEXP '^[6-9][0-9]{9}$');



select name from  users ;

-- Q 1) salary >50000 and phone ends with 1-5;

select * from users where salary >=50000 AND (phone LIKE '%1' or  phone LIKE '%2' or phone LIKE '%3' or phone LIKE '%4' or phone LIKE '%5');

select * from users where salary >=  50000 and right(phone, 1) IN ('1','2','3','4','5');

select * from users where salary >= 50000 and phone REGEXP  '[1-5]$'  ;



-- Q 2) select age > 25 whose name starts with with A-P


select * from users where age >20 and name > 'A' and name <= 'K';

SELECT * 
FROM users 
WHERE age > 20 
  AND LEFT(name, 1) BETWEEN 'A' AND 'K';

-- .......................................................
SELECT * FROM users
WHERE state IN ('Karnataka', 'Kerala' ,'Tamil nadu');

 SELECT state FROM users WHERE salary > 50000;

SELECT * FROM users
WHERE state in (
    SELECT state FROM users WHERE salary > 50000
);

select *  from users where state = "Karnataka" or state= "Delhi" or  state= "Bihar";


SELECT * FROM users
WHERE salary > ANY (
    SELECT salary FROM users WHERE state = 'Karnataka'
);

SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM users s
    WHERE s.state = u.state AND s.salary > 50000
);


-- ------------------------------------------------------
-- Q1 . List all users from the state of 'Karnataka' whose salary is greater than 50000.
select * from users where salary > 50000  and state = "Karnataka";

-- Q2 . Find the average salary for each department.

select  department, avg(salary) from users group by department ;

SELECT department, AVG(salary) AS avg_salary
FROM users
GROUP BY department
HAVING AVG(salary) > 50000;


SELECT state, COUNT(*) 
FROM users
GROUP BY state
HAVING state = 'Karnataka';  -- ✅ No aggregate in HAVING

-- Q3 Which company has the highest number of employees in the table?

select company , count(*) as total_employee from users group by company order by total_employee desc limit 1;

select company, count(*) as total_emloyee from users group by company ;

-- Q4 .Display users whose phone numbers end with an even digit. 

select * from users where phone % 10 in(0,2,4,6,8);

-- Q5 Retrieve the names of users who work in the same department as 'Kushal'.

select name , department from users where department in (select department from users where name = "Kushal" );

select name , department from users where department =  (select department from users where name = "Kushal" );

-- Q6 Find departments where the average salary is more than 50000

select department  from users group by department having avg(salary) > 50000;

-- Q7 List the users who have the same salary as someone else (i.e., duplicate salaries).

select * from users where salary in (select salary from users group by salary having count(*)>1 );
select salary  from users group by salary having count(*)>1 ;

-- q8. Find users whose names start with the letter 'S' and are not in the 'HR' department.

select * from users where name Like 'S%' and department!= "HR";

SELECT * FROM users
WHERE name LIKE 'S%' AND department <> 'HR';

select name from users where name in (select name from users where name  LIKE 'S%' and NOT department ="HR");

-- Q9 Show all users whose department is either 'Developer' or 'Sales' and age is below 24.

select * from users where department = "Developer" or department ="Sales" AND age < 24;

select * from users where department in ("Developer", "Sales") and age < 24;

-- Q10 Display users working in the same state and company as 'Pooja'.

-- this wont work for state
select * from users where company in (Select company from users where name = "Pooja" );

-- this will work fine
select * from users where (company,state) in (Select company,state from users where name = "Pooja" );

select * from users 
where company = (select company from users where name = "Pooja" )
and state = (select state from users where name = "pooja");


-- Q11 🧠 1. Find all users whose salary is higher than the average salary of their own department.

select name, department ,salary  from users u where salary > (
select avg(salary) from users where  department = u.department);

-- Q12 List the departments that have more than one user from the same state.

select department from users group by department having count(*)>1;

-- Q13 . Find the second highest salary in the entire table.

select salary as secondhigh from  users order by salary desc  limit 1 offset 1; 

select max(salary)   as second_high from users where salary < ( select max(salary) from users);


-- Q14 . Show all users whose names are palindromes (e.g., "Neha", "Anna")
SELECT name 
FROM users
WHERE name = REVERSE(name);


