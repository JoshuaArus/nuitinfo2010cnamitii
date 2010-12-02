<?php ;

/*  crypterMdp(string &$mdp)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Vu  que  les  chaînes  sha1 (comme md5)  sont  majoritairement traduisibles
 | lorsqu'elles  sont  petites  (collisions), j'ai pensé que de les allonger ici
 | avant de les placer dans le fichier  ne  ferait  pas  de  mal,  même si ça ne
 | compense pas le possible manque de sécurité côté utilisateur.
 |
 */

function crypterMdp(&$mdp) {
	global $cfg;
	$mdp = $cfg['clef_cryptage0'] . $mdp . $cfg['clef_cryptage1'];
	$mdp = sha1($mdp);
}

; ?>