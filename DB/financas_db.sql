CREATE DATABASE  IF NOT EXISTS `financa_teste` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `financa_teste`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: financa_teste
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `entradas`
--

DROP TABLE IF EXISTS `entradas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entradas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entradas`
--

LOCK TABLES `entradas` WRITE;
/*!40000 ALTER TABLE `entradas` DISABLE KEYS */;
INSERT INTO `entradas` VALUES (1,'Salário',5000,'2025-01-05'),(2,'Freelance',1200.5,'2025-02-18'),(3,'Venda de produto',300.75,'2025-03-10'),(4,'Reembolso',450,'2025-04-25'),(5,'Cashback cartão',90.1,'2025-05-15'),(6,'Cashback cartão',90.1,'2025-05-15'),(7,'servico ar condicionado',900,'2025-04-06'),(8,'servico ar condicionado',900,'2025-06-05'),(9,'servico ar condicionado',900,'2025-05-07'),(10,'servico ar condicionado',900,'2025-07-06'),(11,'servico ar condicionado',900,'2025-06-08'),(12,'servico ar condicionado',900,'2025-08-07'),(13,'servico ar condicionado',900,'2025-07-09'),(14,'servico ar condicionado',900,'2025-09-08'),(15,'servico ar condicionado',900,'2025-08-10'),(16,'servico ar condicionado',900,'2025-10-09'),(17,'servico ar condicionado',900,'2025-09-11'),(18,'servico ar condicionado',900,'2025-11-10'),(19,'',0,'2025-03-05'),(20,'',0,'2025-03-05'),(21,'asdf',55,'2025-08-09'),(22,'asdf',55,'2025-08-08'),(23,'asdf',55,'2025-07-08'),(24,'asdf',55,'2025-07-07'),(25,'asdf',55,'2025-06-07'),(26,'asdf',55,'2025-06-06'),(27,'asdf',55,'2025-05-06'),(28,'asdf',55,'2025-05-05'),(29,'asdf',55,'2025-04-05'),(30,'asdf',55,'2025-04-04');
/*!40000 ALTER TABLE `entradas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gasto`
--

DROP TABLE IF EXISTS `gasto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gasto` (
  `id` double NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gasto`
--

LOCK TABLES `gasto` WRITE;
/*!40000 ALTER TABLE `gasto` DISABLE KEYS */;
/*!40000 ALTER TABLE `gasto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `second_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'patrick','gutemberg','patrickgutem@gmail.com','12345678'),(2,'patrick','gutemberg','patrickgutem@gmail.com','12345678'),(3,'patrick','gutemberg','patrickgutem@gmail.com','12345678'),(4,'patrick','gutemberg','patrickgutem@gmail.com','12345678'),(5,'patrick',NULL,'asdfad','asdf'),(6,'patrick',NULL,'patrickgutem@gmail.com','098zxc'),(7,'patrick','gutemberg','patrickgutem@gmail.com','098zxc'),(8,'patrick','gutemberg','patrickgutem@gmail.com','098zxc'),(9,'luiz','mateus','luiz@gmail.com','1234'),(10,'patrick','mateus','mateu@gmail.com','123456'),(11,'junior','','',''),(12,'patrick','gustavo','patrickgutem@gmail.com','098zxc123'),(13,'patrick','gustavo','patrickgutem@gmail.com','098zxc123'),(14,'patrick','gustavo','patrickgutem@gmail.com','098zxc123'),(15,'patrick','gustavo','patrickgutem@gmail.com','098zxc123'),(16,'','','',''),(17,'','','','');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-10-26  1:14:36
