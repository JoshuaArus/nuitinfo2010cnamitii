/*

-------------------------------------------------------------------------------

 INFORMATIONS
 ¯¯¯¯¯¯¯¯¯¯¯¯
   Merci d'avoir téléchargé la bibliothèque Mirage-E !

   Cette bibliothèque Mirage-Effects (ou Mirage-E) a été créée à l'origine sous
 le nom libBoa (ce qui explique  la  variable libBoa). Cette bibliothèque a été
 commencée le 8 février 2009 par Boa pour  un  usage uniquement destiné au site
 web 1dragon.info.

   Finalement, la bibliothèque sera utilisée et développée au  sein  de SkyNewt
 pour un usage destiné à la création rapide et simplifiée de  sites  web et  de
 jeux en ligne.

   Cette version de la bibliothèque est placée sous copyright. Personne ne peut
 l'utiliser actuellement sans autorisation écrite de la part de l'auteur.

-------------------------------------------------------------------------------

         Quelques liens en rapport avec la bibliothèque Mirage-E :

        http://skynewt.com - http://1boa.info - http://mirage-e.com


-------------------------------------------------------------------------------

 COMMENT L'UTILISER ?
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   Ce fichier est le fichier de configuration  de la bibliothèque. Vous pouvez,
 à partir  de  ce  simple  fichier,  modifier  le  fonctionnement général de la
 bibliothèque.  Pour  une  configuration  et une personnalisation plus poussée,
 il  faudra créer  un  package supplémentaire ou modifier  la configuration des
 packages existants. Pour une aide plus ciblée, consultez le site  internet  de
 la bibliothèque Mirage-e : http://mirage-e.com

   Pour l'utilisation dans une page (x)HTML, importez simplement ce script dans
 le <head> de votre code. Voilà, c'est tout ! Les fonctions de  la bibliothèque
 sont   maintenant   accessibles  dans  la  page.  Pour  lister  les  fonctions
 disponibles et connaître la version actuelle de la bibliothèque, utilisez :
 <script type="text/javascript">mirage.aPropos();</script>

   Un  faux  popup  devrait  s'afficher,   contenant  la  liste  des  fonctions
 accessibles actuellement avec votre version de la bibliothèque. Pour savoir  à
 quoi  sert une fonction de cette liste, cliquez sur le point d'interrogation à
 droite du nom de la fonction.
   Pour l'utilisation, suivez l'arborescence tracée jusqu'à la fonction.

   Un alert s'affiche alors pour vous indiquer  clairement  comment utiliser la
 fonction. Si ce n'est pas le cas, alors  il  s'est  affiché  dans  la  console
 d'erreur de votre navigateur.

 NB : La liste  contient  aussi  des  variables.  Vous  pouvez  les  différencier
 des fonctions assez simplement : les fonctions sont suivies de parenthèses : ().

   libBoa  est  donc  l'objet  javascript  créé  qui contient  l'ensemble  de  la
 bibliothèque. Néanmoins d'autres noms pour cet  objet  peuvent  être  donnés. De
 base, l'objet $ fonctionne comme libBoa. Vous pouvez ajouter des objets pointant
 sur libBoa de la même façon que l'objet $ le fait.

 Nota Bene  :  Dans  le  cas  de  l'importation  du framework prototype ou JQuery
 dans la même page que la  bibliothèque  Mirage-E,  modifiez  la  ligne  de  code
 " var $ = libBoa; " et mettez-la en commentaire.


--------------------------------------------------------------------------------

 EN CAS DE SOUCIS OU POUR DE SIMPLES REMARQUES :
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

   Si vous trouvez un bug (une défaillance quelconque de  la  bibliothèque),  ou
 que vous avez une question, une remarque, une suggestion,  ou  encore  si  vous
 avez trouvé une horrrrible faute d'orthographe dans ce pavé, envoyez un message
 via cette page web : http://mirage-e.com/contact . Si vous  avez  envie  de  me
 complimenter ou de me remercier, ou de me  montrer  un  projet  développé  avec
 cette bibliothèque, ça fait toujours plaisir et je serai  heureux  de  recevoir
 votre message. ;)

--------------------------------------------------------------------------------

  PARAMÈTRES SPÉCIAUX
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   Ne touchez pas aux lignes de code ci-dessous ! On s'occupera  ici  simplement
 des paramètres  qui  peuvent  changer  plus  souvent  que  d'autres,  comme  le
 chemin  vers  le  répertoire  où  se  situe  la  bibliothèque  et ses packages.

   Un paramètre spécial  est  donc  un  composant  de  la  configuration  de  la
 bibliothèque. Ils sont décrits un peu plus bas.

   Pour changer un paramètre spécial ( la  liste  des  paramètres  spéciaux  est
 indiquée ci-dessous), il suffit de déclarer la variable libBoa et ses variables
 spéciales avant l'importation de ce fichier, sous forme d'objet.

   Exemple (dans le <head> de la page) :
   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
  <script type="text/javascript">
  var libBoa=new Object(); libBoa.repertoire='../../repertoire_Mirage_E/';
  </script>
  <script type="text/javascript" src="../../repertoire_Mirage_E/mirage-e.js">
  </script>

   Liste des paramètres spéciaux (nom brut) :
   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
    - repertoire
    - packImportes

*/
	if(typeof libBoa != 'undefined') {
		var special={};
		with(libBoa) {
			if(typeof repertoire != 'undefined') special.repertoire = repertoire;
			if(typeof packImportes != 'undefined') special.packImportes = packImportes;
		}
	}
