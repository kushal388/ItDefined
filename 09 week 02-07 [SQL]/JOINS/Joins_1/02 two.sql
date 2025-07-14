INSERT INTO e_users (user_name, email, password) VALUES
('Mohammad Ali', 'mohammad@example.com', 'password567'),
('Srikanth', 'srikanth@example.com', 'password45645'),
('John', 'john@example.com', 'password45645');

select * from e_users;

INSERT INTO products (product_name, description, price, stock) VALUES
('Laptop', 'A high performance laptop', 999.99, 10),
('Smartphone', 'A latest model smartphone', 699.99, 20),
('Headphones', 'Noise cancelling headphones', 199.99, 15);

select * from products;

alter table orders add column product_id int ;
describe orders;
alter table orders drop total;

INSERT INTO orders (user_id, product_id) VALUES
(1, 6),
(3, 5);


INSERT INTO orders (user_id, product_id) VALUES
(6, 3);

Alter table orders drop constraint orders_ibfk_1;


INSERT INTO orders (user_id, product_id) VALUES
(6, 3);

describe orders;

select * from orders;

delete from orders  where order_id = 5; 


INSERT INTO employees (emp_id, emp_name, manager_id, department) VALUES
(1, 'Alice',   NULL,    'HR'),        -- Top-level manager (no one manages her)
(2, 'Bob',     1,       'HR'),        -- Reports to Alice
(3, 'Charlie', 1,       'HR'),        -- Reports to Alice
(4, 'David',   2,       'HR'),        -- Reports to Bob
(5, 'Eva',     NULL,    'IT'),        -- Head of IT (no manager)
(6, 'Frank',   5,       'IT'),        -- Reports to Eva
(7, 'Grace',   5,       'IT'),        -- Reports to Eva
(8, 'Hannah',  6,       'IT');        -- Reports to Frank

select * from employees;

