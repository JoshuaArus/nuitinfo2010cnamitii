-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- G�n�r� le : Jeu 02 D�cembre 2010 � 22:25
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de donn�es: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_evaluation`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_evaluation` (
  `n_evaluation` bigint(20) NOT NULL,
  `note` int(11) NOT NULL,
  `n_asso_trajetUtilisateur` bigint(20) NOT NULL,
  `ponctualite` int(11) NOT NULL,
  PRIMARY KEY (`n_evaluation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_evaluation`
--

