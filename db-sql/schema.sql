CREATE DATABASE they_got;

USE they_got;

CREATE TABLE overview (
  _id: INT PRIMARY KEY,
  id: INT,
  name: VARCHAR,
  tagline: VARCHAR,
  type: VARCHAR,
  vicinity: VARCHAR,
  priceLevel: VARCHAR,
  zagatFood: INT,
  zagatDecor: INT,
  zagatService: INT,
  longDescription: VARCHAR
);



LOAD DATA LOCAL INFILE "../fake-data/ten-milli.csv"
INTO TABLE overview
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
ignore 1 rows;