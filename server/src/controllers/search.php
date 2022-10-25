<?php

namespace Src;

class Search {
  public function get() {
    $API = 'https://api.spacexdata.com/v4/capsules/query';
    // Get Request data
    $data = json_decode(file_get_contents("php://input", true));

    if (!is_null($data)) {
      $page = $data -> page;
      $request_query = $data -> query;

      /*
        Note: Filtering out all empty key-value pairs. SpaceX API gives incorrect results if 
        empty string values are passed. Ex: type: ""
      */
      $query_arr = (array) $request_query;
      $query = array_filter($query_arr, fn($value) => !is_null($value) && $value !== '');
      
      $ch = curl_init();
    
      curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Accept: application/json'
      ));
      curl_setopt($ch, CURLOPT_URL, $API);
      curl_setopt($ch, CURLOPT_POST, 1);
      curl_setopt($ch, CURLOPT_POSTFIELDS, 
            http_build_query(array('query' => $query, 'options' => array('pagination' => 'true', 'page' => $page))));
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      
      $server_output = curl_exec($ch);
    
      curl_close ($ch);

      if (!is_null($server_output)) {
        $decoded_server_output = json_decode($server_output);
        $results = $decoded_server_output -> docs;
        $formattedResults = array();

        // Formatting results for efficient client usage
        foreach($results as $item) {
          $item_id = $item -> id;
          $formattedResults[$item_id] = $item;
        }

        $total_pages = $decoded_server_output -> totalPages;
        $response = array('results' => $formattedResults, 'metaData' => array('totalPages' => $total_pages));

        echo json_encode($response);
      } else {
        http_response_code(500);
        echo "Internal Server Error";
      }
    }
  }
}
