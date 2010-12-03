<!DOCTYPE html> 
<html> 
	<head> 
	<title>Mes trajets</title> 
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.css" />
	<script src="http://code.jquery.com/jquery-1.4.3.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.js"></script>
	<link rel="stylesheet" media="screen" type="text/css" title="tableau" href="tableau.css" />
</head> 
<body>

 <div data-role="page" id="trajets">
	<div data-role="header"> 
		<h1>EcoTrack 2.0</h1> 
	</div> 
	<div data-role="fieldcontain">
	  <div class="tableau">
			<div class="ville">Ville d&eacute;part</div>
			<div class="date">Date d&eacute;part</div>
			<div class="ville">Ville arriv&eacute;e</div>
			<div class="date">Date arriv&eacute;e</div>
			<div class="prix">Prix</div>
			<div class="statut">Statut trajet</div><br/>
		
		<?php
			mysql_connect("localhost", "root", "") or die("Impossible de se connecter : " . mysql_error());
			mysql_select_db("ortsfran");
			$val = mysql_query("select * from nuitinfo_trajet order by n_statutTrajet");
			while ($ligne = mysql_fetch_array($val)){
				
				echo "<div class='ville'>".$ligne['villeDepart']."</div>";
				echo "<div class='date'>".$ligne['dateDepart']."</div>";
				echo "<div class='ville'>".$ligne['villeArrivee']."</div>";
				echo "<div class='date'>".$ligne['dateArrive']."</div>";
				echo "<div class='prix'>".$ligne['prix']."</div>";
				if( $ligne['n_statutTrajet'] == 0){
					echo "<div class='statut'>Terminé</div>";
				}
				else{
					echo "<div class='statut'>En cours</div>";
				}
				echo "<br/>";
			}
		?>
	  </div>
	  
		
		<div data-role="footer"> 
			<a onclick="deconnexion()">Deconnexion</a>
		</div>
	</div>
 </div>
<script type="text/javascript">
		function deconnexion(){    
			window.location = "../Login.html";				
		}
    </script>

</body>
</html>
