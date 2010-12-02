<?php

define('INC',"1");
//require_once("Commun.php");

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <script  type="text/javascript" src="javascript/principal.js"></script>
        <title>Unitrack 2.0</title>
    </head>
    <body>
        <div id="Top">
            <div id="Banniere">

            </div>
            <div id="Menu">
                <a id="menu" class="menuPosition1" href="?Page=Accueil">Accueil</a>
                <a id="menu" class="menuPosition2" href="?Page=PropositionTrajet">Proposer trajet</a>
                <a id="menu" class="menuPosition3" href="?Page=ChercherTrajet">Chercher trajet</a>
                <a id="menu" class="menuPosition4" href="?Page=Compte">Compte</a>
                <a id="menu" class="menuPosition5" href="?Page=deconnexion.php">Compte</a>
            </div>
        </div>
        
        <div id="Center">
            <div id="Connexion">
                <form method="POST" action="?Page=connexion">
                    <input name="login" type="text" maxlength="40">
                    <input name="password" type="password" maxlength="20">
                    <input name="bouton" type="submit" value="Connexion">
                </form>
            </div>

            <div id="Statistique">
                Impact eco
            </div>

            <div id="Contenu">
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
                ?>
            </div>
        </div>

        <div id="Bottom">
            <div id="Footer">

            </div>
            <div id="Copyright">
                Creative Common BY SA 
                <a href="?Page=Légal">Légal</a>
            </div>
        </div>
    </body>
</html>