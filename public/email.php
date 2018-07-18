<?php
function get_ip() {
	//Just get the headers if we can or else use the SERVER global
	if ( function_exists( 'apache_request_headers' ) ) {
		$headers = apache_request_headers();
	} else {
		$headers = $_SERVER;
	}
	//Get the forwarded IP if it exists
	if ( array_key_exists( 'X-Forwarded-For', $headers ) && filter_var( $headers['X-Forwarded-For'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 ) ) {
		$the_ip = $headers['X-Forwarded-For'];
	} elseif ( array_key_exists( 'HTTP_X_FORWARDED_FOR', $headers ) && filter_var( $headers['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 )
	) {
		$the_ip = $headers['HTTP_X_FORWARDED_FOR'];
	} else {
		$the_ip = filter_var( $_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 );
	}
	return $the_ip;
}

$date = date('Y-m-d H:i:s');
$email = '';
if(isset($_POST['email'])){
	$email = $_POST['email'];
}
#$ip = $_SERVER['REMOTE_ADDR'];
$ip = get_ip();
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
