<?php ;

/*  checker.php
 |  ¯¯¯¯¯¯¯¯¯¯¯
 *   En sortie de ce programme à inclure (INC  nécessaire),  on  renseigne  ces
 | variables :
 |  - boolean $C : détermine la connexion de l'utilisateur
 |  - array   $T : contient les données de l'utilisateur
 |
 *   Le fichier de l'utilisateur est actualisé  (dernier  passage)  si  il  n'a
 | pas été actualisé depuis plus de $CFG['temps_maj'] secondes.  Et si il n'est
 | plus dans  le  fichier  des utilisateurs connectés, on le rajoute.
 |
 *   On lance la session.
 |
 *   Ce programme détruit la session si le cookie est erroné.
 |
 @require err
          lireCookie
          lireProfil
          detruireSession
          afficherPage
          creerCookie
          nouveauTicket
          synchroProfil
 |
 */

	if(! defined('INC')) {
		header('Location: index.php');
		exit('Redirection vers la racine du site. (checker.php)');
	}

/*

   On lance la session

*/
	session_name($CFG['nom_session']);
	session_start() || err('session');
	session_regenerate_id(true) || err('session');

/*

  On cherche à renseigner $C : utilisateur connecté ou non?
  Si l'utilisateur n'est pas connecté, alors $T est un tableau vide.

*/

	if(!isset($_SESSION['mail'])) {
		$_SESSION['mail'] = lireCookie('cookie_pseudo');
		//echo $_SESSION['mail'];
	}

	$conn = connect();
	$T = lireProfil($_SESSION['mail'], 'utilisateurs', $conn);
	$C = count($T)!==0;


/*

   Dans le cas où l'utilisateur est connecté, on va vérifier qu'il n'essaie  pas
 de se faire passer pour quelqu'un d'autre.

*/


	if($C) {

		// Cookies erronés
		if(lireCookie('cookie_pseudo')!=T('mail') || lireCookie('cookie_sessid')!=T('sessid')) {
			detruireSession();
			afficherPage('erreur.htm');
		}
	}

; ?>