-- DROP DATABASE IF EXISTS
DROP DATABASE IF EXISTS dogs;

-- CREATE DATABASE IF NOT EXISTS
CREATE DATABASE IF NOT EXISTS dogs;

-- USE
USE dogs;

-- CREATE TABLE IF NOT EXISTS  (
CREATE TABLE breeds (
  id INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  breed varchar(20) NOT NULL,
  large TINYINT NOT NULL
);

-- );

INSERT INTO breeds (breed, large) VALUES ('collie', 1);
INSERT INTO breeds (breed, large) VALUES ('golden retriever', 1);
INSERT INTO breeds (breed, large) VALUES ('pomeranian', 0);

