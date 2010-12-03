-- phpMyAdmin SQL Dump
-- version 3.3.5
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Ven 03 Décembre 2010 à 01:07
-- Version du serveur: 5.1.49
-- Version de PHP: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_adresses`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_adresses` (
  `n_adresse` bigint(20) NOT NULL,
  `numero` int(11) DEFAULT NULL,
  `rue` varchar(80) DEFAULT NULL,
  `n_ville` bigint(20) NOT NULL,
  PRIMARY KEY (`n_adresse`),
  KEY `n_ville` (`n_ville`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_adresses`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_asso_trajetutilisateur`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_asso_trajetutilisateur` (
  `n_asso_trajetUtilisateur` bigint(20) NOT NULL,
  `n_utilisateur` bigint(20) NOT NULL,
  `n_trajet` bigint(20) NOT NULL,
  `type_utilisateur` tinyint(1) NOT NULL,
  PRIMARY KEY (`n_asso_trajetUtilisateur`),
  KEY `n_utilisateur` (`n_utilisateur`),
  KEY `n_trajet` (`n_trajet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_asso_trajetutilisateur`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_date`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_date` (
  `n_date` bigint(20) NOT NULL,
  `dateDepart` datetime NOT NULL,
  `dateArrive` datetime DEFAULT NULL,
  PRIMARY KEY (`n_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_date`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_demande`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_demande` (
  `n_typeDemande` bigint(20) NOT NULL,
  `typeDemande` tinyint(1) NOT NULL,
  `n_trajet` bigint(20) NOT NULL,
  `n_utilisateur` bigint(20) NOT NULL,
  PRIMARY KEY (`n_typeDemande`),
  KEY `n_trajet` (`n_trajet`),
  KEY `n_utilisateur` (`n_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_demande`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_evaluation`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_evaluation` (
  `n_evaluation` bigint(20) NOT NULL,
  `note` int(11) DEFAULT NULL,
  `n_asso_trajetUtilisateur` bigint(20) NOT NULL,
  `ponctualite` int(11) DEFAULT NULL,
  PRIMARY KEY (`n_evaluation`),
  KEY `n_asso_trajetUtilisateur` (`n_asso_trajetUtilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_evaluation`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_preferencesutilisateurs`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_preferencesutilisateurs` (
  `n_preference` bigint(20) NOT NULL,
  `typePreference` varchar(50) NOT NULL,
  `n_utilisateur` bigint(20) NOT NULL,
  PRIMARY KEY (`n_preference`),
  KEY `n_utilisateur` (`n_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_preferencesutilisateurs`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_statuttrajet`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_statuttrajet` (
  `n_statutTrajet` bigint(20) NOT NULL,
  `statutTrajet` tinyint(1) NOT NULL,
  `etat` varchar(30) NOT NULL,
  PRIMARY KEY (`n_statutTrajet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_statuttrajet`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_trajet`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_trajet` (
  `n_trajet` bigint(20) NOT NULL,
  `prix` int(5) DEFAULT NULL,
  `n_adresseDepart` bigint(20) NOT NULL,
  `n_adresseArrive` bigint(20) NOT NULL,
  `nbPlaceDisponible` int(11) NOT NULL,
  `allerRetour` tinyint(1) DEFAULT NULL,
  `n_dateArrive` bigint(20) NOT NULL,
  `n_dateDepart` bigint(20) NOT NULL,
  `n_statutTrajet` bigint(20) NOT NULL,
  PRIMARY KEY (`n_trajet`),
  KEY `n_adresseDepart` (`n_adresseDepart`),
  KEY `n_adresseArrive` (`n_adresseArrive`),
  KEY `n_dateDepart` (`n_dateDepart`),
  KEY `n_dateArrive` (`n_dateArrive`),
  KEY `n_statutTrajet` (`n_statutTrajet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_trajet`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_typevoiture`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_typevoiture` (
  `n_categorieVoiture` bigint(20) NOT NULL,
  `nomCategorie` varchar(50) NOT NULL,
  `carbone` int(10) NOT NULL,
  `nbPlace` tinyint(1) NOT NULL,
  PRIMARY KEY (`n_categorieVoiture`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_typevoiture`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_universite`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_universite` (
  `n_universite` bigint(20) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `n_adresse` bigint(20) NOT NULL,
  KEY `n_adresse` (`n_adresse`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_universite`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_utilisateur`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_utilisateur` (
  `n_utilisateur` bigint(20) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `prenom` varchar(40) NOT NULL,
  `sexe` varchar(10) DEFAULT NULL,
  `mail` varchar(60) NOT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `n_categorieVoiture` bigint(20) NOT NULL,
  `n_adresse` bigint(20) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  PRIMARY KEY (`n_utilisateur`),
  KEY `n_categorieVoiture` (`n_categorieVoiture`),
  KEY `n_adresse` (`n_adresse`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_utilisateur`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_ville`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_ville` (
  `n_ville` bigint(20) NOT NULL,
  `nomVille` varchar(40) NOT NULL,
  `code` int(11) DEFAULT NULL,
  PRIMARY KEY (`n_ville`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_ville`
--


--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `nuitinfo_adresses`
--
ALTER TABLE `nuitinfo_adresses`
  ADD CONSTRAINT `nuitinfo_adresses_ibfk_1` FOREIGN KEY (`n_ville`) REFERENCES `nuitinfo_ville` (`n_ville`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_asso_trajetutilisateur`
--
ALTER TABLE `nuitinfo_asso_trajetutilisateur`
  ADD CONSTRAINT `nuitinfo_asso_trajetutilisateur_ibfk_2` FOREIGN KEY (`n_trajet`) REFERENCES `nuitinfo_trajet` (`n_trajet`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_asso_trajetutilisateur_ibfk_1` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_demande`
--
ALTER TABLE `nuitinfo_demande`
  ADD CONSTRAINT `nuitinfo_demande_ibfk_2` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_demande_ibfk_1` FOREIGN KEY (`n_trajet`) REFERENCES `nuitinfo_trajet` (`n_trajet`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_evaluation`
--
ALTER TABLE `nuitinfo_evaluation`
  ADD CONSTRAINT `nuitinfo_evaluation_ibfk_1` FOREIGN KEY (`n_asso_trajetUtilisateur`) REFERENCES `nuitinfo_asso_trajetutilisateur` (`n_asso_trajetUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_preferencesutilisateurs`
--
ALTER TABLE `nuitinfo_preferencesutilisateurs`
  ADD CONSTRAINT `nuitinfo_preferencesutilisateurs_ibfk_1` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_trajet`
--
ALTER TABLE `nuitinfo_trajet`
  ADD CONSTRAINT `nuitinfo_trajet_ibfk_5` FOREIGN KEY (`n_statutTrajet`) REFERENCES `nuitinfo_statuttrajet` (`n_statutTrajet`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_trajet_ibfk_1` FOREIGN KEY (`n_adresseDepart`) REFERENCES `nuitinfo_adresses` (`n_adresse`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_trajet_ibfk_2` FOREIGN KEY (`n_adresseArrive`) REFERENCES `nuitinfo_adresses` (`n_adresse`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_trajet_ibfk_3` FOREIGN KEY (`n_dateDepart`) REFERENCES `nuitinfo_date` (`n_date`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_trajet_ibfk_4` FOREIGN KEY (`n_dateArrive`) REFERENCES `nuitinfo_date` (`n_date`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_universite`
--
ALTER TABLE `nuitinfo_universite`
  ADD CONSTRAINT `nuitinfo_universite_ibfk_1` FOREIGN KEY (`n_adresse`) REFERENCES `nuitinfo_adresses` (`n_adresse`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_utilisateur`
--
ALTER TABLE `nuitinfo_utilisateur`
  ADD CONSTRAINT `nuitinfo_utilisateur_ibfk_2` FOREIGN KEY (`n_adresse`) REFERENCES `nuitinfo_adresses` (`n_adresse`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_utilisateur_ibfk_1` FOREIGN KEY (`n_categorieVoiture`) REFERENCES `nuitinfo_typevoiture` (`n_categorieVoiture`) ON DELETE CASCADE ON UPDATE CASCADE;
