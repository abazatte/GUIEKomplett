<!DOCTYPE html>
<html lang="de" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./style.css">
    <title>Aufgabe4</title>
  </head>
  <body>
	<?php
		$gericht1 = $_GET['gericht1'];
		$gericht2 = $_GET['gericht2'];
		echo "
		<div id='linksDiv'>
			<h1>$gericht1</h1>
		</div>
		<div id='rechtsDiv'>
			<h1>$gericht2</h1>
		</div>
		";
	?>
	<div id="mitteDiv">
		<h1 id="mitteText">Bitte auf jedes Gericht einen Finger legen</h1>
	</div>
	<script type="text/javascript" src="./function.js"></script>
  </body>
</html>
