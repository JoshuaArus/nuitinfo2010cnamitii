<?php
	include("connexion.php");
	
	mysql_query("insert into nuitinfo_trajet(prix, villeDepart, villeArrivee, nbPlaceDisponible, dateArrive, dateDepart, n_statutTrajet) 
	VALUES (".$_POST['prix'].", '".$_POST['villeDepart']."', '".$_POST['villeArrivee']."', ".$_POST['nbPlaceDisponible'].", ".$_POST['dateArrive'].", ".$_POST['dateDepart'].", '".$_POST['n_statutTrajet']."')")
	or die("Impossible de se connecter : " . mysql_error());
	echo "true";
	
?>