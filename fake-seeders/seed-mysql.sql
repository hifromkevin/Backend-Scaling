CREATE DATABASE they_got;

USE they_got;

CREATE TABLE overview (
  id: INT,
  name: VARCHAR (255),
  tagline: VARCHAR (255),
  type: VARCHAR (255),
  vicinity: VARCHAR (255),
  priceLevel: VARCHAR (2),
  zagatFood: INT (2),
  zagatDecor: INT (2),
  zagatService: INT (2),
  longDescription: VARCHAR (255),
  PRIMARY KEY (id)
);

LOAD DATA LOCAL INFILE "./fake-data/ten-milli.csv"
INTO TABLE overview
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
ignore 1 rows;


/*
Command line: 

CREATE TABLE overview (
  id INT,
  name VARCHAR (255),
  tagline VARCHAR (255),
  type VARCHAR (255),
  vicinity VARCHAR (255),
  priceLevel VARCHAR (2),
  zagatFood INT (2),
  zagatDecor INT (2),
  zagatService INT (2),
  longDescription VARCHAR (255),
  PRIMARY KEY (id)
);
*/