/*


--------------------------------------------------------------------------------

  CONFIGURATION DE LA BIBLIOTHÈQUE
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   Pour que la bibliothèque fonctionne, il est impératif de l'avoir correctement
 configurée. Aucune connaissance javascript ne devrai être  nécessaire  pour  la
 configuration.  Il  suffit  juste d'avoir un peu de jugeote et de tout lire. :P

    - repertoire : c'est le chemin pour accéder à la bibliothèque à partir de la
                   page (x)HTML où le fichier est importé

    - charset    : c'est le charset utilisé pour mirage-e. En  général  il  vaut
                   mieux ne pas y toucher, sauf si vous encodez la  bibliothèque
                   dans un charset différent de l'iso-8859-1.

    - debug      : les valeurs attendues sont true ou false. true = vrai = debug
                   autorisé. false = faux = debug non autorisé, aucun  alert  ne
                   sera affiché par la libBoa.

    - interruption : les valeurs attendues sont true ou false.  true  =  vrai  =
                     debug réalisé avec des alert.  false = faux = debug réalisé
                     avec des erreurs javascript, donc sans interruption.

    - domaine      : Utilisé pour les cookies.

    - degagerFrame : les valeurs attendues sont true ou false. true = vrai =  le
                     site est contenu dans une frame. false = faux = le site est
                     hors d'une frame, et ne doit jamais y  être  (s'il y est il
                     s'en dégagera alors automatiquement).

    - packImportes : Un tableau  contenant  la  liste des packages importés.  Un
                     package  porte  le  même  nom  que  son  fichier.  Vérifiez
                     l'import du package avec libBoa.aPropos();

*/
	var libBoa = {
		repertoire  : 'script',
		charset     : 'iso-8859-1',
		debug       : true,
		interruption: true,
		domaine     : '/',
		degagerFrame: true,

		packImportes: [
			'pack_debug',
			''
		]
	};
/*

--------------------------------------------------------------------------------

  VARIABLES DEVANT RÉAGIR COMME LA LIBBOA
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/
	var mirage = libBoa;
	var $      = libBoa;
/* 

--------------------------------------------------------------------------------

  LANCEMENT DU SCRIPT ET IMPORTATION DES PACKAGES
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯

   À partir d'ici, ne touchez plus à rien !


--------------------------------------------------------------------------------
                                                                     © Boa 2009
--------------------------------------------------------------------------------


*/
(function(libBoa) {
	var nomLib='libBoa';
	var w, i;
	libBoa.v = {
		mirageE:1
	};

	// Dégager les frames
	if(window!=top && libBoa.degagerFrame) top.location.href=location.href;

	// Détection des navigateurs :
	libBoa.ie=!!document.all;
	libBoa.opera=!!window.opera;
	libBoa.safari=navigator.userAgent.indexOf('AppleWebKit')!=-1;

	// On s'occupe des paramètres définis hors de ce fichier
	if(typeof special!='undefined') {
		for(i in special) {
			w=special[i];
			if(w) libBoa[i]=w;
		}
		special=null;
	}

	// On enlève les / en fin du répertoire, et si c'est le répertoire courant on ne met rien dans w
	w=libBoa.repertoire;
	if(w.indexOf('/')==w.length-1) w=w.substring(0, w.length-1);
	if(w=='.') w='';
	libBoa.repertoire=w;

	// Le debug est une fonction renvoyant vrai si le pack debug n'est pas importé
	libBoa.debugMoi = function(){ return true; };

	// On inclut les packages
	inclure('libboa');
	for(i in libBoa.packImportes) {
		if(libBoa.packImportes[i]=='') continue;
		inclure(libBoa.packImportes[i]);
	}

	inclure=nomLib=w=i=null;
	function inclure(fichier) {
		if(fichier.indexOf('.js')!=fichier.length-3) fichier+='.js';
		var p='/';
		if(libBoa.repertoire=='') p='';
		document.write('\n<script type="text/javascript" charset="'+libBoa.charset+'" src="'+libBoa.repertoire+p+fichier+'"></script>');
		p=fichier=null;
	}
})(libBoa);