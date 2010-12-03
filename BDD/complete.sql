-- phpMyAdmin SQL Dump
-- version 3.3.5
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Ven 03 Décembre 2010 à 02:21
-- Version du serveur: 5.1.49
-- Version de PHP: 5.3.3



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `ortsfran`
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
) ENGINE=InnoDB  CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_asso_trajetutilisateur`
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
) ENGINE=InnoDB  CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_demande`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_evaluation`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_evaluation` (
  `n_evaluation` bigint(20) NOT NULL,
  `note` int(11)  NULL,
  `n_asso_trajetUtilisateur` bigint(20) NOT NULL,
  `ponctualite` int(11)  NULL,
  PRIMARY KEY (`n_evaluation`),
  KEY `n_asso_trajetUtilisateur` (`n_asso_trajetUtilisateur`)
) ENGINE=InnoDB  CHARSET=utf8;

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
) ENGINE=InnoDB  CHARSET=utf8;

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
) ENGINE=InnoDB  CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_statuttrajet`
--


-- --------------------------------------------------------

--
-- Structure de la table `nuitinfo_trajet`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_trajet` (
  `n_trajet` bigint(20) NOT NULL,
  `prix` int(5)  NULL,
  `villeDepart` varchar(50) NOT NULL,
  `villeArrivee` varchar(50) NOT NULL,
  `nbPlaceDisponible` int(11) NOT NULL,
  `dateArrive` datetime NOT NULL,
  `dateDepart` datetime NOT NULL,
  `n_statutTrajet` bigint(20) NOT NULL,
  PRIMARY KEY (`n_trajet`),
  KEY `n_statutTrajet` (`n_statutTrajet`)
) ENGINE=InnoDB  CHARSET=utf8;

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
) ENGINE=InnoDB  CHARSET=utf8;

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
  `n_adresse` bigint(20) NOT NULL
) ENGINE=InnoDB  CHARSET=utf8;

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
  `sexe` varchar(10)  NULL,
  `mail` varchar(60) NOT NULL,
  `tel` varchar(15)  NULL,
  `n_categorieVoiture` bigint(20) NOT NULL,
  `n_adresse` bigint(20) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  PRIMARY KEY (`n_utilisateur`),
  KEY `n_categorieVoiture` (`n_categorieVoiture`)
) ENGINE=InnoDB  CHARSET=utf8;

--
-- Contenu de la table `nuitinfo_utilisateur`
--


--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `nuitinfo_asso_trajetutilisateur`
--
ALTER TABLE `nuitinfo_asso_trajetutilisateur`
  ADD CONSTRAINT `nuitinfo_asso_trajetutilisateur_ibfk_4` FOREIGN KEY (`n_trajet`) REFERENCES `nuitinfo_trajet` (`n_trajet`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_asso_trajetutilisateur_ibfk_1` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_asso_trajetutilisateur_ibfk_2` FOREIGN KEY (`n_trajet`) REFERENCES `nuitinfo_trajet` (`n_trajet`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_asso_trajetutilisateur_ibfk_3` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_demande`
--
ALTER TABLE `nuitinfo_demande`
  ADD CONSTRAINT `nuitinfo_demande_ibfk_4` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_demande_ibfk_1` FOREIGN KEY (`n_trajet`) REFERENCES `nuitinfo_trajet` (`n_trajet`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_demande_ibfk_2` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_demande_ibfk_3` FOREIGN KEY (`n_trajet`) REFERENCES `nuitinfo_trajet` (`n_trajet`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_evaluation`
--
ALTER TABLE `nuitinfo_evaluation`
  ADD CONSTRAINT `nuitinfo_evaluation_ibfk_2` FOREIGN KEY (`n_asso_trajetUtilisateur`) REFERENCES `nuitinfo_asso_trajetutilisateur` (`n_asso_trajetUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_evaluation_ibfk_1` FOREIGN KEY (`n_asso_trajetUtilisateur`) REFERENCES `nuitinfo_asso_trajetutilisateur` (`n_asso_trajetUtilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_preferencesutilisateurs`
--
ALTER TABLE `nuitinfo_preferencesutilisateurs`
  ADD CONSTRAINT `nuitinfo_preferencesutilisateurs_ibfk_2` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_preferencesutilisateurs_ibfk_1` FOREIGN KEY (`n_utilisateur`) REFERENCES `nuitinfo_utilisateur` (`n_utilisateur`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_trajet`
--
ALTER TABLE `nuitinfo_trajet`
  ADD CONSTRAINT `nuitinfo_trajet_ibfk_2` FOREIGN KEY (`n_statutTrajet`) REFERENCES `nuitinfo_statuttrajet` (`n_statutTrajet`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_trajet_ibfk_1` FOREIGN KEY (`n_statutTrajet`) REFERENCES `nuitinfo_statuttrajet` (`n_statutTrajet`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `nuitinfo_utilisateur`
--
ALTER TABLE `nuitinfo_utilisateur`
  ADD CONSTRAINT `nuitinfo_utilisateur_ibfk_3` FOREIGN KEY (`n_categorieVoiture`) REFERENCES `nuitinfo_typevoiture` (`n_categorieVoiture`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_utilisateur_ibfk_1` FOREIGN KEY (`n_categorieVoiture`) REFERENCES `nuitinfo_typevoiture` (`n_categorieVoiture`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nuitinfo_utilisateur_ibfk_2` FOREIGN KEY (`n_categorieVoiture`) REFERENCES `nuitinfo_typevoiture` (`n_categorieVoiture`) ON DELETE CASCADE ON UPDATE CASCADE;
