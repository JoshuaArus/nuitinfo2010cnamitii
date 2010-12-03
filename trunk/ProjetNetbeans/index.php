<?php

define('INC',"1");
require_once("Fonctions/mobile_device_detect.php");
require_once("Commun.php");

session_name($CFG['nom_session']);
session_start() || err('session');
session_regenerate_id(true) || err('session');

if ( mobile_device_detect() )
{
    redirection("mobile");
}

?>

﻿<!DOCTYPE html>
<html lang="fr">
<head>
<title>Eco Track - le site de covoiturage universitaire</title>
<meta name="description" content="Site spécialisé dans le covoiturage entre étudiants et personnel universitaire">
<meta name="keywords" content="covoiturage étudiants universitaire eco track">
<meta name="author" content="InteamItii">
<meta charset="utf-8">
<link rel="stylesheet" href="css/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="css/layout.css" type="text/css" media="all">
<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
<script type="text/javascript" src="js/maxheight.js"></script>
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="js/cufon-yui.js"></script>
<script type="text/javascript" src="js/cufon-replace.js"></script>
<script type="text/javascript" src="js/Myriad_Pro_300.font.js"></script>
<script type="text/javascript" src="js/Myriad_Pro_400.font.js"></script>
<script type="text/javascript" src="js/jquery.faded.js"></script>
<script type="text/javascript" src="js/jquery.jqtransform.js"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript">
	$(function(){
		$("#faded").faded({
			speed: 500,
			crossfade: true,
			autoplay: 10000,
			autopagination:false
		});
		
		$('#domain-form').jqTransform({imgPath:'jqtransformplugin/img/'});
	});
</script>
<!--[if lt IE 7]>
<script type="text/javascript" src="http://info.template-help.com/files/ie6_warning/ie6_script_other.js"></script>
<![endif]-->
<!--[if lt IE 9]>
<script type="text/javascript" src="js/html5.js"></script>
<![endif]-->
</head>
<body id="page1" onLoad="new ElementMaxHeight();">
<div class="tail-top">
<!-- header -->
	<header>
		<div class="container">
		<div id="deco">
		<?php
		if(isset($_SESSION['mail']))
		{
				echo '<span class="login"><a href="deconnexion.php">Deconnexion</a><br/><a href="?Page=Profil">Profil</a></span>';
                                                                
		}
		?>
		</div>
			<div class="header-box">
				<div class="left">
					<div class="right">
						<nav>
							<ul>
								<li class="current"><a href="?Page=Accueil">Accueil</a></li>
								<li><a href="?Page=Conducteur">Je conduis</a></li>
								<li><a href="?Page=Passager">Passager</a></li>
								<li><a href="?Page=Trajets">Mes trajets</a></li>
								<li><a href="?Page=Urgent">Trajet urgent</a></li>
								<?php
								if(isset($_SESSION['mail']))
								{
									echo '<li><a href="deconnexion.php">X</a></li>';
								}
								?>
							</ul>
						</nav>
						<h1><a href="?Page=Accueil">
						<img src="images/logo.png" border="0"/></a>
						</h1>
					</div>
				</div>
			</div>
<?php
            if(!isset($_SESSION['mail']))
            {
			echo '<form method="POST" action="connexion.php" id="login-form">
				<fieldset>
					<span class="text">
						<input name="login" type="text" value="" onFocus="if(this.value==\'Username\'){this.value=\'\'}" onBlur="if(this.value==\'\'){this.value=\'Username\'}">
					</span>
					<span class="text">
						<input name="password" type="password" value="" onFocus="if(this.value==\'Password\'){this.value=\'\'}" onBlur="if(this.value==\'\'){this.value=\'Password\'}">
					</span>
					<a href="#" class="login" onClick="document.getElementById(\'login-form\').submit()"><span><span>Connexion</span></span></a>
					<span class="links"><a href="?Page=Oublie">Mot de passe oublié ?</a><br/><a href="?Page=Enregistrer">S\'enregistrer</a></span>
					
				</fieldset>
			</form>';
            }
            ?>
		</div>
	</header>
<!-- content -->
<div class="container">
                                <?php
                                if (!isset($_GET["Page"]) || $_GET["Page"] == "Accueil")
                                {
                                    echo '
                                            <div id="image">
                                                <div id="bloc_compteur">
                                                    <div id="bloc_compteur_top">
                                                    </div>
                                                    <div id="bloc_compteur_tail">
                                                        <span class="compteurs"></span>
                                                            <p class="compteurs">Eco Track en chiffres</p>
                                                            <p class="compteurs">1 600 utilisateurs</p>
                                                            <p class="compteurs">4 500 trajets en cours</p>
                                                            <p class="compteurs">12 500 trajets au total</p>
                                                            <span class="compteurs">12 300 KG de C02 évités</span>
                                                    </div>
                                                    <div id="bloc_compteur_bottom">

                                                    </div>
                                                </div>
                                            </div>';
                                }
                                ?>
		
			<div id="presentation">
                                           <?php
                //html entities de get

                if ( isset($_GET["Page"]) )
                {
                    if ( is_file("Pages/" . $_GET["Page"] . ".php") )
                    {
                        require_once("Pages/" . $_GET["Page"] . ".php");
                    }
                    else
                    {
                        require_once("Pages/404.php");
                    }
                }
                else
                {
                        require_once("Pages/Accueil.php");
                }
                ?><br/><br/><br/>
				</div>
			<div class="clear"></div>
		</div>
</div>
<!-- aside -->
<aside>
	<div class="container">
		<div class="inside">
			<a href="http://www.itii-alsace.fr/" class="new_window"> designed by In Team ITII</a><br>
                        <a href="?Page=Légal">Légal</a><br>
		</div>
	</div>
</aside>
<script type="text/javascript"> Cufon.now(); </script>
</body>
</html>