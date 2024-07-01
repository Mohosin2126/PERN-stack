-- using for note purpose

CREATE DATABASE bookDB

CREATE TABLE book(
    id CHAR (20) PRIMARY KEY ,
    name VARCHAR(20),
    description VARCHAR(255)
);

INSERT INTO book(id,name,description)
VALUES
    (102,x,beautiful book)