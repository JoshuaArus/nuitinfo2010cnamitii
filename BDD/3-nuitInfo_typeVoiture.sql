-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- G�n�r� le : Jeu 02 D�cembre 2010 � 21:17
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9



--
-- Base de donn�es: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_typeVoiture`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_typeVoiture` (
  `n_categorieVoiture` bigint(20) NOT NULL,
  `nomCategorie` varchar(50) DEFAULT NULL,
  `carbone` int(10) DEFAULT NULL,
  `nbPlace` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`n_categorieVoiture`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_typeVoiture`
--

