<?php
	include("connexion.php");
	$auth = "false";
	$val = mysql_query("select * from nuitinfo_utilisateur");
	while ($ligne = mysql_fetch_array($val)){
		if( $ligne["mail"] == $_POST["mail"] && $ligne["mdp"] == $_POST["mdp"]){
			$auth = "true";
			break;
		}
	}
	echo $auth;
?>