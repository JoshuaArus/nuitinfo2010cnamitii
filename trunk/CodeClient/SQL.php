<?php
function connect()
{
	$conn=mysql_connect('127.0.0.1','root','');
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


function close($conn)
{
	mysql_close($conn);
}

function redirection($lien) {
	header('Location: ' . $lien);
	exit('Redirection en cours');
}

function getTrajet($mail)
{
    $conn = connect();
    $util = mysql_fetch_assoc(req('select n_utilisateur from nuitinfo_utilisateur where mail=\''.$mail.'\'',$conn));
    $req='select * from nuitinfo_trajet t, nuitinfo_statutTrajet s, nuitinfo_asso_trajetutilisateur u where s.etat="En cours" and s.n_statutTrajet=t.n_statutTrajet and u.n_trajet = t.n_trajet and u.n_utilisateur = '.$util['n_utilisateur'].' order by t.dateDepart';
    return req($req,$conn);
}

function recherche($depart,$arrivee)//,$datedepart,$datearrive)
{
    $conn = connect();
    $req = 'select t.prix, t.nbPlaceDisponible, t.dateDepart, u.prenom, u.mail from nuitinfo_trajet t, nuitinfo_statuttrajet s, nuitinfo_utilisateur u, nuitinfo_asso_trajetutilisateur a
    where u.n_utilisateur=a.n_utilisateur and a.n_trajet=t.n_trajet and t.n_statutTrajet=s.n_statutTrajet and s.statutTrajet=0 and t.villeDepart = \''.$depart.'\' and t.villeArrivee = \''.$arrivee.'\' order by t.villeDepart';//.$arrivee.'\' and t.dateDepart = \''.$dateDepart.'\' and t.dateArrivee = \''.$dateArrivee.'\' order by t.dateDepart';
    $rep = req($req,$conn);
	close($conn);
    return $rep;
}

?>