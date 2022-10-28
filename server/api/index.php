<?php

include('../index.php');
include('../src/controllers/search.php');
include('../src/controllers/login.php');
include('../src/controllers/authorization.php');
include('../src/utils/db.php');

use Src\Search;
use Src\Login;
use Src\Database;
use Src\Authorization;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Allow-Headers: *");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

$requestMethod = $_SERVER["REQUEST_METHOD"];
$databaseInstance = new Database();

if ($uri[2] == 'search') {
  $searchController = new Search();
  $searchController -> get();
}

if ($uri[2] == 'login') {
  $loginController = new Login();
  $loginController -> init($databaseInstance);
}
