<?php

define('INC',1);

require_once('Commun.php');

session_name($CFG['nom_session']);
session_start() || err('session');
session_regenerate_id(true) || err('session');

detruireSession();

redirection('index.php');

?>