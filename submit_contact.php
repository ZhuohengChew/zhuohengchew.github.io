<?php
// Database credentials
$host = "sql300.infinityfree.com"; 
$user = "if0_39024900";           
$password = "zhuoheng041019";       
$database = "if0_39024900_portfolio"; 
// Create connection
$conn = new mysqli($host, $user, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Prepare and execute SQL
$stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
  echo "Success! Your message has been submitted.";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
