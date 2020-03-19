<?php
if(isset($_POST['name']) && isset($_POST['e-mail']) && isset($_POST['course'])) {
  $name = $_POST['name'];
  $email = $_POST['e-mail'];
  $course = $_POST['course'];
  $to = 'jolly.cody@gmail.com';
  $subject = 'New Booking';
  $body = '<html>
            <body>
              <h2>Booking - Cuan Beo Course</h2>
              <hr>
              <p>Name: '.$name.'</p>
              <p>E-Mail: '.$email.'</p>
              <p>Course: '.$course.'</p>
            </body>
          </html>';
  $headers = "From: {$name}<{$email}>\r\n";
  $headers .= "Reply-To: ".$email."\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8";
  $send = mail($to, $subject, $body, $headers);
  if ($send) {
    header("Location: /booking_confirmation.html");
  } else {
    echo 'error';
  }
}
?>