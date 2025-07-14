select * 
from orders
	inner join e_users 
        on e_users.user_id = orders.user_id ;
	
        
select * 
from orders
	inner join e_users 
        on e_users.user_id = orders.user_id 
	inner join products
		on products.product_id = orders.order_id;

-- inner join
select orders.order_id ,
	  e_users.user_name,
      e_users.email,
      products.product_name,
      products.price
from orders
	inner join e_users 
        on e_users.user_id = orders.user_id 
	inner join products
		on products.product_id = orders.order_id;
        
select  orders.order_id ,
		orders.product_id,
		e_users.user_name,
		e_users.email
        
from orders
	inner join e_users 
        on e_users.user_id = orders.user_id ;
      
-- left join

select  orders.order_id ,
		orders.product_id,
		e_users.user_name,
		e_users.email
        
from orders
	left  join e_users 
        on e_users.user_id = orders.user_id ;
        
-- right join

select  orders.order_id ,
		orders.product_id,
		e_users.user_name,
		e_users.email
        
from orders
	Right  join e_users 
        on e_users.user_id = orders.user_id ;


-- full join (with union)

select  orders.order_id ,
		orders.product_id,
		e_users.user_name,
		e_users.email
        
from orders
	left  join e_users 
        on e_users.user_id = orders.user_id 
        
union 

select  orders.order_id ,
		orders.product_id,
		e_users.user_name,
		e_users.email
        
from orders
	Right  join e_users 
        on e_users.user_id = orders.user_id ;
        
        
        
-- cross join (no wherre condition)

select  orders.order_id ,
		orders.product_id,
        orders.user_id,
		e_users.user_name,
		e_users.email
        
from orders
	CROSS join e_users ;
    
    
-- self join


select 
	e.emp_name as Employe_name,
    m.emp_name as Manager
from employees e
	left join employees m
		on e.manager_id = m.emp_id;

select 
	e.emp_name as Employe_name,
    m.emp_name as Manager
from employees e
	Right join employees m
		on e.manager_id = m.emp_id;
select 
	e.emp_name as Employe_name,
    m.emp_name as Manager
from employees e
	join employees m
		on e.manager_id = m.emp_id;
        