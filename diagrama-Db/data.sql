-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--

-- Host: localhost    Database: vision
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE  IF NOT EXISTS `vision` 
USE `vision`;
--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) NOT NULL,
  `active` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'MEN',1,NULL,NULL),(2,'WOMEN',1,NULL,NULL),(3,'CHILDREN',1,NULL,NULL),(4,'SUN',1,NULL,NULL),(5,'READ',1,NULL,NULL),(6,'RECETADOS',1,NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `colors_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'#e8893f',1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(2,'#1069eb',2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(3,'#7ec241',3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(4,'#b5b8f3',4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(5,'#a169c8',5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(6,'#5e0439',6,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(7,'#769d18',7,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(8,'#4eeb62',8,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(9,'#039fa6',9,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(10,'#77f9c7',10,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(11,'#7b058a',11,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(12,'#bd001c',12,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(13,'#005321',13,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(14,'#f07143',14,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(15,'#7e6894',15,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(16,'#868b6b',16,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(17,'#29dbcb',17,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(18,'#2cb418',18,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(19,'#b49e71',19,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(20,'#ab05dc',20,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(21,'#74b9bf',21,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(22,'#1e8800',22,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(23,'#88a448',23,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(24,'#ef8cff',24,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(25,'#21ec0d',25,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(26,'#f485be',26,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(27,'#2aaba9',27,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(28,'#88f857',28,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(29,'#50bfe9',29,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(30,'#41f16a',30,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(31,'#ba8904',31,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(32,'#0b01a5',32,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(33,'#990cf8',33,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(34,'#c74bd2',34,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(35,'#2344ca',35,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(36,'#3600c7',36,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(37,'#06dd7b',37,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(38,'#d802b8',38,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(39,'#71b57c',39,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(40,'#8e1ad1',40,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(41,'#f23b99',41,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(42,'#12b01f',42,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(43,'#27b213',43,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(44,'#ff59dd',44,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(45,'#3b2246',45,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(46,'#5b1ac3',46,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(47,'#ac7b79',47,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(48,'#9f3cbe',48,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(49,'#ab7ce7',49,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(50,'#a300e3',50,'2022-02-18 22:25:44','2022-02-18 22:25:44');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cylinders`
--

DROP TABLE IF EXISTS `cylinders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cylinders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cylinder` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cylinders`
--

LOCK TABLES `cylinders` WRITE;
/*!40000 ALTER TABLE `cylinders` DISABLE KEYS */;
INSERT INTO `cylinders` VALUES (1,-12.75,NULL,NULL),(2,-12.51,NULL,NULL),(3,-12.25,NULL,NULL),(4,-12.01,NULL,NULL),(5,-11.75,NULL,NULL),(6,-11.51,NULL,NULL),(7,-11.25,NULL,NULL),(8,-11.01,NULL,NULL),(9,-10.75,NULL,NULL),(10,-10.51,NULL,NULL),(11,-10.25,NULL,NULL),(12,-10.01,NULL,NULL),(13,-9.75,NULL,NULL),(14,-9.51,NULL,NULL),(15,-9.25,NULL,NULL),(16,-9.01,NULL,NULL),(17,-8.75,NULL,NULL),(18,-8.51,NULL,NULL),(19,-8.25,NULL,NULL),(20,-8.01,NULL,NULL),(21,-7.75,NULL,NULL),(22,-7.51,NULL,NULL),(23,-7.25,NULL,NULL),(24,-7.01,NULL,NULL),(25,-6.75,NULL,NULL),(26,-6.51,NULL,NULL),(27,-6.25,NULL,NULL),(28,-6.01,NULL,NULL),(29,-5.75,NULL,NULL),(30,-5.51,NULL,NULL),(31,-5.25,NULL,NULL),(32,-5.01,NULL,NULL),(33,-4.75,NULL,NULL),(34,-4.51,NULL,NULL),(35,-4.25,NULL,NULL),(36,-4.01,NULL,NULL),(37,-3.75,NULL,NULL),(38,-3.51,NULL,NULL),(39,-3.25,NULL,NULL),(40,-3.01,NULL,NULL),(41,-2.75,NULL,NULL),(42,-2.51,NULL,NULL),(43,-2.25,NULL,NULL),(44,-2.01,NULL,NULL),(45,-1.75,NULL,NULL),(46,-1.51,NULL,NULL),(47,-1.25,NULL,NULL),(48,-1.01,NULL,NULL),(49,-0.75,NULL,NULL),(50,-0.51,NULL,NULL),(51,-0.25,NULL,NULL),(52,0,NULL,NULL),(53,0.25,NULL,NULL),(54,0.51,NULL,NULL),(55,0.75,NULL,NULL),(56,1.01,NULL,NULL),(57,1.25,NULL,NULL),(58,1.51,NULL,NULL),(59,1.75,NULL,NULL),(60,2.01,NULL,NULL),(61,2.25,NULL,NULL),(62,2.51,NULL,NULL),(63,2.75,NULL,NULL),(64,3.01,NULL,NULL),(65,3.25,NULL,NULL),(66,3.51,NULL,NULL),(67,3.75,NULL,NULL),(68,4.01,NULL,NULL),(69,4.25,NULL,NULL),(70,4.51,NULL,NULL),(71,4.75,NULL,NULL),(72,5.01,NULL,NULL),(73,5.25,NULL,NULL),(74,5.51,NULL,NULL),(75,5.75,NULL,NULL),(76,6.01,NULL,NULL),(77,6.25,NULL,NULL),(78,6.51,NULL,NULL),(79,6.75,NULL,NULL),(80,7.01,NULL,NULL),(81,7.25,NULL,NULL),(82,7.51,NULL,NULL),(83,7.75,NULL,NULL),(84,8.01,NULL,NULL),(85,8.25,NULL,NULL),(86,8.51,NULL,NULL),(87,8.75,NULL,NULL),(88,9.01,NULL,NULL),(89,9.25,NULL,NULL),(90,9.51,NULL,NULL),(91,9.75,NULL,NULL),(92,10.01,NULL,NULL),(93,10.25,NULL,NULL),(94,10.51,NULL,NULL),(95,10.75,NULL,NULL),(96,11.01,NULL,NULL),(97,11.25,NULL,NULL),(98,11.51,NULL,NULL),(99,11.75,NULL,NULL),(100,12.01,NULL,NULL),(101,12.25,NULL,NULL),(102,12.51,NULL,NULL),(103,12.75,NULL,NULL);
/*!40000 ALTER TABLE `cylinders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) NOT NULL,
  `format` varchar(5) NOT NULL,
  `active` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `materials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `material` varchar(255) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materials`
