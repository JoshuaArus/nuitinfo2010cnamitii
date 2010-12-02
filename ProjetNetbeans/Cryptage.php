<?php
define("INC",1);
include("Commun.php");
$pass = "plop";
crypterMdp($pass);
echo("<div>".$pass."</div>");

?>
