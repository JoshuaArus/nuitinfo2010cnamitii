-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- G�n�r� le : Jeu 02 D�cembre 2010 � 22:15
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9



--
-- Base de donn�es: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_demande`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_demande` (
  `n_typeDemande` bigint(20) NOT NULL,
  `typeDemande` tinyint(1) NOT NULL,
  `n_trajet` bigint(20) NOT NULL,
  `n_utilisateur` bigint(20) NOT NULL,
  PRIMARY KEY (`n_typeDemande`)
) ENGINE=InnoDB CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_demande`
--

