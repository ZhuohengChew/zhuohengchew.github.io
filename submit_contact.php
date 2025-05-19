<?php
// Database credentials
$host = "sqlXXX.infinityfree.com"; // Replace with your actual InfinityFree MySQL host
$user = "epiz_12345678";           // Replace with your InfinityFree username
$password = "your_password";       // Replace with your InfinityFree database password
$database = "epiz_12345678_portfolio"; // Replace with your database name

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
