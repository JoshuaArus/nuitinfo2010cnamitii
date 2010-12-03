<?php
define("INC",1);
include("Commun.php");
$pass = "test";
crypterMdp($pass);
echo("<div>".$pass."</div>");

?>
