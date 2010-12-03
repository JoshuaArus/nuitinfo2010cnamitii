-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Jeu 02 Décembre 2010 à 22:34
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9



--
-- Base de données: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_trajet`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_trajet` (
  `n_trajet` bigint(20) NOT NULL,
  `prix` integer (5) NULL,
  `villeDepart` varchar(50) NOT NULL,
  `villeArrivee` varchar(50) NOT NULL,
  `nbPlaceDisponible` int(11) NOT NULL,
  `dateArrive` datetime NOT NULL,
  `dateDepart` datetime NOT NULL,
  `n_statutTrajet` bigint(20) NOT NULL,
  PRIMARY KEY (`n_trajet`)
) ENGINE=InnoDB CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_trajet`
--

