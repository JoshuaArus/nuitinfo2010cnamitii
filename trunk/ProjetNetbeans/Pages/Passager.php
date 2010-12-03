<?php

echo '<h2 id="">Passager</h2>';

if(isset($_POST['villeDepart']) && isset($_POST['villeArrivee']))
{
    $list=recherche($_POST['villeDepart'],$_POST['villeArrivee']);
    while($ligne = mysql_fetch_assoc($list))
    {
          echo ('<div id="presentation">
				<h2 id="">Recherche co-voiturage</h2>
				<div id="tabl_recherche">
					<div id="critere1">
						<img src="images/conducteur.png"/>
						<br/><span class="profil">'.$ligne['prenom'].'</span>
						<br/><a href="mailto:'.$ligne['mail'].'"><span class="contacter">contacter</span>
                                                <br/><span class="contacter">le conducteur</span></a>
					</div>
					<div class="separation"></div>
					<div id="critere2">
						<div>
							<span class="trajet">Départ</span>
							<br/><span class="text-rech">'.$_POST['villeDepart'].'</span>
						</div>
						<br/>
						<div>
							<br/><span class="trajet">Arrivée</span>
							<br/><span class="text-rech">'.$_POST['villeArrivee'].'</span>
						</div>
					</div>
					<div class="separation"></div>
					<div id="critere3">
						<div>
							<span class="trajet">Date et heure</span>
							<br/><span class="text-rech">'.$ligne['dateDepart'].'</span>
							<br/><span class="text-rech">8h30</span>
						</div>
						<br/>
						<div>
							<span class="trajet">Prix</span>
							<br/><span class="text-rech">'.$ligne['prix'].'</span>
						</div>
					</div>
					<div class="separation"></div>
					<div id="critere4">
						<div>
							<span class="trajet">Places</span>
							<br/><span class="text-rech">'.$ligne['nbPlaceDisponible'].' place(s)</span>
						</div>
						<br/>
						<div>
							<br/><span class="trajet">Avis</span>
							<br/><span class="text-rech">Bon</span>
						</div>
					</div>
					<div class="separation"></div>
					<div id="critere5">
						<div>
							<span class="trajet">Préférences</span>
							<br/><br/> <span class="ico"><img src="images/cig-ok.png"/></span>
									   <span class="ico"><img src="images/anim-ok.png"/></span>
									   <span class="ico"><img src="images/valise-ok.png"/></span>

						</div>
					</div>
				</div>
			</div>');
    }
}
else
{
    echo ('

    <form method="POST" action="?Page=Passager">
    <span>Ville depart </span><input type="text", name="villeDepart" value=""/><br/>
    <span>Ville Arrivee </span><input type="text", name="villeArrivee" value=""/><br/>
    <input type="submit" value="Rechercher"/>
    </form>

    ');
}

?>
