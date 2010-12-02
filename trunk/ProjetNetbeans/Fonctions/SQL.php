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

?>