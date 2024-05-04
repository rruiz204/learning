-- Create Tables
CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  order_date DATE NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Insert Data
INSERT INTO customers (name, email) VALUES
  ('Juan Pérez', 'juan.perez@example.com'),
  ('María González', 'maria.gonzalez@example.com'),
  ('Carlos Sánchez', 'carlos.sanchez@example.com');

INSERT INTO orders (customer_id, order_date, amount) VALUES
  (1, '2024-04-15'), (2, '2024-04-18'),
  (1, '2024-04-20'), (3, '2024-04-22');

-- Inner Join
SELECT 
  o.id,
  o.order_date,
  c.name as customer_name,
  c.email as customer_email
FROM
  orders as o
INNER JOIN customers as c on o.customer_id = c.id