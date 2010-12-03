<?php ;

/*  err(string $nom_erreur, array $t)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Affiche le message d'erreur lié au nom de l'erreur fourni.  Si  le  message
 | contient des variables (forme $[variable]), elles sont  remplacées  avec  les
 | couples clef/index du tableau $t.
 |
 n
 |
 */

function err($nom_erreur, $t=array()) {
	global $ERR, $CFG;

	// Éviter la récursivité
	$erreur_inexistante = !isset($ERR[$nom_erreur]);
	if($erreur_inexistante && $nom_erreur=='erreur') exit('<strong>Erreur critique. Fin du programme. (Erreur d\'erreur)</strong>');

	// Erreur inexistante
	if($erreur_inexistante) err('erreur', array('nom' => $nom_erreur));

	// On applique le template
	$w = $ERR[$nom_erreur];
	foreach($t as $key => $val) $w = str_replace('$['.$key.']', $val, $w);
	$w .= ' (décalé : ' . (defined('DIR') ? 'oui ['.DIR.']' : 'non') . ')';

	// On détruit la session et on affiche le message d'erreur (deux façons)
	//detruireSession();
	if($CFG['debug']) {
		exit($CFG['en_tete_erreurs'] . $w);

	} else {
		$f = fopen($CFG['error_log'], 'a');
		fputs($f, "\n" . date('[d-M-Y H:i:s]') . ' Revaltic Notice : ' . $w . "\n");
		fclose($f);
		//header('Location: /');
		exit('Redirection vers la racine du site. (err)');
	}
}

; ?>