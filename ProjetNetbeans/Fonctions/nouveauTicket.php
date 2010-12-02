<?php ;

/*  nouveauTicket()
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Créer un nouveau ticket d'identification sécurisé
 |
 */

function nouveauTicket() {
	global $CFG;
	$w = session_id() . $CFG['clef_ticket'] . time();
	$w = md5($w);
	return $w;
}

; ?>