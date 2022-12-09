INSERT INTO person (id, admin, email, first_name, last_name, password)
SELECT 1, true, 'First name', 'Last name', 'address@email.com', 'pass'
WHERE NOT EXISTS (SELECT id FROM person WHERE id = 1);