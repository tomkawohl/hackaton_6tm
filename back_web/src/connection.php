<?php

//USE DOTENV
$dbname = "db_web_h";
$user = "root";
$password = "password";
$host = "localhost";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected succesfully";

$conn->close();
?>