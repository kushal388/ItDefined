CREATE DATABASE userAuthSimple;
USE userAuthSimple;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  profileInfo TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password, email, profileInfo)
VALUES
('john_doe', '123456', 'john@example.com', 'Loves coding'),
('jane_doe', 'abcdef', 'jane@example.com', 'UI Designer');

select * from users;