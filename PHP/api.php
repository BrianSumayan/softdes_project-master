<?php

header('Access-Control-Allow-Origin: *'); // Allow cross-origin requests
header('Content-Type: application/json'); // Set the response type to JSON

require_once './api.php';

if (isset($_FILES['file'])){
    $file = $_FILES['file'];
    $fileName = $file['name']; 
}

$data = [
    'message' => 'Hello from PHP',
    'data' => [1, 2, 3, 4, 5]
];



echo json_encode($data); // Send data as JSON
?>
