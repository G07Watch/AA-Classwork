CREATE TABLE cats (
    id      SERIAL PRIMARY KEY,

    name    VARCHAR(100) NOT NULL, 

    color   VARCHAR(100) NOT NULL,

    breed   VARCHAR(100) NOT NULL

);

CREATE TABLE toys (
    id      SERIAL PRIMARY KEY,

    price   INT,

    color   VARCHAR(100) NOT NULL,

    name    VARCHAR(100) NOT NULL
);

CREATE TABLE cattoys (

    id      SERIAL PRIMARY KEY,

    cat_id  INT  REFERENCES cats(id),

    toy_id  INT  REFERENCES toys(id)
);

INSERT INTO cats(name, color, breed)

VALUES
    ('Tom', 'black', 'Maine_Coon'),
    ('Jenna', 'white', 'Persian'),
    ('Gabby', 'orange', 'Turkish_Van'),
    ('Drake','blue_grey','Russian_Blue'),
    ('Abba','brown','Siamese');

INSERT INTO toys(price, color, name)

VALUES
    (5,'grey','rubber_mouse'),
    (1,'blue','yarn'),
    (2,'black','feather'),
    (7,'red','laser_pointer'),
    (10,'kaleidoscope','meowster_1000');

INSERT INTO cattoys(cat_id,toy_id)

VALUES
    (1,2),
    (2,1),
    (3,5),
    (4,3),
    (5,4);