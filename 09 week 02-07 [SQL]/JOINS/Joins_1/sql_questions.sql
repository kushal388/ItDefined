select * from emp;

select * from dept;

select distinct emp_name from emp;

select * from emp;

-- Q1) Write a query to select all employees.
select * from emp;

-- Q2) Select only Name and Salary from Employees.
select emp_name, salary from emp;

-- Q3) List employees with salary > 60000.
select * from emp where salary > 60000;

-- Q4) Find employees from the "IT" department.
select e.emp_name , d.department_name
from emp e
join dept d on e.department_id = d.department_id
where department_name = "Information Technology";

-- Q5) Sort employees by Salary in descending order
select * from emp order by salary desc;

-- Q6) Count how many employees are in the "HR" department
select  count(*) as Hr_department 
from emp e
join dept d on d.department_id = e.department_id
where department_name = "Human Resources";

SELECT COUNT(*)
FROM emp
WHERE department_id = (
  SELECT department_id
  FROM dept
  WHERE department_name = 'Human Resources'
);

-- Q7)Get the maximum salary from the table.
SELECT max(SALARY),DEPARTMENT_ID FROM EMP group by DEPARTMENT_ID;

-- Q8)Get the average salary for all employees
select avg(salary) as avg_salary from emp ;

 -- greater than avg salary
select emp_name,salary from emp where salary>(select avg(salary) from emp );

-- select emp_name , salary from emp where salary>(select avg(salary) from emp);

-- employees whose salary is greater than the average salary of their own department.
select * from emp e1 where salary>(select avg(salary) from emp e2 where e1.department_id=e2.department_id);

-- select * from emp e1 where salary > (select avg(salary) from emp e2 where e1.department_id = e2.department_id);

-- Q9) Find employees who joined before 2020
select * from emp where hire_date < '2020-01-01';

-- Q10) Display employees whose names start with 'A'
select * from emp where emp_name like 'A%';

-- Q11) Join Employees and Departments to show Name, Salary, Dept_Name, and Manager.
select e.emp_name , e.salary , d.department_name, d.department_id
from emp e
join dept d on e.department_id = d.department_id;

SELECT 
  e.emp_name AS employee_name, 
  e.salary, 
  d.department_name, 
  m.emp_name AS manager_name
FROM emp e
JOIN dept d ON e.department_id = d.department_id
LEFT JOIN emp m ON e.manager_id = m.emp_id;

select e.emp_name as emp_name , d.department_name as department_name , d.department_id as department_id , m.emp_name as manager_name
from emp e
join dept d on e.department_id = d.department_id
left join emp m on e.manager_id = m.emp_id;

-- to know emp and manager
select e.emp_name as emp_name , m.emp_name as manager_name
from emp e
 join emp m on e.manager_id = m.emp_id;

-- to know emp and manger name use leftjoin if manager id is null wont show
SELECT 
  e.emp_name AS emp_name,
  m.emp_name AS manager_name
FROM emp e
LEFT JOIN emp m ON e.manager_id = m.emp_id;


 -- to distinct managers
SELECT COUNT(DISTINCT manager_id) AS total_managers
FROM emp
WHERE manager_id IS NOT NULL;

-- to know mangers name
select  distinct e.emp_name , e.salary
from emp e
where e.emp_id in (select distinct manager_id from emp WHERE manager_id IS NOT NULL);

-- Q11) Show department-wise total salary
select * from dept;
SELECT SUM(SALARY),DEPARTMENT_ID  FROM EMP group by DEPARTMENT_ID;

-- Q 12) Get the highest salary in each department.
select d.department_name  , sum(e.salary) as total_Salary
from emp e
 join dept d on e.department_id = d.department_id
group by d.department_name;

select d.department_name , sum(e.salary) as total_salry
from emp e
join dept d on e.department_id = d.department_id
group by d.department_name;

-- Q 13) Find departments with more than one employee

SELECT d.department_name, COUNT(*) AS employee_count
FROM emp e
JOIN dept d ON e.department_id = d.department_id
GROUP BY d.department_name
HAVING COUNT(*) > 1;

SELECT COUNT(*) AS employee_count, department_id
FROM emp
GROUP BY department_id
HAVING COUNT(*) > 1;

select count(*), DEPARTMENT_ID FROM EMP group by DEPARTMENT_ID having count(*) >1;

select count(*) , department_id from emp
group by department_id having count(*)>5;

-- Q 14)Display employees with salary above the average salary
select  emp_name, salary from emp where salary > (select avg(salary) from emp);

