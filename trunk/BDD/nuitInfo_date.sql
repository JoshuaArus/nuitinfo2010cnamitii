-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- G�n�r� le : Jeu 02 D�cembre 2010 � 22:12
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Base de donn�es: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_date`
--

CREATE TABLE IF NOT EXISTS `nuitinfo_date` (
  `n_date` bigint(20) NOT NULL,
  `dateDepart` datetime NOT NULL,
  `dateArrive` datetime NOT NULL,
  PRIMARY KEY (`n_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_date`
--

