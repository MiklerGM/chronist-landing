<?php
$date = date('Y-m-d H:i:s');
$time_ts = time();
$max_diff = 120;

$pi = 314159;
$p = 0;

$email = '';
$email_clean = 'noreply@chronist.ru'; // for reply
$name = '';
$text = '';
$title = 'Обращение с сайта';

function validationError(msg) {
  echo "{'error': '" + msg + " validation error'}";
  http_response_code(400);
  exit();
}

if(isset($_POST['p'])) {
  $p = $_POST['p'] / pi;
  $time_diff = $time_ts - $p;
  if ( $time_diff > $max_diff || $time_diff < $max_diff * -1 ){
    // clock on the sender is not in sync
    // or this is an old request
    validationError('p');
  }
} else {
  validationError('p');
}

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
  validationError('text');
}
if(isset($_POST['m'])) {
  $m = $_POST['m'] / strlen($text);
  $m_pass = 1;
  $digs = str_split($p);
  foreach($digs as $dig) {
    if ($dig != 0) {
      $m_pass *= $dig;
    }
  }
  if ($m != $m_pass) {
    validationError('m');
  }
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


