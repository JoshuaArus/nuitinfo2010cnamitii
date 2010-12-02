/*

-------------------------------------------------------------------------------

 INFORMATIONS
 ������������
   Merci d'avoir t�l�charg� la biblioth�que Mirage-E !

   Cette biblioth�que Mirage-Effects (ou Mirage-E) a �t� cr��e � l'origine sous
 le nom libBoa (ce qui explique  la  variable libBoa). Cette biblioth�que a �t�
 commenc�e le 8 f�vrier 2009 par Boa pour  un  usage uniquement destin� au site
 web 1dragon.info.

   Finalement, la biblioth�que sera utilis�e et d�velopp�e au  sein  de SkyNewt
 pour un usage destin� � la cr�ation rapide et simplifi�e de  sites  web et  de
 jeux en ligne.

   Cette version de la biblioth�que est plac�e sous copyright. Personne ne peut
 l'utiliser actuellement sans autorisation �crite de la part de l'auteur.

-------------------------------------------------------------------------------

         Quelques liens en rapport avec la biblioth�que Mirage-E :

        http://skynewt.com - http://1boa.info - http://mirage-e.com


-------------------------------------------------------------------------------

 COMMENT L'UTILISER ?
 ��������������������
   Ce fichier est le fichier de configuration  de la biblioth�que. Vous pouvez,
 � partir  de  ce  simple  fichier,  modifier  le  fonctionnement g�n�ral de la
 biblioth�que.  Pour  une  configuration  et une personnalisation plus pouss�e,
 il  faudra cr�er  un  package suppl�mentaire ou modifier  la configuration des
 packages existants. Pour une aide plus cibl�e, consultez le site  internet  de
 la biblioth�que Mirage-e : http://mirage-e.com

   Pour l'utilisation dans une page (x)HTML, importez simplement ce script dans
 le <head> de votre code. Voil�, c'est tout ! Les fonctions de  la biblioth�que
 sont   maintenant   accessibles  dans  la  page.  Pour  lister  les  fonctions
 disponibles et conna�tre la version actuelle de la biblioth�que, utilisez :
 <script type="text/javascript">mirage.aPropos();</script>

   Un  faux  popup  devrait  s'afficher,   contenant  la  liste  des  fonctions
 accessibles actuellement avec votre version de la biblioth�que. Pour savoir  �
 quoi  sert une fonction de cette liste, cliquez sur le point d'interrogation �
 droite du nom de la fonction.
   Pour l'utilisation, suivez l'arborescence trac�e jusqu'� la fonction.

   Un alert s'affiche alors pour vous indiquer  clairement  comment utiliser la
 fonction. Si ce n'est pas le cas, alors  il  s'est  affich�  dans  la  console
 d'erreur de votre navigateur.

 NB : La liste  contient  aussi  des  variables.  Vous  pouvez  les  diff�rencier
 des fonctions assez simplement : les fonctions sont suivies de parenth�ses : ().

   libBoa  est  donc  l'objet  javascript  cr��  qui contient  l'ensemble  de  la
 biblioth�que. N�anmoins d'autres noms pour cet  objet  peuvent  �tre  donn�s. De
 base, l'objet $ fonctionne comme libBoa. Vous pouvez ajouter des objets pointant
 sur libBoa de la m�me fa�on que l'objet $ le fait.

 Nota Bene  :  Dans  le  cas  de  l'importation  du framework prototype ou JQuery
 dans la m�me page que la  biblioth�que  Mirage-E,  modifiez  la  ligne  de  code
 " var $ = libBoa; " et mettez-la en commentaire.


--------------------------------------------------------------------------------

 EN CAS DE SOUCIS OU POUR DE SIMPLES REMARQUES :
 �����������������������������������������������

   Si vous trouvez un bug (une d�faillance quelconque de  la  biblioth�que),  ou
 que vous avez une question, une remarque, une suggestion,  ou  encore  si  vous
 avez trouv� une horrrrible faute d'orthographe dans ce pav�, envoyez un message
 via cette page web : http://mirage-e.com/contact . Si vous  avez  envie  de  me
 complimenter ou de me remercier, ou de me  montrer  un  projet  d�velopp�  avec
 cette biblioth�que, �a fait toujours plaisir et je serai  heureux  de  recevoir
 votre message. ;)

--------------------------------------------------------------------------------

  PARAM�TRES SP�CIAUX
  �������������������
   Ne touchez pas aux lignes de code ci-dessous ! On s'occupera  ici  simplement
 des param�tres  qui  peuvent  changer  plus  souvent  que  d'autres,  comme  le
 chemin  vers  le  r�pertoire  o�  se  situe  la  biblioth�que  et ses packages.

   Un param�tre sp�cial  est  donc  un  composant  de  la  configuration  de  la
 biblioth�que. Ils sont d�crits un peu plus bas.

   Pour changer un param�tre sp�cial ( la  liste  des  param�tres  sp�ciaux  est
 indiqu�e ci-dessous), il suffit de d�clarer la variable libBoa et ses variables
 sp�ciales avant l'importation de ce fichier, sous forme d'objet.

   Exemple (dans le <head> de la page) :
   �������������������������������������
  <script type="text/javascript">
  var libBoa=new Object(); libBoa.repertoire='../../repertoire_Mirage_E/';
  </script>
  <script type="text/javascript" src="../../repertoire_Mirage_E/mirage-e.js">
  </script>

   Liste des param�tres sp�ciaux (nom brut) :
   ������������������������������������������
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

  CONFIGURATION DE LA BIBLIOTH�QUE
  ��������������������������������
   Pour que la biblioth�que fonctionne, il est imp�ratif de l'avoir correctement
 configur�e. Aucune connaissance javascript ne devrai �tre  n�cessaire  pour  la
 configuration.  Il  suffit  juste d'avoir un peu de jugeote et de tout lire. :P

    - repertoire : c'est le chemin pour acc�der � la biblioth�que � partir de la
                   page (x)HTML o� le fichier est import�

    - charset    : c'est le charset utilis� pour mirage-e. En  g�n�ral  il  vaut
                   mieux ne pas y toucher, sauf si vous encodez la  biblioth�que
                   dans un charset diff�rent de l'iso-8859-1.

    - debug      : les valeurs attendues sont true ou false. true = vrai = debug
                   autoris�. false = faux = debug non autoris�, aucun  alert  ne
                   sera affich� par la libBoa.

    - interruption : les valeurs attendues sont true ou false.  true  =  vrai  =
                     debug r�alis� avec des alert.  false = faux = debug r�alis�
                     avec des erreurs javascript, donc sans interruption.

    - domaine      : Utilis� pour les cookies.

    - degagerFrame : les valeurs attendues sont true ou false. true = vrai =  le
                     site est contenu dans une frame. false = faux = le site est
                     hors d'une frame, et ne doit jamais y  �tre  (s'il y est il
                     s'en d�gagera alors automatiquement).

    - packImportes : Un tableau  contenant  la  liste des packages import�s.  Un
                     package  porte  le  m�me  nom  que  son  fichier.  V�rifiez
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

  VARIABLES DEVANT R�AGIR COMME LA LIBBOA
  ���������������������������������������
*/
	var mirage = libBoa;
	var $      = libBoa;
