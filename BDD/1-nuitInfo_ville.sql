-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Jeu 02 Décembre 2010 à 22:31
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de données: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_ville`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_ville` (
  `n_ville` bigint(20) NOT NULL,
  `nomVille` varchar(40) NOT NULL,
  `code` int(11) NOT NULL,
  PRIMARY KEY (`n_ville`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_ville`
--