select emp_name , salary from emp where salary > (select avg(salary) from emp);


-- Q15) List employees who joined after the employee "Bob".
select * from emp;

SELECT * 
FROM emp 
WHERE hire_date > (
  SELECT hire_date 
  FROM emp 
  WHERE emp_name LIKE 'Bob%'
);

select * from emp where hire_date>(select hire_date from emp where lower(emp_name) like"bob%");

-- Q16) Show the second highest salary using subquery.
SELECT MAX(salary) 
FROM emp 
WHERE salary < (
  SELECT MAX(salary) 
  FROM emp
);

SELECT  salary
FROM emp
ORDER BY salary DESC
LIMIT 1 OFFSET 1;

-- top 3rd
SELECT MAX(salary)
FROM emp
WHERE salary < (
  SELECT MAX(salary)
  FROM emp
  WHERE salary < (
    SELECT MAX(salary)
    FROM emp
  )
);

select  distinct salary from emp where salary<(select max(salary) from emp) order by salary desc limit 1;


-- Q17) Display employees who are in departments managed by "..."

SELECT *
FROM emp
WHERE department_id IN (
  SELECT department_id
  FROM dept
  WHERE manager_id = (
    SELECT emp_id
    FROM emp
    WHERE emp_name = 'Diana Prince'
  )
);

select * from emp 
where department_id IN (select department_id from dept 
											where manager_id = (select emp_id from emp where emp_name = "Diana Prince"));


-- Departmet same as Diana prince
select * from emp where department_id=(select department_id from emp where emp_name="Diana Prince");

-- Q18) Find employees who do not belong to the Sales department.
select e.emp_name , d.department_name
from emp e
join  dept d on e.department_id = d.department_id
where d.department_name !="Sales";

SELECT * FROM dept WHERE department_name = 'Sales';



-- Q19) Join Employees with Departments, even if no department matches (LEFT JOIN).

select e.emp_name , d.department_name
from emp e
left join dept d on e.department_id = d.department_id;


 -- Q20) Display departments that have no employees
select department_id ,department_name from dept where department_id not in (select department_id from emp);

 -- Q21) Find the most recently joined employee in each department
 select max(hire_date),department_id from emp group by department_id;
 
 -- Q22) List employees whose salary is higher than their department average.
select * from emp e1 where salary>(select avg(salary) from emp e2 where e1.department_id=e2.department_id);

SELECT e.emp_id, e.emp_name, e.salary, e.department_id
FROM emp e
JOIN (
  SELECT department_id, AVG(salary) AS avg_salary
  FROM emp
  GROUP BY department_id
) dept_avg ON e.department_id = dept_avg.department_id
WHERE e.salary > dept_avg.avg_salary;


SELECT emp_name, department_id, hire_date
FROM emp
WHERE (department_id, hire_date) IN (
  SELECT department_id, MAX(hire_date)
  FROM emp
  GROUP BY department_id
);

 -- Q23)Find employees who have the same salary as someone else.
 
 select emp_name ,salary from emp  where salary in (select salary from emp group by salary having count(*)>1 );
 
  select * from emp  where salary in (select salary from emp group by salary having count(*)>1 );
 
 
select * from emp 
where left(emp_name,1) between "A" and "P"
and phone like '%2_'
and left(job_title,1) between "A" and "S";

SELECT * 
FROM emp 
WHERE 
  LOWER(LEFT(emp_name, 1)) BETWEEN 'a' AND 'p'
  AND phone LIKE '%1'
  AND LOWER(LEFT(job_title, 1)) BETWEEN 'a' AND 's';



select e.emp_name ,e.department_id ,d.department_name,e.salary
from emp e 
inner join dept d on e.department_id=d.department_id;


select e.* , d.*
from emp e
right join dept d on e.department_id=d.department_id;

SELECT *
FROM (
  SELECT 
    emp_id,
    emp_name,
    department_id,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rn
  FROM emp
) AS ranked
WHERE rn <= 2;


select e.* , d.*
from emp e
left join dept d on e.department_id=d.department_id;

 
select * from emp;

select * from dept;

select max(salary) from emp where salary < (select max(salary) from emp where salary < (select max(salary) from emp) );

select * from emp where salary = ( select salary from emp order by salary desc limit 1 offset 2);

select max(salary) from emp;
select salary from emp order by salary desc;

select * from emp e1 where salary>(select avg(salary) from emp e2 where e1.department_id=e2.department_id);