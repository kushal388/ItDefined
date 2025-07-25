select * from emp;

-- 1) 
select * from emp;
select * from dept;
select emp_name from emp;
select * from emp where salary > 60000;

-- select distint department with departname
select distinct e.department_id, d.department_name 
from emp e 
join dept d on e.department_id = d.department_id;

-- Q5)Find employees from the "IT" department
select e.emp_name , d.department_name, e.job_title
from emp e
join dept d on e.department_id = d.department_id
where department_name="Information Technology";	

-- select employe form Hyman resources dept

select e.emp_name , d.department_name, e.job_title
from emp e
join dept d on e.department_id = d.department_id
where department_name="Human Resources";

-- Q6 )Sort employees by Salary in descending order
select emp_name from emp order by salary desc;

-- Q7) Count how many employees are in the "HR" department

select count(*) as HR_DEPT
from emp e
join dept d on e.department_id = d.department_id
where department_name = "Human Resources";

-- Q8)Get the maximum salary from the table
select max(Salary) from emp;

-- Q9)Get the average salary for all employees
select emp_name , salary
from emp  where salary > (select avg(salary) from emp);

-- Q10) Find employees who joined before 2020.
select * from emp where hire_date < '2020-01-01';

-- Q11) Display employees whose names start with 'A'
select * from emp where emp_name like 'A%';

-- Q12) Join Employees and Departments to show Name, Salary, Dept_Name, and Manager 
select e.emp_name , e.salary , d.department_name , e.manager_id 
from emp e
left join dept d on e.department_id = d.department_id;

-- to know emp and manager
select e.emp_name as emp_name , m.emp_name as manager_name
from emp e
  join emp m on e.manager_id = m.emp_id;
 
 
-- Join Employees and Departments to show Name, Salary, Dept_Name, and Manager name [[use left join use leftjoin if manager id is null wont show]
select e.emp_name , e.salary, d.department_name , m.emp_name as mangers_name
from emp e
join dept d on e.department_id = d.department_id
left join emp m on e.manager_id = m.emp_id;


-- Q13) Show department-wise total salary

SELECT e.department_id, SUM(e.salary) AS total_salary,d.department_name
FROM emp e
join dept d on e.department_id =d.department_id
GROUP BY e.department_id;

-- In SQL, all non-aggregated columns in the SELECT clause must appear in the GROUP BY clause(both works)
SELECT 
  e.department_id, 
  d.department_name,
  SUM(e.salary) AS total_salary
FROM emp e
JOIN dept d ON e.department_id = d.department_id
GROUP BY e.department_id, d.department_name;



-- to department distinct
SELECT department_id, sum(salary) AS total_salary
FROM emp
GROUP BY department_id;


-- Q14) Get the highest salary in each department
select e.department_id , max(e.salary) as highest_salary , d.department_name
from emp e
join dept d on e.department_id = d.department_id
group by e.department_id ,d.department_name;


-- highest salary (max)
SELECT department_id, max(salary) AS total_salary
FROM emp
GROUP BY department_id;

-- Q15) Find departments with more than one employee. (modify to > 5)
select count(*)  AS employee_count  , e.department_id , d.department_name
from emp e
join dept d on e.department_id= d.department_id
group by department_id ,  d.department_name
having count(*)>5;


-- depaertmetn >5
select count(*), department_id 
from emp  
group by department_id 
having count(*)>5;

-- Q16) Display employees with salary above the average salary.

select * 
from emp 
where salary >( select avg(salary) from emp );

-- Q17) List employees who joined after the employee "Bob"
select * 
from emp where hire_date > ( select hire_date from emp where emp_name like "Bob%");

-- Q18)  Show the second highest salary using subquery

select max(salary) 
from emp 
where salary < ( select max(salary) 
								from emp);

-- to show the full column
select * from emp
where salary = (select max(salary) from emp
			where salary < (select max(salary) from emp));

-- 3rd max
select max(salary)
from emp 
where salary < (select max(salary) 
						from emp where 
									salary < (	select max(salary)	from emp));

-- another method
select salary from emp
order by salary desc
limit 1 offset 1;

-- all column
select * from emp
where salary = ( select salary from emp
				order by salary desc
                limit 1 offset 2);

select salary from emp order by salary desc;