--

LOCK TABLES `materials` WRITE;
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` VALUES (1,'Acetato',1,NULL,NULL),(2,'Monel',1,NULL,NULL),(3,'Titanio',1,NULL,NULL),(4,'Beta-titanio',1,NULL,NULL),(5,'Berilio',1,NULL,NULL),(6,'Acero inoxidable',1,NULL,NULL),(7,'Aluminio',1,NULL,NULL),(8,'Plata',1,NULL,NULL),(9,'Madera',1,NULL,NULL);
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `optics`
--

DROP TABLE IF EXISTS `optics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `optics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `postalCode` int(6) NOT NULL,
  `province` varchar(100) NOT NULL,
  `schedule` varchar(255) NOT NULL,
  `cellPhone` int(12) NOT NULL,
  `shippingWay` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `orderDetail_id` int(11) DEFAULT NULL,
  `active` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderDetail_id` (`orderDetail_id`),
  CONSTRAINT `optics_ibfk_1` FOREIGN KEY (`orderDetail_id`) REFERENCES `orders_details` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optics`
--

LOCK TABLES `optics` WRITE;
/*!40000 ALTER TABLE `optics` DISABLE KEYS */;
/*!40000 ALTER TABLE `optics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `orderDate` datetime NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders_details`
--

DROP TABLE IF EXISTS `orders_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `orders_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `orders_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders_details`
--

LOCK TABLES `orders_details` WRITE;
/*!40000 ALTER TABLE `orders_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescriptions`
--

DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prescriptions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions`
--

