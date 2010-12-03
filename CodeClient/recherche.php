<?php

require('SQL.php');

if(isset($_POST['txtdepartville']) && isset($_POST['txtarriveeville']))
{
	echo ('<!DOCTYPE html> 
<html> 
	<head> 
	<title>Recherche d\'itinéraire</title> 
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.css" />
	<script src="http://code.jquery.com/jquery-1.4.3.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.js"></script>
</head> 
<body>

 <div data-role="page" id="itineraire">
	
	<div data-role="header"> 
		<h1>recherche d\'itinéraire</h1> 
	</div> 
	
	<ul data-role="listview" data-theme="g">
	<li></li>');

		
	$req = recherche($_POST['txtdepartville'],$_POST['txtarriveeville']);
	
	while($ligne = mysql_fetch_assoc($req))
	{
		echo ('<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">'.$ligne['prenom'].'-'.$ligne['mail'].'-'.$ligne['dateDepart'].'</a></li>');
	}

	echo ('</ul>
	</div><!-- /content -->

	<div data-role="footer">
		<a onclick="/*deconnexion()*/">Deconnexion</a>
	</div><!-- /header -->
	
</div><!-- /page -->

</body>
</html>');
}
else
{
redirection('Itineraire.html');
}
?>