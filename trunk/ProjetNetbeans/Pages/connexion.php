<?php ;

define('INC', 1);
require_once('Fonctions/checker.php');

if (!verif(array('login','password'))) {
	afficherPage('erreur.htm', $T);
}
else
{
	$mail = $_POST['login'];
	$mdp = $_POST['password'];

	$mail = strtolower($mail);
	crypterMdp($mdp);

        $req = 'select * from ' . $type . ' where mail=\''.$mail.'\' AND mdp=\''.$mdp.'\'';
        $rep = req($req,$conn);

	if(!reponse($rep))//si il est pas authentifié
	{
		detruireSession();
		afficherPage('erreur.htm');
	}
	else //si il est authentifié
	{
		$T = lireProfil($mail, $type, $conn);
		if(count($T)==0) afficherPage('erreur.htm');
		$_SESSION['mail'] = $mail;
		creerCookie('cookie_pseudo', $T['mail']);
		$T['sessid'] = nouveauTicket();
		creerCookie('cookie_sessid', $T['sessid']);
		redirection('index.php');
	}
}

?>