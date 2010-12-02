-- phpMyAdmin SQL Dump
-- version 2.11.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Jeu 02 Décembre 2010 à 22:44
-- Version du serveur: 5.0.67
-- Version de PHP: 5.2.6



--
-- Base de données: `nuitInfo`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_adresses`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_adresses` (
  `n_adresse` bigint(20) NOT NULL,
  `numero` int(11) NULL,
  `rue` varchar(80) NULL,
  `n_ville` bigint(20) NOT NULL,
  PRIMARY KEY  (`n_adresse`)
) ENGINE=InnoDB CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_adresses`
--

