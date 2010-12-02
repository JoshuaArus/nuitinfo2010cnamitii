-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Jeu 02 Décembre 2010 à 20:50
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9



--
-- Base de données: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_utilisateur`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_utilisateur` (
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

--
-- Contenu de la table `nuitInfo_utilisateur`
--

