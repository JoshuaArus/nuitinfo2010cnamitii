(function(libBoa) {
/*
--------------------------------------------------------------------------------
                             Package pack_str.js
                                  Version 1
                                      
                                 Auteur: Boa
--------------------------------------------------------------------------------

 PACK_STR.JS
 �����������
   Ajoute  les  fonctions  concernant  le traitement des  cha�nes  de  caract�re
 � la biblioth�que.

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
         .trim()
         .remplacer()

--------------------------------------------------------------------------------

 LANGUES DU PACK
 ���������������
*/

	var global = {
		langue : langue,

		fr : {
			trim : {
				description : 'Supprime les espaces en d�but et en fin de cha�ne.'
			},
			remplacer : {
				description : 'Remplace toutes les occurences de "recherche" par "remplace" dans "variable".',
				erreur : 'libBoa.remplacer :\nLes deux tableaux n\'ont pas la m�me taille.'
			}
		}

	};
	global=global[global.langue];

/*

--------------------------------------------------------------------------------

 PACKAGE
 �������
   � partir d'ici, ne touchez plus � rien !


--------------------------------------------------------------------------------

 PROCESSUS
 ���������
   ---


--------------------------------------------------------------------------------

 FONCTIONS
 ���������
*/



/*  string trim(string str)
 |  �����������������������
 *   M�me utilisation que trim() en php. Cette  fonction  supprime  les  espaces
 | en d�but et en fin de cha�ne.
 |
 */

libBoa.trim = function(str) {
	var description=global.trim.description;
	var ok=libBoa.debugMoi('trim', 'string -str-', arguments, description);
	if(!ok) return '';

	str=str.replace(/^\s+/, ''); // supprime les espaces diverses (=\s) en d�but de cha�ne
	str=str.replace(/\s+$/, ''); // idem en fin de cha�ne
	ok=description=null;
	return str;
}



/*  string remplacer(string/array recherche, string/array remplace, string variable, [number] nb_fois)
 |  ��������������������������������������������������������������������������������������������������
 *   Remplace toutes  les occurences  de  " recherche "  par  " remplace "  dans
 | " variable ". Si  un  nombre  est ensuite  pr�cis�, on r�p�te le remplacement
 | " nb_fois " fois.
 |
 */

libBoa.remplacer = function(recherche, remplace, variable, nb_fois) {
	var description, modele, ok, str_rech, str_remp, i, w, l_rech, l_remp, rech, remp;
	description=global.remplacer.description;
	modele='string/array -normal-, string/array -remplace-, string -variable-, [number] -nb_fois-';
	ok=libBoa.debugMoi('remplacer', modele, arguments, description);
	if(!ok) return liberer('');

	str_rech = (typeof recherche=='string');
	str_remp = (typeof remplace=='string');
	if(typeof nb_fois=='undefined' || nb_fois<1) nb_fois=1;

	if(str_rech) recherche=new RegExp(libBoa.echapperRegex(recherche), 'g');
	if(str_rech && str_remp) {
		for(i=0;i<nb_fois;i++) {
			variable=variable.replace(recherche, remplace);
		}
		return liberer(variable);
	}

	if(!str_rech && str_remp) {
		str_remp=false;
		l_rech=recherche.length;
		w=remplace;
		remplace=[];
		for(i=0;i<l_rech;i++) remplace.push(w);
	}

	if(!str_rech && !str_remp) {
		l_rech=recherche.length;
		l_remp=remplace.length;
		if(l_rech != l_remp) {
			libBoa.alert(global.remplacer.erreur);
			return '';
		}
		for(i=0;i<l_rech;i++) {
			rech=recherche[i];
			remp=remplace[i];
			variable=arguments.callee(rech, remp, variable, nb_fois);
		}
		return liberer(variable);
	}
	return liberer('');

	function liberer(res) {
		description=modele=ok=str_rech=str_remp=i=w=l_rech=l_remp=rech=remp=liberer=recherche=remplace=variable=null;
		return res;
	}
}




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
	libBoa.v.pack_str=1;
})(libBoa);