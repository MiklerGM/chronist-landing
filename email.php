<?php

$date = date('Y-m-d H:i:s');
$email = '';
if(isset($_POST['email'])){
	$email = $_POST['email'];
}
$ip = $_SERVER['REMOTE_ADDR'];
$ua = $_SERVER['HTTP_USER_AGENT'];

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
	file_put_contents("/var/log/FullOfEmails.log","$date\t$ip\t$email\t$ua\n", FILE_APPEND | LOCK_EX);
	echo '{"email":"ok"}';
	http_response_code(200);
}else{
	echo '{"email":"invalid"}';
	http_response_code(400);
}
?>
