<?php

namespace Src;

use Firebase\JWT\JWT;

class Login {
	public function init($databaseInstance) {
		$dbConn = $databaseInstance -> getDbConn();

		if ($_SERVER['REQUEST_METHOD'] === 'POST') {

			$data = json_decode(file_get_contents("php://input", true));

			if (!is_null($data)) {
				$sql = "SELECT * FROM user WHERE username = '" . mysqli_real_escape_string($dbConn, $data->username) . "' AND password = '" . mysqli_real_escape_string($dbConn, $data->password) . "' LIMIT 1";
				$result = $databaseInstance -> dbQuery($sql);
				
				if($databaseInstance -> dbNumRows($result) < 1) {
					echo json_encode(array('error' => 'Invalid User'));
				} else {
					$row = $databaseInstance -> dbFetchAssoc($result);
					$username = $row['username'];
					$payload = array('username' => $username, 'exp' => (time() + 600));
					$jwt = JWT::encode($payload, $_ENV['JWT_KEY'], 'HS256');
					
					echo json_encode(array('token' => $jwt));
				}
			}
		}
	}
}