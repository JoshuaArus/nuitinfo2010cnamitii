<?php ;

/*  redirection(string $lien)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Redirige l'utilisateur vers une page, en général une page d'erreur.
 |
 |
 */

function redirection($lien) {
global $conn;
if (isset($conn)) close($conn);
	header('Location: ' . $lien);
	exit('Redirection en cours');
}

; ?>