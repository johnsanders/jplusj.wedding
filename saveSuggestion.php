<?php
	$file = "/home/jon13210/www/jplusj.wedding/suggestionList.txt";
	$rsvp = $_POST["message"] . "\n";
var_dump($_POST);
	file_put_contents($file, $rsvp, FILE_APPEND | LOCK_EX);
	echo $rsvp;
?>
