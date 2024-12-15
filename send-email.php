<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set email parameters
    $to = "your-email@example.com";  // Replace with your email address
    $subject = "New Contact Form Submission from $name";
    $body = "You have received a new message from the contact form:\n\nName: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was a problem sending the message.";
    }
} else {
    echo "Invalid request method.";
}
?>
