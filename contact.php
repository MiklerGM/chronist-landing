<?php
$date = date('Y-m-d H:i:s');
$email = '';
$email_clean = 'noreply@chronist.ru'; // for reply
$name = '';
$text = '';
$title = 'Обращение с сайта';

if(isset($_POST['demo'])){
  $title = 'Форма информирования об ошибке';
}
if(isset($_POST['email'])){
  $email = $_POST['email'];
  $email_clean = filter_var($email, FILTER_VALIDATE_EMAIL);
}
if(isset($_POST['name'])){
  $name = $_POST['name'];
}
if(isset($_POST['text'])){
  $text = $_POST['text'];
} else {
  echo "{'message':'Message is empty'}";
  http_response_code(400);
  exit();
}


require 'PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';

//$mail->SMTPDebug = 3; // Enable verbose debug output
$user = 'contact@chronist.ru';
$secret = '321C0#track';
$to = 'idea@chronist.ru';

$mail->isSMTP(); // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.com'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = $user; // SMTP username
$mail->Password = $secret; // SMTP password
$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to

$mail->setFrom($user, 'Форма обратной связи');
$mail->addAddress($to);
$mail->addReplyTo($email_clean, $name);

$mail->isHTML(true); // Set email format to HTML

$mail->Subject = $title;
$mail->Body = "Дата поступления обращения: <b>$date</b><br />От: $name $email<br /><br />$text<br />";

if(!$mail->send()) {
#    echo 'Message could not be sent.';
#    echo 'Mailer Error: ' . $mail->ErrorInfo;
  echo "{\"email\":\"invalid\", \"message\": \"$mail->ErrorInfo\"}";
  http_response_code(400);

} else {
  echo '{"email":"ok"}';
  http_response_code(200);
  echo 'Message has been sent';
}