/* 

--------------------------------------------------------------------------------

  LANCEMENT DU SCRIPT ET IMPORTATION DES PACKAGES
  �����������������������������������������������

   � partir d'ici, ne touchez plus � rien !


--------------------------------------------------------------------------------
                                                                     � Boa 2009
--------------------------------------------------------------------------------


*/
(function(libBoa) {
	var nomLib='libBoa';
	var w, i;
	libBoa.v = {
		mirageE:1
	};

	// D�gager les frames
	if(window!=top && libBoa.degagerFrame) top.location.href=location.href;

	// D�tection des navigateurs :
	libBoa.ie=!!document.all;
	libBoa.opera=!!window.opera;
	libBoa.safari=navigator.userAgent.indexOf('AppleWebKit')!=-1;

	// On s'occupe des param�tres d�finis hors de ce fichier
	if(typeof special!='undefined') {
		for(i in special) {
			w=special[i];
			if(w) libBoa[i]=w;
		}
		special=null;
	}

	// On enl�ve les / en fin du r�pertoire, et si c'est le r�pertoire courant on ne met rien dans w
	w=libBoa.repertoire;
	if(w.indexOf('/')==w.length-1) w=w.substring(0, w.length-1);
	if(w=='.') w='';
	libBoa.repertoire=w;

	// Le debug est une fonction renvoyant vrai si le pack debug n'est pas import�
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