-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- G�n�r� le : Jeu 02 D�cembre 2010 � 22:28
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9



--
-- Base de donn�es: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_statutTrajet`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_statutTrajet` (
  `n_statutTrajet` bigint(20) NOT NULL,
  `statutTrajet` tinyint(1) NOT NULL,
  `etat` varchar(30) NOT NULL,
  PRIMARY KEY (`n_statutTrajet`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_statutTrajet`
--

