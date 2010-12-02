ALTER TABLE nuitInfo_utilisateur ADD CONSTRAINT FOREIGN KEY (n_categorieVoiture) REFERENCES nuitInfo_typeVoiture(n_categorieVoiture) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_utilisateur ADD CONSTRAINT FOREIGN KEY (n_adresse) REFERENCES nuitInfo_adresses(n_adresse) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_preferencesUtilisateurs ADD CONSTRAINT FOREIGN KEY (n_utilisateur) REFERENCES nuitInfo_utilisateur(n_utilisateur) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_demande ADD CONSTRAINT FOREIGN KEY (n_trajet) REFERENCES nuitInfo_trajet(n_trajet) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_demande ADD CONSTRAINT FOREIGN KEY (n_utilisateur) REFERENCES nuitInfo_utilisateur(n_utilisateur) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_evaluation ADD CONSTRAINT FOREIGN KEY (n_asso_trajetUtilisateur) REFERENCES nuitInfo_asso_trajetUtilisateur(n_asso_trajetUtilisateur) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_asso_trajetUtilisateur ADD CONSTRAINT FOREIGN KEY (n_utilisateur) REFERENCES nuitInfo_utilisateur(n_utilisateur) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_asso_trajetUtilisateur ADD CONSTRAINT FOREIGN KEY (n_trajet) REFERENCES nuitInfo_trajet(n_trajet) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_trajet ADD CONSTRAINT FOREIGN KEY (n_adresseDepart) REFERENCES nuitInfo_adresses(n_adresse) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_trajet ADD CONSTRAINT FOREIGN KEY (n_adresseArrive) REFERENCES nuitInfo_adresses(n_adresse) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE nuitInfo_trajet ADD CONSTRAINT FOREIGN KEY (n_dateDepart) REFERENCES nuitInfo_date(n_date) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_trajet ADD CONSTRAINT FOREIGN KEY (n_dateArrive) REFERENCES nuitInfo_date(n_date) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_trajet ADD CONSTRAINT FOREIGN KEY (n_statutTrajet) REFERENCES nuitInfo_statutTrajet(n_statutTrajet) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_universite ADD CONSTRAINT FOREIGN KEY (n_adresse) REFERENCES nuitInfo_adresses(n_adresse) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE nuitInfo_adresses ADD CONSTRAINT FOREIGN KEY (n_ville) REFERENCES nuitInfo_ville(n_ville) ON  UPDATE CASCADE ON DELETE CASCADE;