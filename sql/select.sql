-- General Select
SELECT * FROM some_table;

-- Specific Select
SELECT column FROM some_table;

-- Distinct Clause
SELECT DISTINCT column FROM some_table;

-- Conditions
SELECT * FROM some_table WHERE column_a = some_data;
SELECT * FROM some_table WHERE column_a BETWEEN some_number AND some_number

-- Order By Clause
SELECT * FROM some_table ORDER BY some_column ASC;
SELECT * FROM some_table ORDER BY some_column DESC;

-- Like Clause
SELECT * FROM some_table WHERE column LIKE "%pattern%";

-- In Operator
SELECT * FROM some_table WHERE column IN ("option1", "option2", "option3");
SELECT * FROM some_table WHERE column NOT IN ("option1", "option2", "option3");