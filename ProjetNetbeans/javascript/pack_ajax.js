(function(libBoa) {
/*
--------------------------------------------------------------------------------
                             Package pack_ajax.js
                                  Version 1
                                      
                                 Auteur: Boa
--------------------------------------------------------------------------------

 PACK_AJAX.JS
 ¯¯¯¯¯¯¯¯¯¯¯¯
   Ajoute  les  fonctions  concernant  ajax  aux  fonctions   de   base   de  la
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
         .ajax()
         .xhr('aide')
         .verifFormu()
         .ajouterClasse()
         .retirerClasse()

--------------------------------------------------------------------------------

 LANGUES DU PACK
 ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
*/

	var global = {
		langue : langue,

		fr : {
			xhr : {
				description : 'La fonction créer un nouvel objet ActiveX et le renvoit. Si erreur lors de la création, on renvoit une chaîne de caractère'
			},
			ajax : {
 				description : 'Cette fonction lit le fichier en lui envoyant les paramètres en post. Pour une méthode get, passez un paramètre "method" avec pour valeur "get".\n\nSi le fichier lu ne possède aucun charset, le javascript prendra par défaut l\'utf8.\n\nUne fois le fichier reçu et correctement lu, la fonction "fct" est appelée. On lui passe comme premier argument le contenu du  fichier,  et  comme  second argument le tableau "args".',
				erreur      : 'libBoa.ajax :\nLe navigateur n\'a pas supporté la fonction. Le plus souvent cette erreur est liée au paramètrage du navigateur. (autorisez les objets ActiveX)',
				fichier_introuvable : 'libBoa.ajax :\nLa lecture du fichier "$[fichier]" a échoué.'
			},
			verifFormu : {
				description : 'La fonction vérifie les champs du formulaire "frm" et ajoute à la classe du premier champs mal rempli la classe "input_incorrect".  Si le formulaire est correctement renseigné, la fonction renvoit true.',
				erreur      : 'verifFormu :\nLe formulaire est introuvable dans la page.',
				envoi       : ' Envoi en cours... '
			},
			ajouterClasse : {
				description : 'Ajoute une classe à l\'objet "obj".',
				erreur      : 'ajouterClasse :\nL\'objet auquel vous souhaitez ajouter une classe est introuvable dans la page.'
			},
			retirerClasse : {
				description : 'Supprime la dernière classe de l\'objet obj, ou la classe précisée.',
				erreur      : 'retirerClasse :\nL\'objet auquel vous souhaitez retirer une classe est introuvable dans la page.'
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



/*  object/string xhr()
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   La fonction créer un nouvel objet ActiveX et le renvoit.  Si erreur lors de
 | la création, on renvoit une chaîne de caractère.
 |
 */

libBoa.xhr = function() {
	var nom='object/string xhr';
	var description=global.xhr.description;
	var ok=libBoa.debugMoi(nom, '', arguments, description);
	if(!ok) return 'erreur';
	var res, erreur;
	try { 
		res=new ActiveXObject('Msxml2.XMLHTTP');
	} catch(erreur) {
		try {
			res=new ActiveXObject('Microsoft.XMLHTTP');
		} catch(erreur) {
			try {
				res=new XMLHttpRequest();
			} catch(erreur) {
				res='erreur';
			}
		}
	}
	erreur=description=ok=nom=null;
	return res;
};




/*  boolean ajax(string fichier, function fct, [object/array] parametres, [array] args)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Cette fonction lit le fichier en lui envoyant les paramètres en  post.  Pour
 | une méthode get, passez un paramètre "method" avec pour valeur "get".
 |
 *   Si le fichier lu ne possède aucun charset,  le javascript prendra par défaut
 | l'utf8.
 |
 *   Une fois le fichier reçu et correctement lu,  la fonction "fct" est appelée.
 | On lui passe comme premier argument le contenu du  fichier,  et  comme  second
 | argument le tableau "args".
 |
 *   Exemple d'utilisation :
 | libBoa.ajax('fichier.php', function(contenu, args) {
 |     alert(contenu); alert(args[0]);
 | }, { method:'get', param1:'ok' }, [ 'à passer' ])
 |
 |   Si le fichier fichier.php contient <?php  echo $_POST['param1'];  ?>,  alors
 | on obtiendra deux alert: 'ok' et 'à passer'. Assurez-vous également d'être sur
 | un serveur pour effectuer le test, afin que le php soit exécuté.
 |
 */

libBoa.ajax = function(fichier, fct, parametres, args) {
	var nom, modele, description, ok, params, envoi_get, i, w, xhr, e;
	nom='boolean ajax';
	modele='string -fichier-, [function] -fct-, [object/array] -parametres-, [array] -args-';
	description=global.ajax.description;
	ok=libBoa.debugMoi(nom, modele, arguments, description);
	if(!ok) return liberer(false);

	// Paramètres facultatifs : valeurs par défaut
	if(parametres+''=='undefined') parametres={};
	if(args+''=='undefined') args=[];
	if(fct+''=='undefined') fct=function(){};

	// Nettoyage des paramètres
	params='', envoi_get=false;
	for(i in parametres) {
		w=parametres[i];
		if(w=='') continue;
		if(i=='method' && w=='get') envoi_get=true;
		params+=i+'='+encodeURIComponent(parametres[i])+'&';
	}
	params=params+'&'+(new Date).getTime();
	if(params.indexOf('&')==0) params=params.substring(1);
	parametres=params;

	// Création de l'objet xhr
	xhr=libBoa.xhr();

	// Erreur, le navigateur n'a pas supporté la création du xhr
	if(typeof xhr=='string') {
		libBoa.alert(global.ajax.erreur);
		return liberer(false);
	}

	// Fonction à exécuter à chaque changement d'état de lecture
	xhr.onreadystatechange=function() {
		if(xhr.readyState==4) {
			try { fct(xhr.responseText, args); }
			catch(e) {
				libBoa.alert(libBoa.appliquerTemplate(global.ajax.fichier_introuvable, {fichier:fichier}));
			}
			xhr=null;
		}
	}

	// Requête
	if(!envoi_get) {
		xhr.open('post', fichier, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(parametres);
	} else {
		xhr.open('get', fichier, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(null);
	}
	return liberer(true);

	function liberer(b) {
		nom=modele=description=ok=params=envoi_get=i=w=e=liberer=null;
		return b;
	}
};




/*  boolean verifFormu(string/object frm , [boolean] envoi_immediat)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   La fonction vérifie les champs du formulaire "frm" et ajoute à la classe du
 | premier champs mal rempli la classe "champs_incorrect".  Si le formulaire est
 | correctement renseigné, la fonction renvoit true.
 |
 *   Le boolean envoi_immediat est par défaut à true.  Cette  option  modifie la
 | valeur du bouton submit en "Envoi..." (valeur par défaut  modifiable  dans la
 | langue sélectionnée au début du fichier). La fonction désactive également  le
 | bouton submit dans le cas où l'utlisateur voudrai l'envoyer alors  que  c'est
 | déjà le cas.
 |
 *   Notes pour de futurs ajouts :
 | Prévoir que tous les champs ne sont pas forcément à vérifier
 | Prévoir certains champs comme "e-mail" qui doivent être mieux vérifiés
 |
 */

libBoa.verifFormu = function(frm, envoi_immediat) {
	var nom, description, modele, ok, a_verifier, i, o, type, btn_submit, valeur_btn_submit;
	nom='boolean verifFormu';
	description=global.verifFormu.description;
	modele='string/object -frm-,  [boolean] -envoi_immediat-';
	ok=libBoa.debugMoi(nom, modele, arguments, description);
	if(!ok) return liberer(true);

	// On récupère les arguments
	if(envoi_immediat+''=='undefined') envoi_immediat=true;
	if(typeof frm=='string') frm=libBoa.obj(frm);

	// Le formulaire est introuvable
	if(!frm.style) {
		libBoa.alert(global.verifFormu.erreur);
		return liberer(true);
	}

	// Types à vérifier
	a_verifier=['text', 'password', 'select-one', 'textarea'];

	// Pour chaque élément du formulaire
	for(i=0 ; i<frm.elements.length ; i++) {
		o=frm.elements[i];

		// On détermine le type
		type=o.type || o.tagName.toLowerCase();

		// On repère le bouton submit
		if(type=='submit') {
			btn_submit=o;
			valeur_btn_submit=o.value;
		}

		// Si c'est un champs vide et à vérifier
		if(o.value=='' && libBoa.in_array(a_verifier, type)) {
			libBoa.ajouterClasse(o, 'champs_incorrect');
			o.focus();
			setTimeout(function(){ libBoa.retirerClasse(o, 'champs_incorrect'); }, 2500);
			return liberer(false);
		}
	}

	if(envoi_immediat && btn_submit) {
		btn_submit.value=global.verifFormu.envoi;
		btn_submit.disabled=true;
	}

	// Dans le cas d'un retour navigateur ou d'une navigation via téléphone portable
	setTimeout(function() {
		btn_submit.value=valeur_btn_submit;
		btn_submit.disabled=false;
	}, 2500);

	return liberer(true);

	function liberer(b) {
		nom=description=modele=ok=a_verifier=i=type=liberer=frm=envoi_immediat=null;
		if(b) o=null;
		return b;
	}
};




/*  ajouterClasse(string/object obj, string classe)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Ajoute une classe à l'objet "obj".
 |
 */

libBoa.ajouterClasse = function(obj, classe) {
	var description, modele, ok;
	description=global.ajouterClasse.description;
	modele='string/object -obj-, string -classe-';
	ok=libBoa.debugMoi('ajouterClasse', modele, arguments, description);
	if(!ok) return liberer();

	if(typeof obj=='string') obj=libBoa.obj(obj);
	if(!obj.style) {
		libBoa.alert(global.ajouterClasse.erreur);
		return liberer();
	}
	obj.className+=' '+classe;
	liberer();
	function liberer() {
		obj=modele=description=ok=classe=liberer=null;
	}
};




/*  retirerClasse(string/object obj , [string] classe)
 |  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 *   Supprime la dernière classe de l'objet obj, ou la classe précisée.
 |
 */

libBoa.retirerClasse = function(obj, classe) {
	var description, modele, ok, w, t, res;
	description=global.retirerClasse.description;
	modele='string/object -obj-, [string] -classe-';
	ok=libBoa.debugMoi('retirerClass', modele, arguments, description);
	if(!ok) return liberer();

	if(typeof obj=='string') obj=libBoa.obj(obj);
	if(!obj.style) {
		libBoa.alert(global.retirerClasse.erreur);
		return liberer();
	}

	// On supprime la dernière classe de l'objet
	if(classe+''=='undefined') {
		w=obj.className.split(' ');
		w.pop();
		obj.className=w.join(' ');
		return liberer();
	}

	// On retire une classe spécifique
	t=obj.className.split(' ');
	res=[];
	for(w=0;w<t.length;w++) {
		if(t[w]==classe || t[w]=='') continue;
		else res.push(t[w]);
	}
	obj.className=res.join(' ');
	liberer();

	function liberer() {
		description=modele=ok=w=t=res=liberer=obj=classe=null;
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
	libBoa.v.pack_ajax=1;
})(libBoa);