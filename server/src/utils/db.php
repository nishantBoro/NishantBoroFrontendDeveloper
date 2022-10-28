<?php
	
namespace Src;

class Database {
	private $dbConn = null;

	public function __construct()
  {
    $host = $_ENV['DB_HOST'];
		$db   = $_ENV['DB_DATABASE'];
		$user = $_ENV['DB_USERNAME'];
		$pass = $_ENV['DB_PASSWORD'];

		$this -> dbConn = mysqli_connect($host, $user, $pass, $db);
  }

	public function getDbConn() {
		return $this -> dbConn;
	}

	public function dbQuery($sql) {
		$result = mysqli_query($this -> dbConn, $sql) or die(mysqli_error($this -> dbConn));
		return $result;
	}

	public function dbFetchAssoc($result) {
		return mysqli_fetch_assoc($result);
	}
	
	public function dbNumRows($result) {
		return mysqli_num_rows($result);
	}
	
	public function closeConn() {
		mysqli_close($this -> dbConn);
	}
}
