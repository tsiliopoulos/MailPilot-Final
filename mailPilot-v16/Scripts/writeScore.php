<?php

if(!empty($_POST['data'])){
	$data = $_POST['data'];
	$filename = "scores.txt"; 

	// Create new File
	$filename = fopen($filename, 'w');
	fwrite($filename, $data);
	fclose($filename);
	}

?>
