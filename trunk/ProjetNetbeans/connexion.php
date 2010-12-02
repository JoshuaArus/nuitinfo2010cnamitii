<?php ;

define('INC', 1);
require('commun.php');
require('checker.php');

if (!verif(array('conn1','conn2'))) {
	afficherPage('erreur.htm', $T);
}
else
{
	$mail = $_POST['conn1'];
	$mdp = $_POST['conn2'];

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
		majProfil($T,'utilisateurs',$conn);
		redirection('index.php?page=co');
	}
}

?>