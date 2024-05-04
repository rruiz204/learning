-- Create Tables
CREATE TABLE customers (
  customer_id INTEGER PRIMARY KEY,
  customer_name TEXT,
  customer_email TEXT
);

CREATE TABLE orders (
  order_id INTEGER PRIMARY KEY,
  customer_id INTEGER,
  order_date TEXT,
  order_total REAL,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);


-- Insert Data
INSERT INTO customers (customer_id, customer_name, customer_email) VALUES
  (1, 'John Doe', 'john.doe@example.com'),
  (2, 'Mary Smith', 'mary.smith@example.com'),
  (3, 'Peter Johnson', 'peter.johnson@example.com');

INSERT INTO orders (order_id, customer_id, order_date, order_total) VALUES
  (1, 1, '2024-05-01', 150.00),
  (2, 2, '2024-05-02', 200.00),
  (3, 1, '2024-05-03', 300.00);

-- Left Join
SELECT
  customers.customer_id,
  customers.customer_name,
  customers.customer_email,
  orders.order_id,
  orders.order_date,
  orders.order_total
FROM
  customers
LEFT JOIN
  orders ON customers.customer_id = orders.customer_id;