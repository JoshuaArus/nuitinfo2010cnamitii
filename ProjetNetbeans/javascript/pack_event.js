(function(libBoa) {
/*
--------------------------------------------------------------------------------
                            Package pack_event.js
                                  Version 1
                               Nom court : ev
                                 Auteur: Boa
--------------------------------------------------------------------------------

 PACK_EVENT.JS
 �������������
   Ajoute un sous objet  ev  �  la biblioth�que.  Ce  sous  objet  contient  les
 fonctions en rapport avec les �v�nements dans la page.

--------------------------------------------------------------------------------

 ACTIONS EFFECTU�ES
 ������������������
   ---


--------------------------------------------------------------------------------

 CONFIGURATION
 �������������
   Vous  pouvez  changer  la langue du package suivant les langages disponibles.
 Langages disponibles actuellements : Fran�ais (fr).

*/
	var langue='fr';
/*

  Pour toute proposition de traduction,  contactez-moi  via le site web officiel
 http://mirage-e.com !


--------------------------------------------------------------------------------

 AIDE DES FONCTIONS ET VARIABLES DU PACKAGE
 ������������������������������������������
   libBoa.
         .ev.
            .obj()
            .souris()
            .ajouterEv()

--------------------------------------------------------------------------------

 LANGUES DU PACK
 ���������������
*/

	var global = {
		langue : langue,

		fr : {
			obj : {
				description : 'La fonction renvoie l\'objet qui a activ� l\'�v�nement ev.'
			},
			souris : {
				description : ''
			},
			ajouterEv : {
				description : 'Ajoute un �v�nement de type "type_ev" � l\'objet "obj". Lorsque l\'action est r�alis�e, la fonction "action" est appel�e.'
			}
		}

	};
	global = global[langue];

/*
--------------------------------------------------------------------------------

 PACKAGE
 �������
   � partir d'ici, ne touchez plus � rien !


--------------------------------------------------------------------------------

 PROCESSUS
 ���������
   Les diff�rentes actions � effectuer lorsque l'utilisateur fait quelque chose,
 comme bouger la souris.



   Les variables :
   ���������������
*/
	var Evenements = [];
	libBoa.ev = {};



/*
   Les �v�nements sp�ciaux � ajouter :
   �����������������������������������
    initPack ne sera lanc� qu'� la fin du package pour qu'il puisse fonctionner.

*/
function initPack() {



	/*  Sous processus
	 |  ��������������
	 *   Lorsqu'on quitte la fen�tre.
	 |
	 */

	function horsFenetre(ev) {
		for(var i in Evenements['windowfocusoff']) {
			var e = Evenements['windowfocusoff'][i];
			if(e.obj==obj) e.activer(ev);
		}
	}




	/*  Sous processus
	 |  ��������������
	 *   Lorsqu'on revient sur la fen�tre.
	 |
	 */

	function entreFenetre(ev) {
		for(var i in Evenements['windowfocuson']) {
			var e = Evenements['windowfocuson'][i];
			if(e.obj==obj) e.activer(ev);
		}
	}




	/*  Sous processus
	 |  ��������������
	 *   � chaque mouvement de souris.
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
	 |  ��������������
	 *   On ajoute les �v�nements que mirage utilise.
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
 ���������
*/


/*  object obj(Event ev)
 |  ��������������������
 *   La fonction renvoie l'objet qui a activ� l'�v�nement ev.
 |
 */

libBoa.ev.obj = function(ev) {
	if(ev.mirageEv) return ev.mirageEv.obj;
	ev = window.event || ev;
	ev = ev.target || ev.srcElement;
	return ev;
}




/*  object souris(Event ev, [string/object] obj)
 |  ��������������������������������������������
 *   souris() renvoie un objet contenant :
 |  -  x    : La distance en pixels � gauche du curseur de la souris
 |  -  y    : La distance en pixels en haut du curseur de la souris
 |
 *   Si obj est pr�cis�, on renvoit la position du curseur dans cet objet.
 |
 */

libBoa.ev.souris = function(ev) {
	var res={};
	ev = window.event || ev;
	var body = document.body;
	var obj;

	// On r�cup�re l'objet
	if(arguments[1]) {
		obj=arguments[1];
		if(typeof obj=='string') obj=libBoa.obj(obj);
		if(!obj.style) {
			// TODO : Objet introuvable
			return;
		}
	}

	// On r�cup�re les coordonn�es de la souris
	if(libBoa.ie) {
		res.x = ev.x + body.scrollLeft - 1;
		res.y = ev.y + body.scrollTop - 1;
	} else {
		res.x = ev.pageX;
		res.y = ev.pageY;
	}

	// On r�cup�re les coordonn�es par rapport � un objet
	if(obj) {
		res.x -= obj.offsetLeft;
		res.y -= obj.offsetTop;
	}

	return res;
}




/*  Classe Evenement(object obj, function action, string type)
 |  ����������������������������������������������������������
 *   Classe priv�e.
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
 |  �������������������������������������������������������������
 *   Ajoute un �v�nement de type "type_ev" � l'objet "obj". Lorsque l'action est
 | r�alis�e, "action" est appel�e.
 |
 *   Liste des �v�nements multi plateforme & particuliers � la libBoa :
 |  - DOMContentLoaded : L'arborescence Html est charg�e.
 |  - mouseon  : La souris bouge sur l'objet.
 |  - mouseoff : La souris bouge sur un autre objet que celui qui a l'�v�nement.
 |  - windowFocusOn : on entre sur la fen�tre actuelle.
 |  - windowFocusOff : on quitte la fen�tre actuelle.
 |
 */

libBoa.ev.ajouterEv = function(obj, type_ev, action) {
	var description=global.ajouterEv.description;
	var modele='string/htmlobject/document -obj-, string -ev-, function -fct-';
	//var ok=libBoa.debugMoi('ajouterEv', modele, arguments, description);
	var ok = true;
	if(!ok) return;

	// On r�cup�re l'objet si c'est son id qu'on a re�u
	if(typeof obj=='string') obj=libBoa.obj(obj);
	if(!obj.style && obj!=document) {
		//TODO : Erreur objet
		return;
	}

	// �v�nements sp�ciaux
	var types = ['mouseon', 'mouseoff', 'domcontentloaded', 'windowfocuson', 'windowfocusoff'];
	type_ev=type_ev.toLowerCase();
	if(type_ev=='domcontentloaded') return libBoa.avecDomCharge(action);
	if(libBoa.in_array(type_ev, types)) {
		if(!Evenements[type_ev]) Evenements[type_ev]=[];
		var ev = new Evenement(obj, action, type_ev);
		Evenements[type_ev].push(ev);
		return;
	}

	// On ajoute l'�v�nement � l'objet
	if(libBoa.ie) {
		obj.attachEvent('on'+type_ev, action);
	} else {
		obj.addEventListener(type_ev, action, true);
	}
};




/*
--------------------------------------------------------------------------------

 FIN DU PACKAGE : Commentaire de l'auteur
 ����������������������������������������
   Aucun commentaire.


--------------------------------------------------------------------------------

 INFORMATIONS SUR L'AUTEUR
 �������������������������
   Boa est le premier d�veloppeur et le fondateur de  la  biblioth�que  Mirage-E,
 avec une centaine d'heures de travail � son actif.
   Pour plus d'informations, visitez son site web : http://1boa.info

--------------------------------------------------------------------------------
*/
	initPack();
	initPack=null;
	libBoa.v.pack_event=1;
})(libBoa);