<?php ;

/*  boolean verif($t)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Vérifie les variables du tableau t en post (défaut) ou get (2).
 |
 */

function verif($t, $type=1) {
	$w=$_POST;
	if($type==2) $w=$_GET;
	foreach($t as $nom) {
		if(empty($w[$nom]) || !is_string($w[$nom])) return false;
	}
	return true;
}

; ?>