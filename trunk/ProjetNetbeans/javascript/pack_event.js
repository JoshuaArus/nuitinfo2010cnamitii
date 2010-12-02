(function(libBoa) {
/*
--------------------------------------------------------------------------------
                            Package pack_event.js
                                  Version 1
                               Nom court : ev
                                 Auteur: Boa
--------------------------------------------------------------------------------

 PACK_EVENT.JS
 ¯¯¯¯¯¯¯¯¯¯¯¯¯
   Ajoute un sous objet  ev  à  la bibliothèque.  Ce  sous  objet  contient  les
 fonctions en rapport avec les évènements dans la page.

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


--------------------------------------------------------------------------------

 AIDE DES FONCTIONS ET VARIABLES DU PACKAGE
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   libBoa.
         .ev.
            .obj()
            .souris()
            .ajouterEv()

--------------------------------------------------------------------------------

 LANGUES DU PACK
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/

	var global = {
		langue : langue,

		fr : {
			obj : {
				description : 'La fonction renvoie l\'objet qui a activé l\'évènement ev.'
			},
			souris : {
				description : ''
			},
			ajouterEv : {
				description : 'Ajoute un évènement de type "type_ev" à l\'objet "obj". Lorsque l\'action est réalisée, la fonction "action" est appelée.'
			}
		}

	};
	global = global[langue];

/*
--------------------------------------------------------------------------------

 PACKAGE
 ¯¯¯¯¯¯¯
   À partir d'ici, ne touchez plus à rien !


--------------------------------------------------------------------------------

 PROCESSUS
 ¯¯¯¯¯¯¯¯¯
   Les différentes actions à effectuer lorsque l'utilisateur fait quelque chose,
 comme bouger la souris.



   Les variables :
   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/
	var Evenements = [];
	libBoa.ev = {};



/*
   Les évènements spéciaux à ajouter :
   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
    initPack ne sera lancé qu'à la fin du package pour qu'il puisse fonctionner.

*/
function initPack() {



	/*  Sous processus
	 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	 *   Lorsqu'on quitte la fenêtre.
	 |
	 */

	function horsFenetre(ev) {
		for(var i in Evenements['windowfocusoff']) {
			var e = Evenements['windowfocusoff'][i];
			if(e.obj==obj) e.activer(ev);
		}
	}




	/*  Sous processus
	 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	 *   Lorsqu'on revient sur la fenêtre.
	 |
	 */

	function entreFenetre(ev) {
		for(var i in Evenements['windowfocuson']) {
			var e = Evenements['windowfocuson'][i];
			if(e.obj==obj) e.activer(ev);
		}
	}




	/*  Sous processus
	 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	 *   À chaque mouvement de souris.
	 |
	 */

	function mouvementSouris(ev) {
		var obj = libBoa.ev.obj(ev);

		// Le mouseon
		for(var i in Evenements['mouseon']) {
			var e = Evenements['mouseon'][i];
			if(e.obj==obj) e.activer(ev);
		}

		// Le mouseoff
		for(var i in Evenements['mouseoff']) {
			var e = Evenements['mouseoff'][i];
			if(e.obj!=obj) e.activer(ev);
		}
	}


	/*  Sous processus
	 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯
	 *   On ajoute les évènements que mirage utilise.
	 |
	 */

	libBoa.ev.ajouterEv(document, 'mousemove', mouvementSouris);
	if(libBoa.ie) {
		libBoa.ev.ajouterEv(document, 'focusin',  entreFenetre);
		libBoa.ev.ajouterEv(document, 'focusout', horsFenetre);
	} else {
		libBoa.ev.ajouterEv(document, 'blur',  horsFenetre);
		libBoa.ev.ajouterEv(document, 'focus', entreFenetre);
	}
	mouvementSouris = entreFenetre = horsFenetre = null;
}


/*

--------------------------------------------------------------------------------

 FONCTIONS
 ¯¯¯¯¯¯¯¯¯
*/


/*  object obj(Event ev)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   La fonction renvoie l'objet qui a activé l'évènement ev.
 |
 */

libBoa.ev.obj = function(ev) {
	if(ev.mirageEv) return ev.mirageEv.obj;
	ev = window.event || ev;
	ev = ev.target || ev.srcElement;
	return ev;
}




/*  object souris(Event ev, [string/object] obj)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   souris() renvoie un objet contenant :
 |  -  x    : La distance en pixels à gauche du curseur de la souris
 |  -  y    : La distance en pixels en haut du curseur de la souris
 |
 *   Si obj est précisé, on renvoit la position du curseur dans cet objet.
 |
 */

libBoa.ev.souris = function(ev) {
	var res={};
	ev = window.event || ev;
	var body = document.body;
	var obj;

	// On récupère l'objet
	if(arguments[1]) {
		obj=arguments[1];
		if(typeof obj=='string') obj=libBoa.obj(obj);
		if(!obj.style) {
			// TODO : Objet introuvable
			return;
		}
	}

	// On récupère les coordonnées de la souris
	if(libBoa.ie) {
		res.x = ev.x + body.scrollLeft - 1;
		res.y = ev.y + body.scrollTop - 1;
	} else {
		res.x = ev.pageX;
		res.y = ev.pageY;
	}

	// On récupère les coordonnées par rapport à un objet
	if(obj) {
		res.x -= obj.offsetLeft;
		res.y -= obj.offsetTop;
	}

	return res;
}




/*  Classe Evenement(object obj, function action, string type)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Classe privée.
 |
 */

function Evenement(obj, action, type) {
	this.activer = function(ev){
		ev.mirageEv=this;
		action(ev);
	};
	this.obj = obj;
	this.type = type;
	obj = type = null;
}




/*  ajouterEv(string/htmlobject/document obj, string type_ev, function action)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Ajoute un évènement de type "type_ev" à l'objet "obj". Lorsque l'action est
 | réalisée, "action" est appelée.
 |
 *   Liste des évènements multi plateforme & particuliers à la libBoa :
 |  - DOMContentLoaded : L'arborescence Html est chargée.
 |  - mouseon  : La souris bouge sur l'objet.
 |  - mouseoff : La souris bouge sur un autre objet que celui qui a l'évènement.
 |  - windowFocusOn : on entre sur la fenêtre actuelle.
 |  - windowFocusOff : on quitte la fenêtre actuelle.
 |
 */

libBoa.ev.ajouterEv = function(obj, type_ev, action) {
	var description=global.ajouterEv.description;
	var modele='string/htmlobject/document -obj-, string -ev-, function -fct-';
	//var ok=libBoa.debugMoi('ajouterEv', modele, arguments, description);
	var ok = true;
	if(!ok) return;

	// On récupère l'objet si c'est son id qu'on a reçu
	if(typeof obj=='string') obj=libBoa.obj(obj);
	if(!obj.style && obj!=document) {
		//TODO : Erreur objet
		return;
	}

	// Évènements spéciaux
	var types = ['mouseon', 'mouseoff', 'domcontentloaded', 'windowfocuson', 'windowfocusoff'];
	type_ev=type_ev.toLowerCase();
	if(type_ev=='domcontentloaded') return libBoa.avecDomCharge(action);
	if(libBoa.in_array(type_ev, types)) {
		if(!Evenements[type_ev]) Evenements[type_ev]=[];
		var ev = new Evenement(obj, action, type_ev);
		Evenements[type_ev].push(ev);
		return;
	}

	// On ajoute l'évènement à l'objet
	if(libBoa.ie) {
		obj.attachEvent('on'+type_ev, action);
	} else {
		obj.addEventListener(type_ev, action, true);
	}
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
	initPack();
	initPack=null;
	libBoa.v.pack_event=1;
})(libBoa);