-- Q18) Display employees who are in departments managed by "Diana Prince"

select e.* , m.emp_name as Managername 
from emp e
join dept d on e.department_id = d.department_id
 join emp m on e.manager_id = m.emp_id
where  m.emp_name = 'Diana Prince';


select * from emp where  department_id = (select department_id from emp where emp_name = 'Diana Prince');

select e.* , m.emp_name as Managername 
from emp e
join dept d on e.department_id = d.department_id
left join emp m on e.manager_id = m.emp_id;

select e.emp_name as emp_name , m.emp_name as manager_name
from emp e
 join emp m on e.manager_id = m.emp_id;
 
 -- Q19)Find employees who do not belong to the Sales department. // cahnged to Human Resources

select e.*, d.department_name
from emp e
join dept d on e.department_id = d.department_id
where d.department_name !="Human Resources";

select * from dept;

-- Q20)Join Employees with Departments, even if no department matches (LEFT JOIN).

select e.*, d.*
from emp e
 left  join dept d on e.department_id = d.department_id;
 
 -- Q21) Display departments that have no employees

 SELECT d.* , e.*
FROM dept d
left  JOIN emp e ON d.department_id = e.department_id
WHERE e.emp_id IS NULL;

select department_id ,department_name from dept where department_id not in (select department_id from emp);

-- Q22)Find the most recently joined employee in each department

-- corerelated 
 SELECT *
FROM emp e
WHERE hire_date = (
    SELECT MAX(hire_date)
    FROM emp f
    WHERE f.department_id = e.department_id
);

 select max(hire_date),department_id from emp group by department_id;
 
 -- by joins
SELECT e.*
FROM emp e
JOIN (
    SELECT department_id, MAX(hire_date) AS latest_join_date
    FROM emp
    GROUP BY department_id
) latest ON e.department_id = latest.department_id
        AND e.hire_date = latest.latest_join_date;


-- Q23)List employees whose salary is higher than their department average
-- it compares with all emp 
select * from emp where salary> (select avg(salary) from emp);

-- it will comapre with dept avg
 SELECT * 
FROM emp e1
WHERE salary > (
  SELECT AVG(salary) 
  FROM emp e2 
  WHERE e2.department_id = e1.department_id
);


-- to avg salry along with departmane
SELECT e.department_id, avg(salary) AS total_salary, d.department_name
FROM emp e
join  dept d on e.department_id = d.department_id
GROUP BY department_id;

-- avg salry
SELECT department_id, sum(salary) AS total_salary
FROM emp
GROUP BY department_id,e.emp_name;

-- join version
SELECT e.*
FROM emp e
JOIN (
  SELECT department_id, AVG(salary) AS avg_salary
  FROM emp
  GROUP BY department_id
) AS avg_dept
  ON e.department_id = avg_dept.department_id
WHERE e.salary > avg_dept.avg_salary;


-- Q24) Find employees who have the same salary as someone else.

select * from emp where salary in( select salary from emp group by salary having count(*)>1);

 select emp_name ,salary from emp  where salary in (select salary from emp group by salary having count(*)>1 );
 
select * from emp where salary in (select salary from emp group by salary having count(*)>1);

-- inner query finds more than once 
select salary from emp group by salary having count(*)>1 ;

-- using joins
select e1.*
from emp e1
join emp e2 on e1.salary= e2.salary and e1.emp_id !=e2.emp_id;

 -- Q25) Top 3 highest salry per department
 
 select emp_id,emp_name,
      department_id,salary,
      ROW_NUMBER() over(partition by department_id order by salary desc) as salry_rank
 from emp ;
 
 select * 
 from( select emp_id, emp_name,
				department_id , salary,
                ROW_NUMBER() over(partition  by department_id order by salary desc) as salary_rank
		from emp
 )as reanked_emp
 where salary_rank <=3;

 
 
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
WHERE rn <= 3;
 
 
 -- Q)
 select * from emp 
 where left(emp_name,1) between "A" and"K";
 

 
 SELECT * FROM emp 
WHERE RIGHT(phone, 2) LIKE '2_';

 
 
 select * from emp 
where left(emp_name,1) between "A" and "P"
and phone like '%2_'
and left(job_title,1) between "A" and "S";