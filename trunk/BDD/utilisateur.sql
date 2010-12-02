
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `nuitinfo_utilisateur` (
  `n_utilisateur` bigint(20) NOT NULL,
  `nom` varchar(40) DEFAULT NULL,
  `prenom` varchar(40) DEFAULT NULL,
  `mail` varchar(60) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `n_categorieVoiture` bigint(20) NOT NULL,
  `n_adresse` bigint(20) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  PRIMARY KEY (`n_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
