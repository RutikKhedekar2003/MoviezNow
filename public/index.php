<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "movienow";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userid = $_POST['userid'];
    $password = $_POST['password'];

    // Prepare and execute SQL query
    $stmt = $conn->prepare("SELECT id, name, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $userid);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $name, $hashed_password);

    if ($stmt->num_rows > 0) {
        $stmt->fetch();
        // Verify the password
        if (password_verify($password, $hashed_password)) {
            // Password is correct, start a new session
            $_SESSION['id'] = $id;
            $_SESSION['name'] = $name;
            // Redirect to home page
            header("Location: index.php");
            exit();
        } else {
            // Display an error message if password is invalid
            echo "Invalid password.";
        }
    } else {
        // Display an error message if email doesn't exist
        echo "No account found with that email.";
    }

    $stmt->close();
}

$conn->close();
?>