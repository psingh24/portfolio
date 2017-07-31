

<?php 
if(isset($_POST['email'])){
    $email_to = "ps591990@gmail.com";
    $email_subject = "Form submission";
    $email_from = "Prabhdeep Singh";


    //error
    function died($error) {
        echo "We are sorry but there were error(s) found with the form you submitted";
        echo "These errors appear below.<br></br>";
        echo $error. "<br></br>";
        echo "Please go back and fix these errors";
        die();

    }

    if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message'])) {
        died("Incomplete form");
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $error_message = '';
    $email_exp = "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/";

    if(!preg_match($email_exp, $email)) {
        $error_message .= "The email address you entered is not valid.";
    }
    $string_exp = "/^[A-Za-z.'-]+$/";
    if(!preg_match($string_exp, $name)) {
        $error_message .= "Name you entered is not valid";
    }
    if(strlen($error_message) > 0) {
        died($error_message);
    }
    $email_message = "Form Details below. \n\n";

    $headers = "Form: " .$email_Form . "\r\n". 'Reply-To: ' . $email. "\r\n" . 
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- Sucess message -->

Thank you for contacting me. We will be in touch shortly. <br/>
Please click <a href="index.html"> here </a> to go back to the home page.

<?php

?>



    $to = "ps591990@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>