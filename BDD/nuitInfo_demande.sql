-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Jeu 02 Décembre 2010 à 22:15
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de données: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_demande`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_demande` (
  `n_typeDemande` bigint(20) NOT NULL,
  `typeDemande` tinyint(1) NOT NULL,
  `n_trajet` bigint(20) NOT NULL,
  `n_utilisateur` bigint(20) NOT NULL,
  PRIMARY KEY (`n_typeDemande`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_demande`
--

