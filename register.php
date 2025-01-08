<?php
// Database configuration
$servername = "localhost";
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "hrm_system"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$mobile_number = $_POST['mobile_number'];

// Validate and hash password
if (!empty($password)) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT); // Hash the password securely
} else {
    die("Password is required.");
}

// SQL query to insert data
$sql = "INSERT INTO registration_table (username, email, password, mobile_number) 
        VALUES ('$username', '$email', '$hashed_password', '$mobile_number')";

// Execute the query
if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
