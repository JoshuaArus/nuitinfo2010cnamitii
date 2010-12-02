<?php ;

/*  lireCookie(string $nom)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Lit un cookie du site.
 |
 */

function lireCookie($nom) {
	global $CFG;
	$val='';

	// On essai de lire le cookie dont le nom réel est mentionné dans la configuration
	if(isset($CFG[$nom]) && isset($_COOKIE[$CFG[$nom]])) $val=$_COOKIE[$CFG[$nom]];

	return base64_decode($val);
}

; ?>