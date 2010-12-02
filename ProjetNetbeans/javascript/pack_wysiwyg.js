(function(libBoa) {
// TODO : cacher la barre d'outil lorsqu'on est en édition HTML
/*
--------------------------------------------------------------------------------
                            Package pack_wysiwyg.js
                                  Version 1
                                      
                                 Auteur: Boa
--------------------------------------------------------------------------------

 PACK_WYISYWG.JS
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   Ajoute  les  fonctions  concernant  le traitement des  chaînes  de  caractère
 à la bibliothèque.

--------------------------------------------------------------------------------

 ACTIONS EFFECTUÉES
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   ---


--------------------------------------------------------------------------------

 CONFIGURATION
 ¯¯¯¯¯¯¯¯¯¯¯¯¯
   Vous  pouvez  changer  la langue du package suivant les langages disponibles.
 Langages disponibles actuellements : Français (fr).

*/
	var langue='fr';
/*

  Pour toute proposition de traduction,  contactez-moi  via le site web officiel
 http://mirage-e.com !



 MODIFIER LE MENU DU WYSIWYG
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   Des connaissances en Html sont nécessaires pour modifier le menu du  Wysiwyg.
 Chaque variable de la forme "$[variable]" est un bouton du Wysiwyg.

*/
var outils_du_wysiwyg = [

	'<div class="outilsWysiwyg">',
		'$[gras] $[italique] $[souligne] ',
		'$[separation]',
		'$[exposant] $[indice] $[trait] $[indenter] $[desindenter]',
		'$[gauche] $[centrer] $[droite] $[justifier] ',
		'$[separation]',
		'$[police_2] $[police_1] $[police0] $[police1] $[police2]',
		'$[separation]',
		'$[liste_num] $[liste_puce]',
		'$[separation]',
		'$[changer_vue] $[apercu]',
	'</div>',

''].join('\n');
/*



  MODIFIER/AJOUTER DES BOUTONS
  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/
var config = {
	separation      : '<span>&nbsp;</span>',

	gras            : '<a:bold>B</a>',
	italique        : '<a:italic>I</a>',
	souligne        : '<a:underline>U</a>',

	gauche          : '<a:justifyleft>Gauche</a>',
	centrer         : '<a:justifycenter>Centrer</a>',
	droite          : '<a:justifyright>Droite</a>',
	justifier       : '<a:justifyfull>Justifier</a>',

	police_2        : '<a:fontSize/-2><span style="font-size:8px;">A</span></a>',
	police_1        : '<a:fontSize/-1><span style="font-size:10px;">A</span></a>',
	police0         : '<a:fontSize/+0><span style="font-size:13px;">A</span></a>',
	police1         : '<a:fontSize/+1><span style="font-size:16px;">A</span></a>',
	police2         : '<a:fontSize/+2><span style="font-size:20px;">A</span></a>',

	exposant        : '<a:superscript>Exposant</a>',
	indice          : '<a:subscript>Indice</a>',

	indenter        : '<a:indent>Indenter</a>',
	desindenter     : '<a:outdent>Désindenter</a>',

	liste_num       : '<a:insertorderedlist>Liste numérotée</a>',
	liste_puce      : '<a:insertunorderedlist>Liste à puce</a>',

	trait           : '<a:inserthorizontalrule>Insérer ligne</a>',
	changer_vue     : '<a:changerVue>HTML/Wysiwyg</a>',
	apercu          : '<a:apercu>Aperçu</a>',

	palette_couleur : ''
};
/*


--------------------------------------------------------------------------------

 AIDE DES FONCTIONS ET VARIABLES DU PACKAGE
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   libBoa.
         .wysiwyg.
                 .nouveau()
                 .action()

--------------------------------------------------------------------------------

 LANGUES DU PACK
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/

	var global = {
		langue : langue,

		fr : {
			nouveau : {
				description : 'Créer un nouvel éditeur What You See Is What You Get (WYSIWYG) en bas du div passé en paramètre. Le WYSIWYG possède la classe wysiwyg.',
				erreur      : 'Erreur lors de la création du Wysiwyg : Le textarea est introuvable.'
			},
			action : {
				description : 'Génère une action sur le wysiwyg mentionné.',
				erreur      : 'Erreur : le wysiwyg est introuvable ou n\'est pas un wysiwyg de la bibliothèque Mirage-E.',
				mauvaise_fct: 'Erreur d\'action pour le wysiwyg :\nla fonction "$[fct]" n\'a pas fonctionné.'
			}
		}

	};
	global=global[global.langue];

/*

--------------------------------------------------------------------------------

 PACKAGE
 ¯¯¯¯¯¯¯
   À partir d'ici, ne touchez plus à rien !


--------------------------------------------------------------------------------

 PROCESSUS
 ¯¯¯¯¯¯¯¯¯
   Modifie la configuration pour la rendre utilisable.

*/
libBoa.wysiwyg={};
(function(){
	var i, r;
	for(i in config) {
		r=/<a:([^>]*)>/i;
		config[i]=config[i].replace(r, '<a href="#" onclick="return libBoa.wysiwyg.action(\'$[wysiwyg]\', \'$1\');">');
	}
	outils_du_wysiwyg=libBoa.appliquerTemplate(outils_du_wysiwyg, config);
	i=r=config=null;
})();
/*


--------------------------------------------------------------------------------

 FONCTIONS
 ¯¯¯¯¯¯¯¯¯
*/



/*  Wysiwyg(object wysiwyg, object html, object contenu)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Classe privée utilisée pour le wysiwyg.
 |
 */

function Wysiwyg(wysiwyg, html, contenu) {
	this.html = false;

	// Éxécute une fonction native du wysiwyg
	this.executer = function(action) {
		wysiwyg.contentWindow.focus();
		var options='';
		if(arguments[1]) options=arguments[1];

		if(contenu.queryCommandEnabled(action)) {
			contenu.execCommand(action, false, options);
		}
		wysiwyg.contentWindow.focus();
	}

	// Insère du Html dans le Wysiwyg
	this.insererHtml = function(code) {
		wysiwyg.contentWindow.focus();
		if(libBoa.ie) {
			wysiwyg.contentWindow.document.selection.createRange().pasteHTML(code);
		} else {
			contenu.execCommand('insertHTML', false, code);
		}
	}

	// Modifie la "vue" : le code Wysiwyg ou le code Html brut
	this.changerVue=function() {
		if(this.html) {
			libBoa.toggle(html, 'cacher');
			libBoa.toggle(wysiwyg, 'montrer');
			wysiwyg.contentWindow.document.body.innerHTML=html.value;
		} else {
			libBoa.toggle(html, 'montrer');
			libBoa.toggle(wysiwyg, 'cacher');
			html.value=wysiwyg.contentWindow.document.body.innerHTML;
		}
		this.html=!!!this.html;
	}

	// Renvoie le code Html du Wysiwyg
	this.contenu = function() {
		this.changerVue();
		this.changerVue();
		return html.value;
	}
}




/*  Wysiwyg nouveau(string/object textarea)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Modifie le textarea en un nouvel éditeur Wysiwyg.
 |
 */

libBoa.wysiwyg.nouveau = function(textarea, id) {

	// Déclaration des variables
	var description, modele, ok, textarea, outils, wysiwyg, contenu;

	description=global.nouveau.description;
	modele='string/object -textarea-, string -id_du_wysiwyg_créé-';
	ok=libBoa.debugMoi('nouveau', modele, arguments, description);
	if(!ok) return liberer();

	// On récupère le textarea
	if(typeof textarea=='string') textarea=libBoa.obj(textarea);
	if(!textarea.nodeName || textarea.nodeName.toLowerCase()!='textarea') {
		liberer();
		return libBoa.alert(global.nouveau.erreur);
	}

	// Intégration de la barre d'outils
	outils=document.createElement('div');
	outils.innerHTML=outils_du_wysiwyg.replace(/\$\[wysiwyg]/gi, id);

	// Création de l'éditeur Wysiwyg
	wysiwyg=document.createElement('iframe');
	wysiwyg.id=id;
	wysiwyg.className=textarea.className || '';
	wysiwyg.setAttribute('frameborder', '0', false);
	wysiwyg.setAttribute('framespacing', '0', false);

	// On ajoute le Wysiwyg
	with(textarea.parentNode) {
		insertBefore(outils, textarea);
		insertBefore(wysiwyg, textarea);
	}
	modele=textarea.innerHTML;
	if(modele=='') modele='&nbsp;';
	libBoa.toggle(textarea, 'cacher');

	// On permet à l'utilisateur d'éditer le contenu de l'iframe
	contenu=wysiwyg.contentWindow.document;
	contenu.designMode='on';
	contenu.open();
	contenu.write('<html><head></head><body>'+modele+'</body></html>');
	contenu.close();

	// On créer l'objet servant à identifier le wysiwyg et à effectuer ses actions
	wysiwyg.ref=new Wysiwyg(wysiwyg, textarea, contenu);
	liberer();
	return wysiwyg.ref;

	function liberer() {
		description=modele=ok=textarea=outils=contenu=liberer=id=null;
	}
};


/*  action(string/object wysiwyg, string action)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Génère une action pour le wysiwyg demandé.
 |
 */

libBoa.wysiwyg.action = function(wysiwyg, action) {
	var description=global.action.description;
	var modele='string/object -wysiwyg-, string -action-';
	var ok=libBoa.debugMoi('nouveau', modele, arguments, description);
	if(!ok) return;

	// On récupère le wysiwyg
	if(typeof wysiwyg=='string') wysiwyg=$.obj(wysiwyg);
	if(!wysiwyg.style || !wysiwyg.ref) {
		libBoa.alert(global.action.erreur);
		return false;
	}

	var e1, e2, w, wysiwyg=wysiwyg.ref;
	try {
		wysiwyg[action]();
	} catch(e1) {
		try {
			w=action.split('/');
			wysiwyg.executer(w[0], w[1]);
		} catch(e2) {
			libBoa.alert(libBoa.appliquerTemplate(global.action.mauvaise_fct, {fct:action}));
		}
	}
	wysiwyg=e1=e2=o=ok=modele=w=description=null;
};



/*
--------------------------------------------------------------------------------

 FIN DU PACKAGE : Commentaire de l'auteur
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   Aucun commentaire.


--------------------------------------------------------------------------------

 INFORMATIONS SUR L'AUTEUR
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   Boa est le premier développeur et le fondateur de  la  bibliothèque  Mirage-E,
 avec une centaine d'heures de travail à son actif.
   Pour plus d'informations, visitez son site web : http://1boa.info

--------------------------------------------------------------------------------
*/
	libBoa.v.pack_wysiwyg=1;
})(libBoa);