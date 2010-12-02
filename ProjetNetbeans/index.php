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

        </div>
        
        <div id="Center">
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

        </div>
    </body>
</html>