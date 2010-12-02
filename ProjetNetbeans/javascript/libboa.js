(function(libBoa) {
/*
-------------------------------------------------------------------------------
                              Package libboa.js
                                  Version 1
                                      
                                 Auteur: Boa
-------------------------------------------------------------------------------

 LIBBOA.JS
 ���������
   Le  package  obligatoire  de  la  biblioth�que  Mirage-e.  Il  contient  les
 fonctions de base de la biblioth�que, et ne requiert aucune configuration.

-------------------------------------------------------------------------------

 ACTIONS EFFECTU�ES
 ������������������
   Rajoute deux classes CSS : element_javascript et noscript.  Ces deux classes
 peuvent �tre utilis�es pour cacher les  �l�ments  javascript  aux personnes ne
 l'ayant pas activ�. En r�sum� : si  le  javascript  est  activ�, les  �l�ments
 portant la classe noscript ne seront pas visibles, et les �l�ments portant  la
 classe element_javascript le seront. Et inversement si le javascript n'est pas
 activ�. Il faut param�trer manuellement la classe css  element_javascript pour
 qu'elle fonctionne. Rajoutez la ligne suivante au bas de votre css :
 .element_javascript { display:none; visibility:hidden; }

   Le programme s'occupe �galement de renseigner arbo_ok d�s que l'arborescence
 HTML est charg�e.


-------------------------------------------------------------------------------

 CONFIGURATION
 �������������
   Vous  pouvez  changer la langue du package suivant les langages disponibles.
 Langages disponibles actuellements : Fran�ais (fr).

*/
	var langue='fr';
/*

  Pour toute proposition de traduction,  contactez-moi via le site web officiel
 http://mirage-e.com !



-------------------------------------------------------------------------------

 AIDE DES FONCTIONS ET VARIABLES DU PACKAGE
 ������������������������������������������
   libBoa.
         .obj()
         .echapperRegex()
         .appliquerTemplate()
         .implementer()
         .in_array()
         .alert()
         .toggle()
         .confirmer()
         .avecDomCharge()
         .arbo_ok

-------------------------------------------------------------------------------

 LANGUES DU PACK
 ���������������
*/

	var global = {
		langue : langue,

		fr : {
			obj : {
				description : 'R�cup�re un objet dans la page avec son id ou sa classe css. Il faut d�buter le nom recherch� par un point . lorsqu\'il s\'agit d\'une recherche par classe.\nExemples : libBoa.obj("id") ou libBoa.obj(".classe")'
			},
			typeDe : {
				description : 'Renvoie le type d\'un objet tel que Mirage-e l\'utilise.'
			},
			echapperRegex : {
				description : 'La fonction permet d\'�chapper les caract�res sp�ciaux utilis�s dans l\'objet javascript RegExp :\n| . ^ $ ( ) [ ] - { } ? * + \ /'
			},
			appliquerTemplate : {
				description : 'La fonction recherche dans "cha�ne" les variables $[variables] contenues dans "variables", et les remplace par leur valeur.'
			},
			implementer : {
				description : 'Impl�mente le contenu de l\'objet "contenu" � l\'objet "obj". En cas de concordance dans les deux objets : par d�faut, "ecraser" vaut true, et dans ce cas c\'est la valeur de "contenu" qui est conserv�e, sinon c\'est la valeur de "obj" qui sera conserv�e.'
			},
			in_array : {
				description : 'V�rifie si "chaine" est une valeur dans "t".'
			},
			alert : {
				description : '�quivalent de la fonction alert en javascript, sauf qu\'elle est contr�l�e par la biblioth�que Mirage-E. Dans une future version, elle proposera des alert plus agr�ables � voir.'
			},
			toggle :  {
				description : 'Modifie l\'affichage de l\'objet obj. Soit on l\'affiche, soit on le cache.',
				erreur      : 'toggle :\nL\'objet � afficher/� cacher est introuvable.'
			},
			confirmer : {
				description : 'Demande confirmation � l\'utilisateur avant de continuer un script.'
			},
			avecDomCharge : {
				description : 'Lance la fonction "fct" une fois le DOM (l\'arborescence HTML) charg�e.'
			}
		}
	};
	global=global[global.langue];

/*
-------------------------------------------------------------------------------

 PACKAGE
 �������
   � partir d'ici, ne touchez plus � rien !


-------------------------------------------------------------------------------

 PROCESSUS
 ���������
*/


	/*  Processus pour le rajout des classes CSS
	 |
	 *   Simplifi� avec un document.write  pour  assurer  la  compatibilit�
	 | avec Internet Explorer.
	 |
	 */

	document.write('\n<style type="text/css">\n.element_javascript { visibility:visible; display:inline; }\n');
	document.write('.noscript { visibility:hidden; display:none; }\n</style>');




	/*  Processus pour la variable arbo_ok
	 |
	 *  D�termine si l'arborescence HTML est charg�e.
	 |
	 */

	libBoa.arbo_ok=false;
	(function() {
		// On lancera des tests toutes les 50ms jusqu'� ce que l'arbo soit charg�e
		// (uniquement pris en compte pour ie, safari et opera)
		var ecart=50, e;

		if(libBoa.ie) {
			// On cr�er un div
			if(typeof divTest=='undefined') var divTest = document.createElement('div');

			// Sur le site de microsoft, il est indiqu� que doScroll ne fonctionne que quand l'arbo est charg�e
			try {
				divTest.doScroll('left');
				divTest=null;
				return liberer();

			} catch(e) {
				setTimeout(arguments.callee, ecart);
			}
			return;
		}

		if(libBoa.safari || libBoa.opera) {
			// Safari et opera ont, de base, l'attribut readyState qui indique si l'arbo est charg�e ou non
			if(document.readyState=='loaded' || document.readyState=='complete') return liberer();
			setTimeout(arguments.callee, ecart);
			return;
		}

		// Sous Firefox et le reste en g�n�ral, on utilise l'�v�nement DOMContentLoaded
		document.addEventListener('DOMContentLoaded', liberer, false);

		function liberer() {
			liberer=e=ecart=null;
			libBoa.arbo_ok=true;
		}
	})();
/*



-------------------------------------------------------------------------------

 FONCTIONS
 ���������
*/



/*  string typeDe(mixed o)
 |  ����������������������
 *   Renvoie le type d'un objet tel que Mirage-e l'utilise.
 |
 */

libBoa.typeDe = function(o) {

	// Fix IE
	if(o+''=='undefined' && !o) return 'undefined';

	// Type de base
	var res = typeof o;

	// Tableaux
	if(o instanceof Array) {
		res='array';
	}

	// Objet Html
	try {
		if(o instanceof HTMLElement) {
			res='htmlobject';
		}
	} catch(e) {
		if(o.style) {
			res='htmlobject';
		}
	}

	// Document Html
	if(res!='htmlobject') {
		try {
			if(o instanceof HTMLDocument) {
				res='document';
			}
		} catch(e) {
			if(o.all) {
				res='document';
			}
		}
	}

	return res;
};




/*  htmlobject/object obj(string nom)
 |  ���������������������������������
 *   R�cup�re un  objet  dans  la  page  via  son  id  ou  sa  classe. Pour une
 | r�cup�ration par classe, il faut rajouter un point devant le nom.
 |
 *   Nota Bene : la r�cup�ration par id se fait  par  d�faut,  et  placer  un #
 | devant le nom est autoris� par la libBoa, mais peu utile.
 |
 */

libBoa.obj = function(nom) {
	var description, modele, ok, t, res, rech, i;
	description=global.obj.description;
	modele='string -nom-';
	ok=libBoa.debugMoi('htmlobject/object obj', modele, arguments, description);
	if(!ok) return liberer({});

	// R�cup�ration par classe
	if(nom.indexOf('.')==0) {
		nom=nom.substring(1);
		t=document.getElementsByTagName('*');
		res=[];
		nom=libBoa.echapperRegex(nom);
		rech=new RegExp(nom, 'gi');
		for(i in t) {
			if(rech.test(t[i].className) || rech.test(t[i].className)) res.push(t[i]);
			
		}
		return liberer(res);
	}

	// R�cup�ration par id
	if(nom.indexOf('#')==0) nom=nom.substring(1);

	res=document.getElementById(nom);
	if(!res) res={};
	return liberer(res);

	function liberer(b) {
		description=modele=ok=t=res=rech=i=liberer=nom=null;
		return b;
	}
};




/*  string echapperRegex(string chaine)
 |
 *   �chappe les caract�res sp�ciaux des Regex.
 |
 */

libBoa.echapperRegex = function(str) {
	var nom='string echapperRegex';
	var modele='string -cha�ne-';
	var description=global.echapperRegex.description;
	var ok=libBoa.debugMoi(nom, modele, arguments, description);
	if(!ok) return '';

	var r=/[|.^$()[\]\-{}?*+\\]/g;
	str=str.replace(r, '\\$&');
	r=nom=modele=description=ok=null;
	return str;
};




/*  string appliquerTemplate(string chaine, array/object variables)
 |  ���������������������������������������������������������������
 *   On recherche dans "chaine" les variables contenues dans "variables", et on
 | les remplace par leur valeur.
 |
 *   Un exemple sera plus explicite :
 |
 | Si c vaut "J'adore le march� ! On y trouve des $[fruit0] et des $[fruit1] !"
 | et si v vaut { fruit0:'bananes', fruit1:'pommes' }
 |
 | La fonction appliquerTemplate(c, v) renverra alors :
 | J'adore le march� ! On y trouve des bananes et des pommes !
 |
 */

libBoa.appliquerTemplate = function(chaine, variables) {
	var clef, val, rech;
	var nom='string appliquerTemplate';
	var modele='string -cha�ne-, array/object -variables-';
	var description=global.appliquerTemplate.description;
	var ok=libBoa.debugMoi(nom, modele, arguments, description);
	if(!ok) return '';

	for(clef in variables) {
		val=variables[clef];
		rech=new RegExp('\\$\\['+clef+']', 'g');
		chaine=chaine.replace(rech, val);
	}
	clef=val=rech=variables=nom=modele=description=ok=null;
	return chaine;
};




/*  implementer(object obj, object contenu, [boolean] ecraser)
 |  ����������������������������������������������������������
 *   Impl�mente le  contenu  de  l'objet "contenu"  �  l'objet "obj". En cas de
 | concordance dans les deux objets :
 |
 |  - Par d�faut, "ecraser"  vaut  true,  et  dans  ce  cas c'est la valeur  de
 |    "contenu" qui est conserv�e.
 |
 |  - Si "ecraser" vaut false, c'est la valeur de "obj" qui est conserv�e.
 |
 */

libBoa.implementer = function(obj, contenu, ecraser) {
	var nom='implementer';
	var modele='object -obj-, object -contenu-, [boolean] -�craser-';
	var description=global.implementer.description;
	var ok=libBoa.debugMoi(nom, modele, arguments, description);
	if(!ok) return;

	var i, j;
	if(ecraser+''=='undefined') ecraser=true;
	for(i in contenu) {
		if(!ecraser && i in obj) continue;
		obj[i]=contenu[i];
	}
	i=j=obj=contenu=ecraser=nom=modele=description=ok=null;
};




/*  boolean in_array(string chaine, object/array t)
 |  �����������������������������������������������
 *   V�rifie  si  "chaine"  est une valeur dans "t". Renvoit  true si  elle s'y
 | trouve, false sinon.  C'est l'�quivalent de in_array en php, ce qui explique
 | le fait que son nom ne soit pas en camelCase.
 |
 *   Nota Bene :
 |   �����������
 | - Pour  v�rifier  si  une  clef est dans un tableau t, utilisez la propri�t�
 |   native du javascript.
 |   Exemple : if('clef_recherch�e' in tableau) {} else {}
 |
 */

libBoa.in_array = function(chaine, t) {
	var nom, modele, description, w, ok, i;
	nom='boolean in_array';
	modele='string -cha�ne-, object/array -tableau-';
	description=global.in_array.description;
	if(typeof chaine!='string' && typeof chaine!='undefined') {
		w=t;
		t=chaine;
		chaine=w;
	}
	ok=libBoa.debugMoi(nom, modele, arguments, description);
	if(!ok) return liberer(false);

	// On regarde si la cha�ne est dans le tableau
	for(i in t) {
		if(t[i]==chaine) return liberer(true);
	}
	return liberer(false);

	function liberer(b) {
		nom=modele=description=w=chaine=t=ok=i=liberer=null;
		return b;
	}
};




/*  alert(string message)
 |  ���������������������
 *   La fonction est l'�quivalent de  la  fonction  alert  en  javascript, sauf
 | qu'elle est contr�l�e par la libBoa.
 |
 */


libBoa.alert = function(message) {
	var nom='alert';
	var modele='string -message-';
	var description=global.alert.description;
	var ok=libBoa.debugMoi(nom, modele, arguments, description);
	if(!ok) return;

	if(libBoa.debug) {
		if(libBoa.interruption) alert(message);
		else throw new Error(message);
	}
};




/*  toggle(string/htmlobject obj, [string] action, [object/array] style)
 |  ��������������������������������������������������������������������
 *   Change l'affichage de l'objet obj. Si il est cach�, on l'affiche. Sinon on
 | le cache.
 |
 *   Si l'action est d�finie,  on  l'affiche (action='afficher') ou on le cache
 | (action='cacher').
 |
 */

libBoa.toggle = function(obj, action, style) {
	var nom, description, modele, ok, i;
	nom='toggle';
	description=global.toggle.description;
	modele='string/htmlobject -obj-, [string] -action-, [object/array] -style-';
	ok=libBoa.debugMoi(nom, modele, arguments, description);
	if(!ok) return liberer();

	if(libBoa.typeDe(obj)=='string') obj=libBoa.obj(obj);
	if(!obj.style) {
		libBoa.alert(global.toggle.erreur);
		return liberer();
	}

	// On r�cup�re l'action si elle est donn�e
	if(action+''=='undefined' || (action!='montrer' && action!='afficher' && action!='cacher')) action='';
	if(action=='montrer') action='afficher';
	if(style+''=='undefined') style={};

	// On r�cup�re le style de l'objet
	obj=obj.style;

	// On regarde si l'objet est affich� ou non
	if(obj.display=='none' && action=='') action='afficher';
	if(action=='') action='cacher';

	// On cache ou on affiche
	if(action=='cacher') {
		obj.display='none';
		obj.visibility='hidden';
	} else {
		obj.display='block';
		obj.visibility='visible';
	}

	// On applique le style pass� en param�tre � l'objet
	for(i in style) obj[i]=style[i];
	liberer();

	function liberer() {
		nom=description=modele=ok=i=liberer=obj=action=style=null;
	}
};





/*  boolean confirmer(string message1, [string] message2, ...)
 |  ����������������������������������������������������������
 *   Affiche  un  ou  plusieurs  confirm  du  type " �tes-vous  s�r  de... [ok]
 | [annuler]". Entrez le (les) message(s) de confirmation en param�tre(s).
 |
 *   La fonction accepte au maximum 8 messages lorsque le debug est activ�.
 |
 */

libBoa.confirmer = function() {
	var nom, args, description, modele, ok, i;
	args=arguments;
	nom='boolean confirmer';
	description=global.confirmer.description;
	modele='string -message1-,[string] -message2-,[string] -...-,[string] -...-,[string] -...-,[string] -...-,[string] -...-,[string] -...-';
	ok=libBoa.debugMoi(nom, modele, args, description);
	if(!ok) return liberer(false);

	// Pour chaque demande de confirmation on v�rifie la r�ponse. Si la r�ponse est n�gative, on renvoit false.
	for(i=0;i<args.length;i++) {
		if(!confirm(args[i])) return liberer(false);
	}
	return liberer(true);

	function liberer(b) {
		nom=args=description=modele=ok=i=liberer=null;
		return b;
	}
};




/*  avecDomCharge(function fct)
 |  ���������������������������
 *   Une fois l'arborescence charg�e, la fonction fct est lanc�e.
 |
 */

libBoa.avecDomCharge = function(fct) {
	var description, modele, ok;
	description=global.avecDomCharge.description;
	modele='function -fct-';
	ok=libBoa.debugMoi('avecDomCharge', modele, arguments, description);
	if(!ok) return;

	if(libBoa.arbo_ok) fct();
	else setTimeout(function() { libBoa.avecDomCharge(fct); }, 60);
};



/*
-------------------------------------------------------------------------------

 FIN DU PACKAGE : Commentaire de l'auteur
 ����������������������������������������
   Aucun commentaire.


-------------------------------------------------------------------------------

 INFORMATIONS SUR L'AUTEUR
 �������������������������
   Boa est le premier d�veloppeur et le fondateur de  la biblioth�que Mirage-E,
 avec une centaine d'heures de travail � son actif.
   Pour plus d'informations, visitez son site web : http://1boa.info

-------------------------------------------------------------------------------
*/
	libBoa.v.libboa=1;
})(libBoa);