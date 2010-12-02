<!DOCTYPE html> 
<html> 
	<head> 
	<title>UniTrack 2.0</title> 
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.css" />
	<script src="http://code.jquery.com/jquery-1.4.3.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.js"></script>
</head> 
<body> 

<div data-role="page">

	<div data-role="header">
		<h1>UniTrack 2.0</h1>
	</div><!-- /header -->

	<div data-role="content">	
		<form action="Accueil.html" method="post">
		<div data-role="fieldcontain">
    		<label for="name">Compte:</label>
    		<input type="text" name="name" id="name" value=""  />
    		<label for="password">Mot de passe:</label>
    		<input type="password" name="password" id="password" value="" />	
			<input type="submit" data-role="button" value="Connexion" />
		</div>
		</form> 
	</div><!-- /content -->

	<div data-role="footer">
		<a onclick="/*deconnexion()*/">Deconnexion</a>
	</div><!-- /header -->
	
</div><!-- /page -->

</body>
</html>