LOCK TABLES `prescriptions` WRITE;
/*!40000 ALTER TABLE `prescriptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescriptions_values`
--

DROP TABLE IF EXISTS `prescriptions_values`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prescriptions_values` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prescription_id` int(11) DEFAULT NULL,
  `valueEye_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prescription_id` (`prescription_id`),
  KEY `valueEye_id` (`valueEye_id`),
  CONSTRAINT `prescriptions_values_ibfk_1` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `prescriptions_values_ibfk_2` FOREIGN KEY (`valueEye_id`) REFERENCES `values_eyes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions_values`
--

LOCK TABLES `prescriptions_values` WRITE;
/*!40000 ALTER TABLE `prescriptions_values` DISABLE KEYS */;
/*!40000 ALTER TABLE `prescriptions_values` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prices`
--

DROP TABLE IF EXISTS `prices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` double NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `priceDiscount` double DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `prices_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prices`
--

LOCK TABLES `prices` WRITE;
/*!40000 ALTER TABLE `prices` DISABLE KEYS */;
INSERT INTO `prices` VALUES (1,721.3,38,29.62,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(2,211.37,24,79.66,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(3,643.52,88,81.24,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(4,618.83,33,47.62,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(5,164.17,3,24.18,5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(6,416.25,99,96.34,6,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(7,588.73,22,79.05,7,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(8,569.4,61,57.25,8,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(9,566.07,99,38.35,9,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(10,754.15,24,42.58,10,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(11,569.02,17,23.97,11,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(12,907.36,40,25.09,12,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(13,680,30,79.61,13,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(14,623.45,87,81.09,14,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(15,366.89,28,75.74,15,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(16,561.14,59,24.34,16,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(17,238.19,79,42.78,17,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(18,925.24,67,14,18,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(19,697.1,32,63.79,19,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(20,931.75,1,24.07,20,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(21,600.61,42,92.11,21,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(22,997.02,29,87.23,22,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(23,283.26,7,65.9,23,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(24,532.78,1,24.26,24,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(25,290.01,66,26.6,25,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(26,650.78,41,83.83,26,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(27,770,76,7.67,27,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(28,711.08,18,76.45,28,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(29,993.96,90,90.8,29,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(30,325.29,54,69.52,30,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(31,696.59,45,64.69,31,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(32,558.74,30,15.37,32,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(33,505.49,98,85.24,33,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(34,578.11,42,15.88,34,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(35,883.88,31,30.75,35,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(36,120.86,48,80.05,36,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(37,278.1,93,43.36,37,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(38,847.88,34,7.69,38,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(39,564.13,30,53.79,39,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(40,656.61,68,57.59,40,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(41,56.74,18,57.29,41,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(42,721.79,46,49.78,42,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(43,191.53,10,46.12,43,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(44,849.53,11,33.33,44,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(45,834.12,100,5.82,45,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(46,976.31,100,65.32,46,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(47,251.09,10,8.81,47,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(48,104.87,55,68.11,48,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(49,635.22,99,56.24,49,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(50,531.47,7,51.74,50,'2022-02-18 22:25:44','2022-02-18 22:25:44');
/*!40000 ALTER TABLE `prices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_shopping_cars`
--

DROP TABLE IF EXISTS `product_shopping_cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_shopping_cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `shoppingCar_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `shoppingCar_id` (`shoppingCar_id`),
  CONSTRAINT `product_shopping_cars_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_shopping_cars_ibfk_2` FOREIGN KEY (`shoppingCar_id`) REFERENCES `shopping_carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_shopping_cars`
--

LOCK TABLES `product_shopping_cars` WRITE;
/*!40000 ALTER TABLE `product_shopping_cars` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_shopping_cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `shortDescription` varchar(500) NOT NULL,
  `longDescription` text NOT NULL,
  `prescription_id` int(11) DEFAULT NULL,
  `size_id` int(11) NOT NULL,
  `material_id` int(11) NOT NULL,
  `active` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prescription_id` (`prescription_id`),
  KEY `size_id` (`size_id`),
  KEY `material_id` (`material_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`),
  CONSTRAINT `products_ibfk_3` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Milk - Condensed','Chronic post-traumatic headache, intractable','Chronic post-traumatic headache, intractable',NULL,3,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(2,'Pastry - Carrot Muffin - Mini','Trisomy 18, unspecified','Trisomy 18, unspecified',NULL,1,9,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(3,'Pails With Lids','Other internal derangements of unspecified knee','Other internal derangements of unspecified knee',NULL,2,5,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(4,'Oil - Shortening - All - Purpose','Nondisp fx of intermed cuneiform of l ft, 7thK','Nondisplaced fracture of intermediate cuneiform of left foot, subsequent encounter for fracture with nonunion',NULL,1,6,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(5,'Wasabi Paste','Underdosing of other antidysrhythmic drugs, init encntr','Underdosing of other antidysrhythmic drugs, initial encounter',NULL,3,5,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(6,'Rice - Brown','Salter-Harris Type IV physeal fracture of calcaneus','Salter-Harris Type IV physeal fracture of calcaneus',NULL,3,3,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(7,'Cheese - Havarti, Salsa','Pasngr in hv veh inj in clsn w rail trn/veh nontraf, sequela','Passenger in heavy transport vehicle injured in collision with railway train or railway vehicle in nontraffic accident, sequela',NULL,3,4,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(8,'Bacardi Mojito','Injury of peritoneum, sequela','Injury of peritoneum, sequela',NULL,3,8,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(9,'Wasabi Paste','Lacerat musc/fasc/tend long hd bicep, right arm, sequela','Laceration of muscle, fascia and tendon of long head of biceps, right arm, sequela',NULL,3,6,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(10,'Cherries - Bing, Canned','Radial collateral ligament sprain of left elbow','Radial collateral ligament sprain of left elbow',NULL,1,7,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(11,'Jolt Cola - Electric Blue','Nondisp fx of capitate bone, l wrist, subs for fx w nonunion','Nondisplaced fracture of capitate [os magnum] bone, left wrist, subsequent encounter for fracture with nonunion',NULL,2,4,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(12,'Hold Up Tool Storage Rack','Acustc neuritis in infec/parastc dis classd elswhr, unsp ear','Acoustic neuritis in infectious and parasitic diseases classified elsewhere, unspecified ear',NULL,2,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(13,'Flax Seed','Unspecified injury of thorax','Unspecified injury of thorax',NULL,3,9,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(14,'Pepper - Red Chili','Other secondary osteonecrosis of unspecified ulna','Other secondary osteonecrosis of unspecified ulna',NULL,3,2,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(15,'Wine - Casillero Deldiablo','Cellulitis of orbit','Cellulitis of orbit',NULL,3,2,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(16,'Lamb - Leg, Bone In','War operations involving explosion of marine weapons','War operations involving explosion of marine weapons',NULL,1,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(17,'Fish - Base, Bouillion','Unsp athscl nonbiol bypass of the extrm, bilateral legs','Unspecified atherosclerosis of nonbiological bypass graft(s) of the extremities, bilateral legs',NULL,3,4,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(18,'Stock - Beef, White','Preterm labor without delivery, unspecified trimester','Preterm labor without delivery, unspecified trimester',NULL,2,5,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(19,'Tendrils - Baby Pea, Organic','Idiopathic chronic gout, right ankle and foot, with tophus','Idiopathic chronic gout, right ankle and foot, with tophus (tophi)',NULL,1,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(20,'Onions - White','Inj/poisn/oth conseq of external causes comp pregnancy','Injury, poisoning and certain other consequences of external causes complicating pregnancy',NULL,1,3,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(21,'Creme De Banane - Marie','Conduct disorders','Conduct disorders',NULL,1,7,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(22,'Lettuce - Iceberg','Struck by golf ball, subsequent encounter','Struck by golf ball, subsequent encounter',NULL,3,9,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(23,'Bread - 10 Grain Parisian','Sprain of right coracohumeral (ligament)','Sprain of right coracohumeral (ligament)',NULL,1,8,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(24,'Tart - Lemon','Athscl autologous vein bypass of the left leg w ulceration','Atherosclerosis of autologous vein bypass graft(s) of the left leg with ulceration',NULL,2,2,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(25,'Muffin Batt - Carrot Spice','Pervasive developmental disorders','Pervasive developmental disorders',NULL,2,6,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(26,'Pork - Loin, Bone - In','Sltr-haris Type III physl fx low end l femr, 7thG','Salter-Harris Type III physeal fracture of lower end of left femur, subsequent encounter for fracture with delayed healing',NULL,2,8,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(27,'Samosa - Veg','Nondisp commnt fx shaft of r femr, 7thP','Nondisplaced comminuted fracture of shaft of right femur, subsequent encounter for closed fracture with malunion',NULL,3,5,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(28,'Bagel - Whole White Sesame','Other disorders of continuity of bone, left radius','Other disorders of continuity of bone, left radius',NULL,1,9,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(29,'Bread - Raisin','Congenital pulmonary valve insufficiency','Congenital pulmonary valve insufficiency',NULL,1,7,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(30,'Jolt Cola - Red Eye','Unsp inj extn musc/fasc/tend at forarm lv, left arm, subs','Unspecified injury of other extensor muscle, fascia and tendon at forearm level, left arm, subsequent encounter',NULL,1,8,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(31,'Beef - Texas Style Burger','Laceration of blood vessels at ank/ft level, unsp leg','Laceration of other blood vessels at ankle and foot level, unspecified leg',NULL,2,6,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(32,'Cinnamon Buns Sticky','Strain of musc/fasc/tend at shldr/up arm, left arm','Strain of other muscles, fascia and tendons at shoulder and upper arm level, left arm',NULL,3,7,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(33,'Pie Shell - 5','Other anterior subluxation of right hip, subs encntr','Other anterior subluxation of right hip, subsequent encounter',NULL,2,8,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(34,'Chilli Paste, Sambal Oelek','Encntr for exam for nrml cmprsn and ctrl in clncl rsrch prog','Encounter for examination for normal comparison and control in clinical research program',NULL,1,6,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(35,'Compound - Pear','Underdosing of antihyperlip and antiarterio drugs, init','Underdosing of antihyperlipidemic and antiarteriosclerotic drugs, initial encounter',NULL,1,5,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(36,'Cucumber - English','Sltr-haris Type IV physl fx low end l tibia, 7thD','Salter-Harris Type IV physeal fracture of lower end of left tibia, subsequent encounter for fracture with routine healing',NULL,3,9,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(37,'Puree - Kiwi','Deficiency of other nutrient elements','Deficiency of other nutrient elements',NULL,3,8,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(38,'Wine - Champagne Brut Veuve','Eosinophilic cellulitis [Wells]','Eosinophilic cellulitis [Wells]',NULL,1,4,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(39,'Chicken - Soup Base','Underdosing of glucocorticoids and synthetic analogues, init','Underdosing of glucocorticoids and synthetic analogues, initial encounter',NULL,1,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(40,'Tortillas - Flour, 10','Subacute osteomyelitis, unspecified tibia and fibula','Subacute osteomyelitis, unspecified tibia and fibula',NULL,2,3,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(41,'Pork - Back Ribs','Sporotrichosis, unspecified','Sporotrichosis, unspecified',NULL,1,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(42,'Bread - Roll, Calabrese','Sltr-haris Type III physl fx low end ulna, l arm, 7thG','Salter-Harris Type III physeal fracture of lower end of ulna, left arm, subsequent encounter for fracture with delayed healing',NULL,1,8,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(43,'Wine - Jafflin Bourgongone','Driver of hv veh injured in collision w oth mv in traf, subs','Driver of heavy transport vehicle injured in collision with other motor vehicles in traffic accident, subsequent encounter',NULL,3,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(44,'Lemonade - Mandarin, 591 Ml','Unsp opn wnd abd wall, r upper q w/o penet perit cav, init','Unspecified open wound of abdominal wall, right upper quadrant without penetration into peritoneal cavity, initial encounter',NULL,3,7,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(45,'Appetizer - Escargot Puff','Adverse effect of other parasympathomimetics, subs encntr','Adverse effect of other parasympathomimetics [cholinergics], subsequent encounter',NULL,2,7,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(46,'Carbonated Water - Peach','Unspecified superficial injury of left wrist, sequela','Unspecified superficial injury of left wrist, sequela',NULL,2,4,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(47,'Tomatoes - Grape','Dvtrcli of both small and lg int w perforation and abscess','Diverticulitis of both small and large intestine with perforation and abscess',NULL,3,5,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(48,'V8 - Vegetable Cocktail','Fx unsp phalanx of l rng fngr, subs for fx w delay heal','Fracture of unspecified phalanx of left ring finger, subsequent encounter for fracture with delayed healing',NULL,1,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(49,'7up Diet, 355 Ml','Athscl autologous artery CABG w unstable angina pectoris','Atherosclerosis of autologous artery coronary artery bypass graft(s) with unstable angina pectoris',NULL,2,3,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(50,'Boogies','Subluxation of T9/T10 thoracic vertebra, initial encounter','Subluxation of T9/T10 thoracic vertebra, initial encounter',NULL,1,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_category`
--

DROP TABLE IF EXISTS `products_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_category_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_category_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_category`
--

LOCK TABLES `products_category` WRITE;
/*!40000 ALTER TABLE `products_category` DISABLE KEYS */;
INSERT INTO `products_category` VALUES (1,1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(2,2,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(3,3,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(4,4,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(5,5,5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(6,6,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(7,7,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(8,8,5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(9,9,5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(10,10,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(11,11,5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(12,12,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(13,13,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(14,14,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(15,15,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(16,16,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(17,17,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(18,18,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(19,19,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(20,20,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(21,21,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(22,22,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(23,23,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(24,24,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(25,25,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(26,26,5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(27,27,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(28,28,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(29,29,5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(30,30,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(31,31,5,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(32,32,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(33,33,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(34,34,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(35,35,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(36,36,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(37,37,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(38,38,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(39,39,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(40,40,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(41,41,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(42,42,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(43,43,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(44,44,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(45,45,3,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(46,46,4,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(47,47,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(48,48,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(49,49,2,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(50,50,1,'2022-02-18 22:25:44','2022-02-18 22:25:44'),(51,50,3,'2022-02-18 22:25:44','2022-02-18 22:25:44');
/*!40000 ALTER TABLE `products_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pupillary_distances`
--

DROP TABLE IF EXISTS `pupillary_distances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pupillary_distances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pupillaryDistance` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pupillary_distances`
--

LOCK TABLES `pupillary_distances` WRITE;
/*!40000 ALTER TABLE `pupillary_distances` DISABLE KEYS */;
INSERT INTO `pupillary_distances` VALUES (1,46,NULL,NULL),(2,47,NULL,NULL),(3,48,NULL,NULL),(4,49,NULL,NULL),(5,50,NULL,NULL),(6,51,NULL,NULL),(7,52,NULL,NULL),(8,53,NULL,NULL),(9,54,NULL,NULL),(10,55,NULL,NULL),(11,56,NULL,NULL),(12,57,NULL,NULL),(13,58,NULL,NULL),(14,59,NULL,NULL),(15,60,NULL,NULL),(16,61,NULL,NULL),(17,62,NULL,NULL),(18,63,NULL,NULL),(19,64,NULL,NULL),(20,65,NULL,NULL),(21,66,NULL,NULL),(22,67,NULL,NULL),(23,68,NULL,NULL),(24,69,NULL,NULL),(25,70,NULL,NULL),(26,71,NULL,NULL),(27,72,NULL,NULL),(28,73,NULL,NULL),(29,74,NULL,NULL),(30,75,NULL,NULL),(31,76,NULL,NULL),(32,77,NULL,NULL),(33,78,NULL,NULL),(34,79,NULL,NULL),(35,80,NULL,NULL);
/*!40000 ALTER TABLE `pupillary_distances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sellers`
--

DROP TABLE IF EXISTS `sellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sellers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cellPhone` int(11) NOT NULL,
  `shippingWay` varchar(255) DEFAULT NULL,
  `orderDetail_id` int(11) DEFAULT NULL,
  `active` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderDetail_id` (`orderDetail_id`),
  CONSTRAINT `sellers_ibfk_1` FOREIGN KEY (`orderDetail_id`) REFERENCES `orders_details` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sellers`
--

LOCK TABLES `sellers` WRITE;
/*!40000 ALTER TABLE `sellers` DISABLE KEYS */;
/*!40000 ALTER TABLE `sellers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220118033220-create-spheres.js'),('20220118033359-create-cylinders.js'),('20220118033540-create-pupillary-distance.js'),('20220118033734-create-values-eyes.js'),('20220118033801-create-prescription.js'),('20220118033921-create-prescriptions-values.js'),('20220118034324-create-user.js'),('20220118034409-create-order.js'),('20220118044233-create-material.js'),('20220118044234-create-sizes.js'),('20220118044235-create-product.js'),('20220118044236-create-color.js'),('20220118044238-create-price.js'),('20220118044239-create-image.js'),('20220118161631-create-categories.js'),('20220118161739-create-product-category.js'),('20220118165511-create-order-details.js'),('20220119155232-create-shopping-car.js'),('20220125125437-create-product-shopping-car.js'),('20220125131753-create-optics.js'),('20220125132840-create-sellers.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shopping_carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `shopping_carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(2) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'S',1,NULL,NULL),(2,'M',1,NULL,NULL),(3,'X',1,NULL,NULL);
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spheres`
--

DROP TABLE IF EXISTS `spheres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spheres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sphere` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spheres`
--

LOCK TABLES `spheres` WRITE;
/*!40000 ALTER TABLE `spheres` DISABLE KEYS */;
INSERT INTO `spheres` VALUES (1,-12.75,NULL,NULL),(2,-12.51,NULL,NULL),(3,-12.25,NULL,NULL),(4,-12.01,NULL,NULL),(5,-11.75,NULL,NULL),(6,-11.51,NULL,NULL),(7,-11.25,NULL,NULL),(8,-11.01,NULL,NULL),(9,-10.75,NULL,NULL),(10,-10.51,NULL,NULL),(11,-10.25,NULL,NULL),(12,-10.01,NULL,NULL),(13,-9.75,NULL,NULL),(14,-9.51,NULL,NULL),(15,-9.25,NULL,NULL),(16,-9.01,NULL,NULL),(17,-8.75,NULL,NULL),(18,-8.51,NULL,NULL),(19,-8.25,NULL,NULL),(20,-8.01,NULL,NULL),(21,-7.75,NULL,NULL),(22,-7.51,NULL,NULL),(23,-7.25,NULL,NULL),(24,-7.01,NULL,NULL),(25,-6.75,NULL,NULL),(26,-6.51,NULL,NULL),(27,-6.25,NULL,NULL),(28,-6.01,NULL,NULL),(29,-5.75,NULL,NULL),(30,-5.51,NULL,NULL),(31,-5.25,NULL,NULL),(32,-5.01,NULL,NULL),(33,-4.75,NULL,NULL),(34,-4.51,NULL,NULL),(35,-4.25,NULL,NULL),(36,-4.01,NULL,NULL),(37,-3.75,NULL,NULL),(38,-3.51,NULL,NULL),(39,-3.25,NULL,NULL),(40,-3.01,NULL,NULL),(41,-2.75,NULL,NULL),(42,-2.51,NULL,NULL),(43,-2.25,NULL,NULL),(44,-2.01,NULL,NULL),(45,-1.75,NULL,NULL),(46,-1.51,NULL,NULL),(47,-1.25,NULL,NULL),(48,-1.01,NULL,NULL),(49,-0.75,NULL,NULL),(50,-0.51,NULL,NULL),(51,-0.25,NULL,NULL),(52,0,NULL,NULL),(53,0.25,NULL,NULL),(54,0.51,NULL,NULL),(55,0.75,NULL,NULL),(56,1.01,NULL,NULL),(57,1.25,NULL,NULL),(58,1.51,NULL,NULL),(59,1.75,NULL,NULL),(60,2.01,NULL,NULL),(61,2.25,NULL,NULL),(62,2.51,NULL,NULL),(63,2.75,NULL,NULL),(64,3.01,NULL,NULL),(65,3.25,NULL,NULL),(66,3.51,NULL,NULL),(67,3.75,NULL,NULL),(68,4.01,NULL,NULL),(69,4.25,NULL,NULL),(70,4.51,NULL,NULL),(71,4.75,NULL,NULL),(72,5.01,NULL,NULL),(73,5.25,NULL,NULL),(74,5.51,NULL,NULL),(75,5.75,NULL,NULL),(76,6.01,NULL,NULL),(77,6.25,NULL,NULL),(78,6.51,NULL,NULL),(79,6.75,NULL,NULL),(80,7.01,NULL,NULL),(81,7.25,NULL,NULL),(82,7.51,NULL,NULL),(83,7.75,NULL,NULL),(84,8.01,NULL,NULL),(85,8.25,NULL,NULL),(86,8.51,NULL,NULL),(87,8.75,NULL,NULL),(88,9.01,NULL,NULL),(89,9.25,NULL,NULL),(90,9.51,NULL,NULL),(91,9.75,NULL,NULL),(92,10.01,NULL,NULL),(93,10.25,NULL,NULL),(94,10.51,NULL,NULL),(95,10.75,NULL,NULL),(96,11.01,NULL,NULL),(97,11.25,NULL,NULL),(98,11.51,NULL,NULL),(99,11.75,NULL,NULL),(100,12.01,NULL,NULL),(101,12.25,NULL,NULL),(102,12.51,NULL,NULL),(103,12.75,NULL,NULL);
/*!40000 ALTER TABLE `spheres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `dateBirth` datetime NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmPassword` varchar(255) NOT NULL,
  `streetAddress` varchar(255) NOT NULL,
  `buySell` varchar(255) DEFAULT NULL,
  `favoriteCategory` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `active` int(11) NOT NULL,
  `admin` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Admin','Admin','2022-01-03 00:00:00','admin@admin.com','$2a$10$DRUCinrbPtHwG.jMNgeF5.SRAgbvwE8LrzsJz3hGegwmZJ9kmIXbK','$2a$10$DRUCinrbPtHwG.jMNgeF5.SRAgbvwE8LrzsJz3hGegwmZJ9kmIXbK','Admin',NULL,NULL,'default.png',1,1,'2022-02-18 22:25:44','2022-02-18 22:25:44');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `values_eyes`
--

DROP TABLE IF EXISTS `values_eyes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `values_eyes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sphere_id` int(11) NOT NULL,
  `cylinder_id` int(11) NOT NULL,
  `pupillaryDistance_id` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sphere_id` (`sphere_id`),
  KEY `cylinder_id` (`cylinder_id`),
  KEY `pupillaryDistance_id` (`pupillaryDistance_id`),
  CONSTRAINT `values_eyes_ibfk_1` FOREIGN KEY (`sphere_id`) REFERENCES `spheres` (`id`),
  CONSTRAINT `values_eyes_ibfk_2` FOREIGN KEY (`cylinder_id`) REFERENCES `cylinders` (`id`),
  CONSTRAINT `values_eyes_ibfk_3` FOREIGN KEY (`pupillaryDistance_id`) REFERENCES `pupillary_distances` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `values_eyes`
--

LOCK TABLES `values_eyes` WRITE;
/*!40000 ALTER TABLE `values_eyes` DISABLE KEYS */;
/*!40000 ALTER TABLE `values_eyes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'vision'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18 19:27:07
