DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id serial primary key,
    name text not null,
    birthday date,
    salary integer not null
)



