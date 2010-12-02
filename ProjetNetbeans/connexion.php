<?php ;

require_once('Commun.php');
require_once('Fonctions/checker.php');

if (!verif(array('login','password'))) {
	redirection('Pages/erreur.htm');
}
else
{
	$mail = $_POST['login'];
	$mdp = $_POST['password'];

	$mail = strtolower($mail);
	crypterMdp($mdp);

        $req = 'select * from nuitinfo_utilisateur where mail=\''.$mail.'\' AND mdp=\''.$mdp.'\'';
        $rep = req($req,$conn);

	if(!reponse($rep))//si il est pas authentifié
	{
		detruireSession();
		redirection('Pages/erreur.htm');
	}
	else //si il est authentifié
	{
		$T = lireProfil($mail, 'nuitinfo_utilisateur', $conn);
		if(count($T)==0) redirection('Pages/erreur.htm');
		$_SESSION['mail'] = $mail;
		creerCookie('cookie_pseudo', $T['mail']);
		$T['sessid'] = nouveauTicket();
		creerCookie('cookie_sessid', $T['sessid']);
		redirection('index.php?Page=ok');
	}
}

?>