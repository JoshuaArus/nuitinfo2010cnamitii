-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- G�n�r� le : Jeu 02 D�cembre 2010 � 21:06
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de donn�es: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_preferencesUtilisateurs`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_preferencesUtilisateurs` (
  `n_preference` bigint(20) NOT NULL,
  `typePreference` varchar(50) NOT NULL,
  `n_utilisateur` bigint(20) NOT NULL,
  PRIMARY KEY (`n_preference`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_preferencesUtilisateurs`
--

