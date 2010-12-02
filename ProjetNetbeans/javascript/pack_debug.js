(function(libBoa) {


// TODO texte & variables


/*
-------------------------------------------------------------------------------
                             Package pack_debug.js
                                  Version 1
                                      
                                 Auteur: Boa
-------------------------------------------------------------------------------

 PACK_DEBUG.JS
 ¯¯¯¯¯¯¯¯¯¯¯¯¯
   Ajoute  les  fonctions  de debug  aux  fonctions   de   base   de  la
 bibliothèque.  La  fonction  de  vérification  d'un  formulaire  est  également
 ajoutée, ainsi que les fonctions de gestion de classe.

   Note :  Bien qu'ajax soit devenu courant, il ne reste pas moins à éviter dans
 certains cas. Tout le monde n'autorise pas non plus l'usage des objets ActiveX.
 À méditer, donc.

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
         .debugMoi()
         .aPropos()

--------------------------------------------------------------------------------

 LANGUES DU PACK
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/

	var global = {
		langue : langue,

		fr : {
			debugMoi : {
				modeles : {
					infos               : 'Fonction :\n$[renvoit] $[nom]($[args])\n\nExplications :\n$[details]',
					erreur_utilisation  : '$[nom] :\nMauvaise utilisation de la fonction. Utilisez libBoa.$[nom]() pour des explications supplémentaires.',
					erreur_args         : '$[nom] :\nLe nombre d\'arguments est inférieur au nombre d\'arguments exigé ou le type d\'un ou de plusieurs arguments est invalide.',
					erreur_trop_d_args  : '$[nom] :\nUn ou plusieurs arguments semblent inutiles.',
					erreur_type         : '$[nom] :\n"$[type]" est un type inconnu. Liste des types reconnus :\n\n$[liste_types]',
					erreur_pas_d_args   : '$[nom] :\nL\'argument n°$[num_argument] demandé est introuvable.',
					erreur_facultatif   : '$[nom] :\n$[type] (argument n°$[num_argument]) est facultatif.',
					erreur_type_args    : '$[nom] :\n$[type] (argument n°$[num_argument]) est différent de $[type_demande] demandé.'
				},
				description : 'La fonction est à peu près présente dans toutes les fonctions pour vérifier rapidement que les paramètres reçus sont corrects et pour faciliter le debug en général des programmes.'
			},
			aPropos : {
				description : 'Affiche les composants de la libBoa. Cette fonction est utile pour effectuer des tests ou des vérifications d\'imports de package.',
				texte       : '<h2 style="font-size:20px;text-align:center;">Composants de <a href="http://mirage-e.com">Mirage-E</a></h2><div style="text-align:center;"><em>$[nbVar] variables et $[nbFct] fonctions</em></div>'
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
   ---


--------------------------------------------------------------------------------

 FONCTIONS
 ¯¯¯¯¯¯¯¯¯
*/


/*   boolean debugMoi(string nom_fonction, string modele, array args, string infos)
 |   ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Cette fonction est à peu près  présente  dans  toutes  les  fonctions pour
 | vérifier rapidement que les paramètres reçus par une fonction sont corrects.
 |
 *   La variable modele est présentée sous la forme d'une chaîne type_argument0
 | -nom_argument0-, type_argument1 -nom_argument1-, ...
 |
 *   On compare  ensuite  le  modèle  aux  arguments  réellements  reçus par la
 | fonction, contenus dans la variable args.
 |
 *   En cas d'erreur de  correspondance  sur  les  types  attendus, la fonction
 | renverra false, true sinon.
 |
 *   Pour autoriser plusieurs types pour une même variable, séparez-les  par un
 | slash '/'. Si la variable peut prendre tous les types, utilisez mixed.
 |
 *   Le  type d'une variable facultative  sera  indiqué  entre  crochets ( ex :
 | '[string]').
 |
 *   Types acceptés :
 |
 |     - number
 |     - boolean
 |     - string
 |     - object
 |     - mixed
 |     - function
 |     - array
 |     - htmlobject
 |     - document
 |
 */

libBoa.debugMoi = function(nom, modele, args_recus, details) {

	// Debug désactivé
	if(! libBoa.debug) return true;

	// Variables de la fonctions
	var args, al, modeles, infos, type, types, type_demande, types_demandes;
	var types_possibles, i, t, j, w, facultatif, langue, trouve, k;
	args = arguments;
	al = args.length;

	// Modèles
	langue = global.debugMoi;
	modeles = langue.modeles;

	// Infos de debugMoi
	infos = {
		nom     : 'debugMoi',
		args    : 'string nom_fonction, string modele, array args, string infos',
		details : langue.description,
		renvoit : 'boolean'
	}

	// Gestion des erreurs
	if(al==0) {
		libBoa.alert(libBoa.appliquerTemplate(modeles.infos, infos));
		return liberer(false);
	}
	if(al==1 && typeof args[0]=='object') {
		libBoa.alert(libBoa.appliquerTemplate(modeles.erreur_utilisation, infos));
		return liberer(false);
	}
	if(al<4 || typeof args[0]!='string' || typeof args[1]!='string'
	        || typeof args[2]!='object' || typeof args[3]!='string') {
		libBoa.alert(libBoa.appliquerTemplate(modeles.erreur_args, infos));
		return liberer(false);
	}
	if(al>4) {
		libBoa.alert(libBoa.appliquerTemplate(modeles.erreur_trop_d_args, infos));
	}

	// Infos de la fonction
	i=nom.split(' ');
	if(i.length==1) {
		i[1]=i[0];
		i[0]='';
	}
	infos = {
		nom     : i[1],
		args    : modele.replace(/-/g, '').replace(/\s{1,}/g, ' '),
		details : details,
		renvoit : i[0]
	};

	// On vérifie que les types entrés dans le modèle sont corrects et existent

	types=modele.replace(/-[^-]*-/g, '').replace(/\s/g, '').split(',');
	types_possibles = ['number', 'boolean', 'string', 'object', 'mixed', 'function', 'array', 'htmlobject', 'document'];
	k=types.length;
	for(i=0 ; i<k ; i++) {
		t=types[i].split('/');

		// Pour chaque type parcouru
		al=t.length;
		for(j=0 ; j<al ; j++) {
			if(t[j]=='') continue;

			// On supprime les crochets en début et en fin de variables facultatives
			t[j]=t[j].replace(/^\[/, '').replace(/]$/, '');

			// Si le type n'est pas un type possible
			trouve=false;
			for(w in types_possibles) {
				if(types_possibles[w]==t[j]) {
					trouve=true;
					break;
				}
			}
			if(!trouve) {
				infos.liste_types='- '+types_possibles.join('\n- ');
				infos.type=t[j];
				libBoa.alert(libBoa.appliquerTemplate(modeles.erreur_type, infos));
				return liberer(false);
			}
		}
	}

	// On vérifie le modèle reçu avec celui attendu
	args=args_recus;

	for(i=0 ; i<types.length ; i++) {

		// Recherche du type de l'argument parcouru
		type = libBoa.typeDe(args[i], 1);

		// Variables
		type_demande = types[i];
		facultatif = false;
		infos.num_argument = i+1;
		infos.type = type;

		// On a besoin d'aucun argument mais on voudrait la construction
		if(type_demande=='' && i==0 && (args[0]=='infos' || args[0]=='info' || args[0]=='help' || args[0]=='aide')) {
			libBoa.alert(libBoa.appliquerTemplate(modeles.infos, infos));
			return liberer(false);
		}

		// On n'a besoin d'aucun argument
		if(type_demande=='' && i==0 && args[0]+''=='undefined') return liberer(true);

		// L'argument parcouru est facultatif
		if(type_demande.indexOf('[')==0) facultatif=true;

		// On supprime les crochets pour comparer dans le cadre des arguments facultatifs
		type_demande=type_demande.replace(/^\[/, '').replace(/]$/, '');
		infos.type_demande=type_demande;

		// L'argument est introuvable, n'est pas facultatif et c'est le premier. On explique comment utiliser la fonction.
		if(type=='undefined' && !facultatif && i==0 && type_demande!='') {
			libBoa.alert(libBoa.appliquerTemplate(modeles.infos, infos));
			return liberer(false);
		}

		// L'argument est introuvable et n'est pas facultatif
		if(type=='undefined' && !facultatif) {
			libBoa.alert(libBoa.appliquerTemplate(modeles.erreur_pas_d_args, infos));
			return liberer(false);
		}

		// Argument facultatif et introuvable. C'est possible et autorisé donc on passe
		if(type=='undefined' && facultatif) continue;

		// Le type demande peut être n'importe quoi. Donc de sûr c'est bon, on continue.
		if(type_demande=='mixed') continue;

		// On créer un tableau des types acceptés ici
		types_demandes=type_demande.split('/');

		// Le type n'est pas accepté
		trouve=false;
		for(w in types_demandes) {
			if(types_demandes[w]==type) {
				trouve=true;
				break;
			}
		}
		if(! trouve) {
			if(type_demande=='') libBoa.alert(libBoa.appliquerTemplate(modeles.erreur_facultatif, infos));
			else libBoa.alert(libBoa.appliquerTemplate(modeles.erreur_type_args, infos));
			return liberer(false);
		}
	}
	return liberer(true);

	function liberer(res) {
		args=al=modele=modeles=infos=type=types=type_demande=types_demandes=trouve=langue=null;
		types_possibles=i=t=w=k=j=facultatif=nom=details=args_recus=liberer=null;
		return res;
	}
};




/*  aPropos()
 |  ¯¯¯¯¯¯¯¯¯
 *   Écrit les fonctions dispos dans  la  bibliothèque  et  la  version  de  la
 | bibliothèque. Attention donc, il  y  a  utilisation  de  document.write,  et
 | insertion de  html  sans DOM. La fonction est plus destinée aux utilisateurs
 | insertion de  html  sans DOM. La fonction est plus destinée aux utilisateurs
 | de  la  bibliothèque  pour  des tests ou des vérifications, et non pour  une
 | utilisation professionelle.
 |
 */

libBoa.aPropos = function() {
	var nom = 'aPropos';
	var description = global.aPropos.description;
	var ok = libBoa.debugMoi(nom, '', arguments, description);
	if(!ok) return;

	// On créer le div d'infos et on lui applique un style
	document.write('<div id="___libBoa_aPropos">&nbsp;</div>');
	var div=libBoa.obj('___libBoa_aPropos');
	div.removeAttribute('id');

	var style = {
		margin:'0',
		padding:'10px',
		display:'block',
		position:'absolute',
		top:'10px',
		right:'10px',
		backgroundColor:'#eee',
		fontFamily:'"Times New Roman", Times, serif',
		textAlign:'left',
		border:'1px solid #999',
		fontSize:'12px',
		width:'380px',
		height:'300px',
		overflow:'auto',
		color:'#444'
	};
	libBoa.implementer(div.style, style);

	// On liste le contenu de l'objet libBoa dans le div
	var nbFonctions=0, nbVariables=0;
	var w = (function(o, nom_objet) {
		var t=nom_objet.split('.');
		var nom_pack=t[t.length-1];
		var id_contenu=('___'+nom_objet).toLowerCase().replace(/\./g, '_');

		// On propose d'afficher ou de cacher les composants de chaque objet
		var res='<li>';
		res+='<a href="#" onclick="libBoa.toggle(\''+id_contenu+'\');">';
		res+=nom_pack;
		res+='</a>\n';
		res+='</li>\n';
		res+='<li style="list-style:none;padding:0;margin:0;">';
		res+='<ul style="margin:0;padding:0;padding-left:40px;';
		if(nbFonctions!=0 || nbVariables!=0) res+='display:none;visibility:hidden;';
		res+='" id="'+id_contenu+'">';
		var ac=0;

		// Pour chaque composant de l'objet
		for(var j in o) {
			var w=o[j];
			ac++;
			if(libBoa.typeDe(w)=='object') {
				res+=arguments.callee(w, nom_objet+'.'+j);
				continue;
			}
			if(libBoa.typeDe(w)=='function') {
				res+='<li>'+j+'() <a href="#" onclick="javascript:'+nom_objet+'.'+j+'();">?</a> <a href="#">+</a></li>\n';
				nbFonctions++;
				continue;
			}
			res+='<li>';
			res+=j;
			res+='</li>\n';
			nbVariables++;
		}
		if(ac==0) res+='<li>Pack non importé</li>\n';
		res+='</ul></li>\n';
		return res;
	})(libBoa, 'mirage', true);
	div.innerHTML=libBoa.appliquerTemplate(global.aPropos.texte, {nbVar:nbVariables, nbFct:nbFonctions})+w;
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
	libBoa.v.pack_debug=1;
})(libBoa);