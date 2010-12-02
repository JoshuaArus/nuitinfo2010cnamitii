<?php ;

/*  commun.php
 |  ¯¯¯¯¯¯¯¯¯¯
 *   Ce programme doit être inclus dans un autre (INC nécessaire).
 |
 *   Contient la configuration du site, et est commun à toutes les pages dans le
 | header. S'il faut figer le site en urgence, c'est donc ici qu'il faut agir.
 |
 |
 @require
 |
 @inclus afficherPage
         err
         detruireSession
         SQL
          crypterMdp.php
          verif.php
 |
 */

	if(! defined('INC')) {
		header('Location: /');
		exit('Redirection vers la racine du site. (commun.php)');
	}


/*

   Le dossier utilisant commun est décalé. On applique le nouveau chemin.

*/

	$dir_a_decaler = '';
	if(defined('DIR')) $dir_a_decaler = DIR;


/*

   On modifie les chemins où chercher pour les includes

*/

	set_include_path($dir_a_decaler.'./fonctions/'.
	                 PATH_SEPARATOR .
	                 '.');



/*

   Inclusions

*/

	require('afficherPage.php');
	require('err.php');
	require('detruireSession.php');
	require('SQL.php');
	require('crypterMdp.php');
	require('verif.php');
	require('redirection.php');
	require('creerCookie.php');
	require('lireCookie.php');
	require('nouveauTicket.php');
	require('T.php');
	require('synchroProfil.php');


/*

   Configuration du site

*/

	$CFG = array(
		'en_tete_erreurs'       => '<h3>Erreur Fatale :: Revaltic 2.0</h3>',
		'charset'               => 'utf-8',

		// Divers
		'temps_maj'             => 60*5,            // On vérifie toutes les 5 minutes si le joueur est toujours connecté
		'debug'                 => true,            // Erreurs affichées à l'écran (=true) ou dans le fichier d'erreurs (=false)
		'max_caracteres'        => 50,              // Le max de caractères autorisé dans les noms de fichiers

		// Sécurité
		'clef_cryptage0'        => 'abcd',
		'clef_cryptage1'        => '1234',
		'clef_ticket'           => 'smqlksdq98798798',
		'cookie_pseudo'         => 'lkjlkjd98',            // Nom du cookie contenant le pseudo
		'cookie_sessid'         => 'jmjml0IDLMJLM',        // Nom du cookie contenant la variable session à comparer avec celle du compte
		'nom_session'           => 'qqsmlksdmfkmlsdk9874', // Nom du cookie session
		'duree_cookie'          => 3600*24*15,             // Le cookie est valable 15 jours
		'path_cookie'           => '/',                    // Validité des cookie à partir de ce répertoire

		// Le fichier où les erreurs du site sont enregistrées
		'error_log'             => $dir_a_decaler . 'errorlog.php'
	);


/*

   Tableau langue / Erreurs du site

*/

	$ERR = array(
		'erreur' => 'Erreur : la variable $ERR est corrompue.',
		'fichier' => 'Le fichier $[fichier] est introuvable',
		'connect' => 'Erreur lors de la connexion a la base de donnée (login, mdp ou host)',
		'commit' => 'Erreur lors du Commit.',
		'request' => 'Erreur lors de l\'exécution de la requête, base de donnée peut être injoignable, réessayez plus tard',
		'rollback' => 'Erreur lors du Rollback.',
		'profil'     => 'Erreur de profil : $[id] n\'existe pas (utilisateur "$[pseudo]")'
	);



/*

   Les dossiers importants du site

*/

	$D = array(
		'html' => 'html/'
	);




/*

   Application de la configuration & configuration Php &  configuration  de  la
   page générée.

*/

	header('Content-Type: text/html; charset='.$CFG['charset']);
	error_reporting(E_ALL);                      // Gestion des erreurs (AUCUNE ERREUR : 0) (TTES ERREURS : E_ALL)
	ini_set('session.use_trans_sid', false);     // Transmettre l'id de session en transparent (non affiché dans l'URL) (false)
	ini_set('session.use_only_cookies', true);   // Utiliser seulement les cookies pour stocker les identifiants de sessions du côté du navigateur (true)
	ini_set('date.timezone', 'Europe/Paris');    // L'heure du serveur doit être celle de Paris
	ini_set('register_globals', false);          // On empêche la récupération des $_GLOBALS directement ; à nous de les chercher ! (false)
	ini_set('allow_url_fopen', false);           // On empêche l'ouverture d'une page web distante (http ou ftp) en include (false)
	ini_set('magic_quotes_gpc', true);           // On ajoute des \ à tous les ' entrants (true)
	ini_set('display_errors', true);             // On cache les erreurs (false)
	ini_set('log_errors', true);                 // On enregistre les erreurs dans un historique d'erreurs (true)
	ini_set('error_log', $CFG['error_log']);     // Fichier Historique d'erreurs



; ?>