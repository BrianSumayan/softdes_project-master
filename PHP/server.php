<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
header('Content-Type: application/json'); // Specify that the output is JSON

$response = ['status' => 'error', 'message' => 'No file uploaded.'];

if (isset($_FILES['file'])) {
    $file = $_FILES['file'];
    $fileName = $file['name'];  // Gets the name of the uploaded file

    switch ($fileName) {
        case 'Alternator.mp3':
            $response = ['File Recieved: ' => 'Alternator'];
            break;
        case 'WaterPump.mp3':
            $response = ['File Recieved: ' => 'WaterPump'];
            break;
        case 'TensionerBearing.mp3':
            $response = ['File Recieved: ' => 'TensionerBearing'];
            break;
        case 'Belt.mp3':
            $response = ['File Recieved: ' => 'Belt'];
            break;
        case 'RadiatorFanMotor.mp3':
            $response = ['File Recieved: ' => 'RadiatorFanMotor'];
            break;
        default:
            $response = ['status' => 'error', 'message' => 'Invalid File.'];
            break;
    }
}

echo json_encode($response);
?>
