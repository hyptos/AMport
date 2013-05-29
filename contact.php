<?php
	$hasError = false;

	//Check name
	if(trim($_POST['name']) == '') {
		$hasError = true;
	} else {
		$name = trim($_POST['name']);
	}	

	//Check email
	if(trim($_POST['email']) == '')  {
		$hasError = true;
	} else if (preg_match("#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$#",$_POST['email'])) {
		$hasError = true;
	} else {
		$email = trim($_POST['email']);
	}

	//Check message 
	if(trim($_POST['message']) == '') {
		$hasError = true;
	} else {
		if(function_exists('stripslashes')) {
			$comments = stripslashes(trim($_POST['message']));
		} else {
			$comments = trim($_POST['message']);
		}
	}

	//If no error send email
	if($hasError==true) {
		$emailTo = 'hyptos974@gmail.com';
		$body = "Name: $name \n\nEmail: $email\n\nComments:\n $comments";
		$headers = 'From :<'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

		mail($emailTo, $subject, $body, $headers);
		$emailSent = true;
		header("HTTP/1.1 200 OK");
	}else{
		header("HTTP/1.1 403 KO");
	}

?>
