-- Table: e_users
CREATE TABLE e_users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: products
CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: orders
CREATE TABLE orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES e_users(user_id)
);


-- employee 

CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  emp_name VARCHAR(100),
  manager_id INT,  -- References emp_id in the same table
  department VARCHAR(50)
);

