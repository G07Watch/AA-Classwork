EXPLAIN
ANALYZE
SELECT
 cats.name
FROM
 cats
WHERE
 name = 'Timmy';


EXPLAIN
SELECT
 toys.name
FROM
 toys
JOIN 
cattoys  
ON 
cattoys.toy_id = toys.id 
JOIN 
cats 
ON
 cats.id = cattoys.cat_id
WHERE 
cats.id = 4;


EXPLAIN
SELECT
    cats.name, toys.name
FROM
 toys
JOIN 
cattoys  
ON 
cattoys.toy_id = toys.id 
JOIN 
cats 
ON
 cats.id = cattoys.cat_id
WHERE
 cats.color = 'black' OR toys.color = 'black';


EXPLAIN
SELECT
    cats.name, toys.name
FROM
 toys
JOIN 
cattoys  
ON 
cattoys.toy_id = toys.id 
JOIN 
cats 
ON
 cats.id = cattoys.cat_id
WHERE
 cats.breed = 'Turkish_Van';



explain
update cats set name = 'Timmy' where id = 1;


EXPLAIN 
DELETE FROM 
toys
WHERE color = 'green'; 	


EXPLAIN
INSERT INTO cattoys
    (cat_id,toy_id)

VALUES
    (5, 3);