<?php

function connect()
{
	$conn=mysql_connect('127.0.0.1','root','');// 'sql9.60gp' pour serveur

	if (!$conn)
	{
		err('connect');
	}
	else
	{
		$temp = mysql_select_db('ortsfran',$conn);
		if ($temp == false)
		{
			close($conn);
			err('connect');
		}
		return $conn;
	}
}

function req($req, $conn)
{
	$r=mysql_query($req,$conn);
        
	if(!$r)
	{
		close($conn);
		err('request');
	}
	return($r);
}

function reponse($rep)
{
	return mysql_fetch_array($rep);
}

function close($conn)
{
	mysql_close($conn);
}

function lireProfil($mail, $table,$conn)
{
	$req = 'select * from '.$table.' where mail=\''.$mail.'\'';

	$rep = req($req,$conn);
	$w = reponse($rep);
	if(!$w) return array();
	foreach($w as $clef=>$val)
	{
		if(is_numeric($clef)) continue;
		$t[$clef] = $val;
	}

	return($t);
}

function majProfil($T,$table,$conn)
{
	$req = req('select * from '.$table.' where mail=\''.$T['mail'].'\'',$conn);

	if (!reponse($req))//existe pas, donc insert
	{
		$req = 'insert into '.$table.' (';
		$champs = '';
		$valeurs = '';

		if (isset($t['mail']))
		{
			$t['mail'] = strtolower($t['mail']);
		}

		foreach($t as $clef=>$val)
		{
			$champs.=$clef.',';
			$valeurs.='\''.$val.'\',';
		}

		$champs = substr($champs,0,strlen($champs)-1);
		$valeurs = substr($valeurs,0,strlen($valeurs)-1);

		$req.=$champs.') values ('.$valeurs.')';
		req($req,$conn);
	}
	else//existe donc update
	{
		$req = 'update '.$table.' set';

		foreach($T as $clef=>$val)
		{
			$req.= ' '.$clef.' = \''.$val.'\',';
		}
		$req = substr($req,0,strlen($req)-1);

		$req.= ' where mail=\''.$T['mail'].'\'';
		req($req,$conn);
	}

}

function recherche($depart,$arrivee)//,$datedepart,$datearrive)
{
    $conn = connect();
    $req = 'select t.prix, t.nbPlaceDisponible, t.dateDepart, u.prenom, u.mail from nuitinfo_trajet t, nuitinfo_statuttrajet s, nuitinfo_utilisateur u, nuitinfo_asso_trajetutilisateur a
    where u.n_utilisateur=a.n_utilisateur and a.n_trajet=t.n_trajet and t.n_statutTrajet=s.n_statutTrajet and s.statutTrajet=0 and t.villeDepart = \''.$depart.'\' and t.villeArrivee = \''.$arrivee.'\' order by t.villeDepart';//.$arrivee.'\' and t.dateDepart = \''.$dateDepart.'\' and t.dateArrivee = \''.$dateArrivee.'\' order by t.dateDepart';
    $rep = req($req,$conn);

    return $rep;
}

function annulerTrajet($id)
{
    $conn = connect();
    $req = 'update nuitinfo_statuttrajet set statuttrajet=0 , etat="Annule" where n_statutTrajet='.$id;
    return reponse(req($req,$conn));
}

function nbTrajetRealise()
{
    $conn = connect();
    $req='select count(*) from nuitinfo_trajet t, nuitinfo_statutrajet s where s.etat="Realise" and s.n_statutTrajet=t.n_statutTrajet';
    return reponse(req($req,$conn));
}

/*function co2eco()
{
    $conn = connect();
    $req='select ';
    return reponse(req($req));
}*/

function nbTrajetUtilPassager($mail)
{
    $conn = connect();
    $util = reponse(req('select n_utilisateur from nuitinfo_utilisateur where mail='.$mail),$conn);
    $req='select count(*) from nuitinfo_trajet t, nuitinfo_statutrajet s, n_asso_trajetUtilisateur u where s.etat="Realise" and s.n_statutTrajet=t.n_statutTrajet and u.n_trajet = t.n_trajet and u.type_utilisateur=0 and u.n_utilisateur = '.$util[0];
    return reponse(req($req));
}

function nbTrajetUtilConducteur($mail)
{
    $conn = connect();
    $util = reponse(req('select n_utilisateur from nuitinfo_utilisateur where mail='.$mail),$conn);
    $req='select count(*) from nuitinfo_trajet t, nuitinfo_statutrajet s, n_asso_trajetUtilisateur u where s.etat="Realise" and s.n_statutTrajet=t.n_statutTrajet and u.n_trajet = t.n_trajet and u.type_utilisateur=1 and u.n_utilisateur = '.$util[0];
    return reponse(req($req));
}

function getTrajet($mail)
{
    $conn = connect();
    $util = mysql_fetch_assoc(req('select n_utilisateur from nuitinfo_utilisateur where mail=\''.$mail.'\'',$conn));
    $req='select * from nuitinfo_trajet t, nuitinfo_statutTrajet s, nuitinfo_asso_trajetutilisateur u where s.etat="En cours" and s.n_statutTrajet=t.n_statutTrajet and u.n_trajet = t.n_trajet and u.n_utilisateur = '.$util['n_utilisateur'].' order by t.dateDepart';
    return req($req,$conn);
}

function getProchainTrajet($mail)
{
    $conn = connect();
    $util = reponse(req('select n_utilisateur from nuitinfo_utilisateur where mail='.$mail),$conn);
    $req='select top(1) from nuitinfo_trajet t, nuitinfo_statutrajet s, n_asso_trajetUtilisateur u where s.etat="En cours" and s.n_statutTrajet=t.n_statutTrajet and u.n_trajet = t.n_trajet and u.type_utilisateur=1 and u.n_utilisateur = '.$util[0];
    return reponse(req($req));
}
?>