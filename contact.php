<?php
$action=$_REQUEST['action'];
if ($action=="")    /* display the contact form */
    {
    ?>
    <form  action="" method="POST" enctype="multipart/form-data">
    <label for="fname">Name</label>
                     <input type="text" id="fname" name="name" placeholder="Your name..">

                                        <label for="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Your email..">

                                        <label for="subject">Message</label>
                                        <textarea id="subject" name="message" placeholder="Write something.." style="height:200px"></textarea>

                                        <input type="submit" value="Submit">
    
    </form>
    <?php
    } 
else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
        }
    else{        
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
        // mail("youremail@yoursite.com", $subject, $message, $from);
        echo "Email sent!";
        }
    }  
?>