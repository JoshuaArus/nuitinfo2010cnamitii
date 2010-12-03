<?php

require('SQL.php');


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
		
	$req = getTrajet("toto@youmyoum.com");
	$perso = mysql_fetch_array(req('select prenom from nuitinfo_utilisateur where mail=\'toto@youmyoum.com\'',connect()));
	
	while($ligne = mysql_fetch_assoc($req))
	{
		echo ('<h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">'.$perso['prenom'].'-toto@youmyoum.com-'.$ligne['villeDepart'].'-'.$ligne['villeArrivee'].'</a></h2>');
	}

	echo ('</ul>
	</div><!-- /content -->

	<div data-role="footer">
		<a onclick="/*deconnexion()*/">Deconnexion</a>
	</div><!-- /header -->
	
</div><!-- /page -->

</body>
</html>');

?>