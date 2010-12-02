<?php ;

/*  detruireSession()
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Détruit la session de l'utilisateur et les cookies associés au site.
 |
 */

function detruireSession() {
	global $CFG;

	// Si la session existe
	if(isset($_SESSION)) {
		session_unset();
		@session_destroy(); // Fix du @ : pose encore des problèmes même avec ajout de condition isset
		$_SESSION = array();
		setcookie(session_name(), '', 0, $CFG['path_cookie']);
	}

	// Destruction des cookies du site
	setcookie($CFG['cookie_pseudo'], '', 0, $CFG['path_cookie']);
	setcookie($CFG['cookie_sessid'], '', 0, $CFG['path_cookie']);
}

; ?>