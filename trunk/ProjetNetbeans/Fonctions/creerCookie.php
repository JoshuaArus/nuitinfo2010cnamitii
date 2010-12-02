<?php ;

/*  creerCookie(string $nom, [string] $type)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Créer un cookie pour le site.
 |
 @require err
 |
 */

function creerCookie($nom, $valeur) {
	global $CFG;

	// On créer le cookie dont le nom réel est précisé dans la configuration, sinon on quitte avec une erreur
	if(isset($CFG[$nom])) {
		//setcookie($CFG[$nom], $valeur, time()+$CFG['duree_cookie']);
		setcookie($CFG[$nom], base64_encode($valeur), time()+$CFG['duree_cookie'], $CFG['path_cookie']);
	} else {
		err('creation_cookie', array('nom' => $nom));
	}
}

; ?>