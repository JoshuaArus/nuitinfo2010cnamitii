-- phpMyAdmin SQL Dump
-- version 3.1.3
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Jeu 02 Décembre 2010 à 22:36
-- Version du serveur: 5.1.32
-- Version de PHP: 5.2.9



--
-- Base de données: `ortsfran`
--

-- --------------------------------------------------------

--
-- Structure de la table `nuitInfo_universite`
--

CREATE TABLE IF NOT EXISTS `nuitInfo_universite` (
  `n_universite` bigint(20) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `n_adresse` bigint(20) NOT NULL
) ENGINE=InnoDB CHARSET=utf8;

--
-- Contenu de la table `nuitInfo_universite`
--

