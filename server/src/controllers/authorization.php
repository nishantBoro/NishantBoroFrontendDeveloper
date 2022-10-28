<?php

namespace Src;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Authorization {
	public function validate($token) {
		try {
			$decoded = JWT::decode($token, new Key($_ENV['JWT_KEY'], 'HS256'));
		} catch (\Exception $e) {
			http_response_code(401);
			echo "Not authorized";
		}
	}
}