-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- G�n�r� le : Jeu 02 D�cembre 2010 � 22:34
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de donn�es: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_trajet`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_trajet` (
  `n_trajet` bigint(20) NOT NULL,
  `n_adresseDepart` bigint(20) NOT NULL,
  `n_adresseArrive` bigint(20) NOT NULL,
  `nbPlaceDisponible` int(11) NOT NULL,
  `allerRetour` tinyint(1) NOT NULL,
  `n_dateArrive` bigint(20) NOT NULL,
  `n_dateDepart` bigint(20) NOT NULL,
  `n_statutTrajet` bigint(20) NOT NULL,
  PRIMARY KEY (`n_trajet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_trajet`
--

