# spaceX

### Pre-requisite
Node Version: `16.15.0`

### Installation
Server: 
- `cd server`
- Add the .env file at root. .env.example contains the sample format
- `php composer.phar update` at root of server. This will install all dependencies listed
Client:
- `cd client`
- `npm i` to install all dependencies

### Setup
Database:
- Install mysql server
- Inside mysql terminal:
- Create database: `CREATE DATABASE spacex;`
- Use Database: `USE spacex;`
- Run the query: `CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(45) DEFAULT NULL,
    password varchar(255) DEFAULT NULL,
    PRIMARY KEY (id)
  );`

### Run - Dev Mode
Server:
- `cd server`
- `php -S localhost:8080` to run the local server
Client: 
- `cd client`
- `npm run dev`

### Video
[Video URL](https://drive.google.com/file/d/1ge2bh43kWiUOEA1_nYNvEj7Vumspf_tc/view?usp=sharing)
