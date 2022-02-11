CREATE DATABASE  IF NOT EXISTS `proyecto_optica` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `proyecto_optica`;
-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: proyecto_optica
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

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
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
  `name` varchar(15) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
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
INSERT INTO `colors` VALUES (1,'#e8893f',1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(2,'#1069eb',2,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(3,'#7ec241',3,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(4,'#b5b8f3',4,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(5,'#a169c8',5,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(6,'#5e0439',6,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(7,'#769d18',7,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(8,'#4eeb62',8,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(9,'#039fa6',9,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(10,'#77f9c7',10,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(11,'#7b058a',11,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(12,'#bd001c',12,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(13,'#005321',13,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(14,'#f07143',14,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(15,'#7e6894',15,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(16,'#868b6b',16,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(17,'#29dbcb',17,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(18,'#2cb418',18,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(19,'#b49e71',19,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(20,'#ab05dc',20,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(21,'#74b9bf',21,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(22,'#1e8800',22,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(23,'#88a448',23,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(24,'#ef8cff',24,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(25,'#21ec0d',25,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(26,'#f485be',26,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(27,'#2aaba9',27,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(28,'#88f857',28,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(29,'#50bfe9',29,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(30,'#41f16a',30,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(31,'#ba8904',31,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(32,'#0b01a5',32,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(33,'#990cf8',33,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(34,'#c74bd2',34,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(35,'#2344ca',35,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(36,'#3600c7',36,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(37,'#06dd7b',37,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(38,'#d802b8',38,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(39,'#71b57c',39,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(40,'#8e1ad1',40,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(41,'#f23b99',41,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(42,'#12b01f',42,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(43,'#27b213',43,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(44,'#ff59dd',44,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(45,'#3b2246',45,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(46,'#5b1ac3',46,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(47,'#ac7b79',47,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(48,'#9f3cbe',48,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(49,'#ab7ce7',49,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(50,'#a300e3',50,'2022-02-08 00:03:36','2022-02-08 00:03:36');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) DEFAULT NULL,
  `format` varchar(5) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
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
-- Table structure for table `lefts_eyes`
--

DROP TABLE IF EXISTS `lefts_eyes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lefts_eyes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sphere` double DEFAULT NULL,
  `cylinder` double DEFAULT NULL,
  `axis` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lefts_eyes`
--

LOCK TABLES `lefts_eyes` WRITE;
/*!40000 ALTER TABLE `lefts_eyes` DISABLE KEYS */;
/*!40000 ALTER TABLE `lefts_eyes` ENABLE KEYS */;
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
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `postalCode` int(6) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `schedule` varchar(255) DEFAULT NULL,
  `cellPhone` int(12) DEFAULT NULL,
  `shippingWay` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `orderDetail_id` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
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
  `orderDate` datetime DEFAULT NULL,
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
  `price` double DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `priceDiscount` double DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
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
INSERT INTO `prices` VALUES (1,721.3,38,29.62,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(2,211.37,24,79.66,2,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(3,643.52,88,81.24,3,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(4,618.83,33,47.62,4,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(5,164.17,3,24.18,5,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(6,416.25,99,96.34,6,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(7,588.73,22,79.05,7,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(8,569.4,61,57.25,8,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(9,566.07,99,38.35,9,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(10,754.15,24,42.58,10,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(11,569.02,17,23.97,11,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(12,907.36,40,25.09,12,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(13,680,30,79.61,13,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(14,623.45,87,81.09,14,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(15,366.89,28,75.74,15,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(16,561.14,59,24.34,16,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(17,238.19,79,42.78,17,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(18,925.24,67,14,18,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(19,697.1,32,63.79,19,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(20,931.75,1,24.07,20,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(21,600.61,42,92.11,21,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(22,997.02,29,87.23,22,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(23,283.26,7,65.9,23,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(24,532.78,1,24.26,24,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(25,290.01,66,26.6,25,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(26,650.78,41,83.83,26,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(27,770,76,7.67,27,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(28,711.08,18,76.45,28,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(29,993.96,90,90.8,29,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(30,325.29,54,69.52,30,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(31,696.59,45,64.69,31,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(32,558.74,30,15.37,32,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(33,505.49,98,85.24,33,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(34,578.11,42,15.88,34,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(35,883.88,31,30.75,35,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(36,120.86,48,80.05,36,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(37,278.1,93,43.36,37,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(38,847.88,34,7.69,38,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(39,564.13,30,53.79,39,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(40,656.61,68,57.59,40,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(41,56.74,18,57.29,41,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(42,721.79,46,49.78,42,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(43,191.53,10,46.12,43,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(44,849.53,11,33.33,44,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(45,834.12,100,5.82,45,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(46,976.31,100,65.32,46,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(47,251.09,10,8.81,47,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(48,104.87,55,68.11,48,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(49,635.22,99,56.24,49,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(50,531.47,7,51.74,50,'2022-02-08 00:03:36','2022-02-08 00:03:36');
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
  `product_id` int(11) DEFAULT NULL,
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
  `name` varchar(255) DEFAULT NULL,
  `shortDescription` varchar(500) DEFAULT NULL,
  `longDescription` text DEFAULT NULL,
  `prescription_id` int(11) DEFAULT NULL,
  `size_id` int(11) DEFAULT NULL,
  `material_id` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
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
INSERT INTO `products` VALUES (1,'Milk - Condensed','Chronic post-traumatic headache, intractable','Chronic post-traumatic headache, intractable',NULL,3,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(2,'Pastry - Carrot Muffin - Mini','Trisomy 18, unspecified','Trisomy 18, unspecified',NULL,1,9,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(3,'Pails With Lids','Other internal derangements of unspecified knee','Other internal derangements of unspecified knee',NULL,2,5,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(4,'Oil - Shortening - All - Purpose','Nondisp fx of intermed cuneiform of l ft, 7thK','Nondisplaced fracture of intermediate cuneiform of left foot, subsequent encounter for fracture with nonunion',NULL,1,6,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(5,'Wasabi Paste','Underdosing of other antidysrhythmic drugs, init encntr','Underdosing of other antidysrhythmic drugs, initial encounter',NULL,3,5,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(6,'Rice - Brown','Salter-Harris Type IV physeal fracture of calcaneus','Salter-Harris Type IV physeal fracture of calcaneus',NULL,3,3,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(7,'Cheese - Havarti, Salsa','Pasngr in hv veh inj in clsn w rail trn/veh nontraf, sequela','Passenger in heavy transport vehicle injured in collision with railway train or railway vehicle in nontraffic accident, sequela',NULL,3,4,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(8,'Bacardi Mojito','Injury of peritoneum, sequela','Injury of peritoneum, sequela',NULL,3,8,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(9,'Wasabi Paste','Lacerat musc/fasc/tend long hd bicep, right arm, sequela','Laceration of muscle, fascia and tendon of long head of biceps, right arm, sequela',NULL,3,6,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(10,'Cherries - Bing, Canned','Radial collateral ligament sprain of left elbow','Radial collateral ligament sprain of left elbow',NULL,1,7,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(11,'Jolt Cola - Electric Blue','Nondisp fx of capitate bone, l wrist, subs for fx w nonunion','Nondisplaced fracture of capitate [os magnum] bone, left wrist, subsequent encounter for fracture with nonunion',NULL,2,4,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(12,'Hold Up Tool Storage Rack','Acustc neuritis in infec/parastc dis classd elswhr, unsp ear','Acoustic neuritis in infectious and parasitic diseases classified elsewhere, unspecified ear',NULL,2,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(13,'Flax Seed','Unspecified injury of thorax','Unspecified injury of thorax',NULL,3,9,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(14,'Pepper - Red Chili','Other secondary osteonecrosis of unspecified ulna','Other secondary osteonecrosis of unspecified ulna',NULL,3,2,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(15,'Wine - Casillero Deldiablo','Cellulitis of orbit','Cellulitis of orbit',NULL,3,2,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(16,'Lamb - Leg, Bone In','War operations involving explosion of marine weapons','War operations involving explosion of marine weapons',NULL,1,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(17,'Fish - Base, Bouillion','Unsp athscl nonbiol bypass of the extrm, bilateral legs','Unspecified atherosclerosis of nonbiological bypass graft(s) of the extremities, bilateral legs',NULL,3,4,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(18,'Stock - Beef, White','Preterm labor without delivery, unspecified trimester','Preterm labor without delivery, unspecified trimester',NULL,2,5,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(19,'Tendrils - Baby Pea, Organic','Idiopathic chronic gout, right ankle and foot, with tophus','Idiopathic chronic gout, right ankle and foot, with tophus (tophi)',NULL,1,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(20,'Onions - White','Inj/poisn/oth conseq of external causes comp pregnancy','Injury, poisoning and certain other consequences of external causes complicating pregnancy',NULL,1,3,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(21,'Creme De Banane - Marie','Conduct disorders','Conduct disorders',NULL,1,7,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(22,'Lettuce - Iceberg','Struck by golf ball, subsequent encounter','Struck by golf ball, subsequent encounter',NULL,3,9,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(23,'Bread - 10 Grain Parisian','Sprain of right coracohumeral (ligament)','Sprain of right coracohumeral (ligament)',NULL,1,8,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(24,'Tart - Lemon','Athscl autologous vein bypass of the left leg w ulceration','Atherosclerosis of autologous vein bypass graft(s) of the left leg with ulceration',NULL,2,2,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(25,'Muffin Batt - Carrot Spice','Pervasive developmental disorders','Pervasive developmental disorders',NULL,2,6,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(26,'Pork - Loin, Bone - In','Sltr-haris Type III physl fx low end l femr, 7thG','Salter-Harris Type III physeal fracture of lower end of left femur, subsequent encounter for fracture with delayed healing',NULL,2,8,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(27,'Samosa - Veg','Nondisp commnt fx shaft of r femr, 7thP','Nondisplaced comminuted fracture of shaft of right femur, subsequent encounter for closed fracture with malunion',NULL,3,5,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(28,'Bagel - Whole White Sesame','Other disorders of continuity of bone, left radius','Other disorders of continuity of bone, left radius',NULL,1,9,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(29,'Bread - Raisin','Congenital pulmonary valve insufficiency','Congenital pulmonary valve insufficiency',NULL,1,7,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(30,'Jolt Cola - Red Eye','Unsp inj extn musc/fasc/tend at forarm lv, left arm, subs','Unspecified injury of other extensor muscle, fascia and tendon at forearm level, left arm, subsequent encounter',NULL,1,8,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(31,'Beef - Texas Style Burger','Laceration of blood vessels at ank/ft level, unsp leg','Laceration of other blood vessels at ankle and foot level, unspecified leg',NULL,2,6,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(32,'Cinnamon Buns Sticky','Strain of musc/fasc/tend at shldr/up arm, left arm','Strain of other muscles, fascia and tendons at shoulder and upper arm level, left arm',NULL,3,7,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(33,'Pie Shell - 5','Other anterior subluxation of right hip, subs encntr','Other anterior subluxation of right hip, subsequent encounter',NULL,2,8,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(34,'Chilli Paste, Sambal Oelek','Encntr for exam for nrml cmprsn and ctrl in clncl rsrch prog','Encounter for examination for normal comparison and control in clinical research program',NULL,1,6,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(35,'Compound - Pear','Underdosing of antihyperlip and antiarterio drugs, init','Underdosing of antihyperlipidemic and antiarteriosclerotic drugs, initial encounter',NULL,1,5,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(36,'Cucumber - English','Sltr-haris Type IV physl fx low end l tibia, 7thD','Salter-Harris Type IV physeal fracture of lower end of left tibia, subsequent encounter for fracture with routine healing',NULL,3,9,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(37,'Puree - Kiwi','Deficiency of other nutrient elements','Deficiency of other nutrient elements',NULL,3,8,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(38,'Wine - Champagne Brut Veuve','Eosinophilic cellulitis [Wells]','Eosinophilic cellulitis [Wells]',NULL,1,4,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(39,'Chicken - Soup Base','Underdosing of glucocorticoids and synthetic analogues, init','Underdosing of glucocorticoids and synthetic analogues, initial encounter',NULL,1,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(40,'Tortillas - Flour, 10','Subacute osteomyelitis, unspecified tibia and fibula','Subacute osteomyelitis, unspecified tibia and fibula',NULL,2,3,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(41,'Pork - Back Ribs','Sporotrichosis, unspecified','Sporotrichosis, unspecified',NULL,1,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(42,'Bread - Roll, Calabrese','Sltr-haris Type III physl fx low end ulna, l arm, 7thG','Salter-Harris Type III physeal fracture of lower end of ulna, left arm, subsequent encounter for fracture with delayed healing',NULL,1,8,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(43,'Wine - Jafflin Bourgongone','Driver of hv veh injured in collision w oth mv in traf, subs','Driver of heavy transport vehicle injured in collision with other motor vehicles in traffic accident, subsequent encounter',NULL,3,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(44,'Lemonade - Mandarin, 591 Ml','Unsp opn wnd abd wall, r upper q w/o penet perit cav, init','Unspecified open wound of abdominal wall, right upper quadrant without penetration into peritoneal cavity, initial encounter',NULL,3,7,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(45,'Appetizer - Escargot Puff','Adverse effect of other parasympathomimetics, subs encntr','Adverse effect of other parasympathomimetics [cholinergics], subsequent encounter',NULL,2,7,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(46,'Carbonated Water - Peach','Unspecified superficial injury of left wrist, sequela','Unspecified superficial injury of left wrist, sequela',NULL,2,4,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(47,'Tomatoes - Grape','Dvtrcli of both small and lg int w perforation and abscess','Diverticulitis of both small and large intestine with perforation and abscess',NULL,3,5,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(48,'V8 - Vegetable Cocktail','Fx unsp phalanx of l rng fngr, subs for fx w delay heal','Fracture of unspecified phalanx of left ring finger, subsequent encounter for fracture with delayed healing',NULL,1,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(49,'7up Diet, 355 Ml','Athscl autologous artery CABG w unstable angina pectoris','Atherosclerosis of autologous artery coronary artery bypass graft(s) with unstable angina pectoris',NULL,2,3,1,'2022-02-08 00:03:36','2022-02-08 00:03:36'),(50,'Boogies','Subluxation of T9/T10 thoracic vertebra, initial encounter','Subluxation of T9/T10 thoracic vertebra, initial encounter',NULL,1,1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36');
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
  `product_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_category_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_category_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_category`
--

LOCK TABLES `products_category` WRITE;
/*!40000 ALTER TABLE `products_category` DISABLE KEYS */;
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
  `oneValue` double DEFAULT NULL,
  `rightPD` double DEFAULT NULL,
  `leftPD` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pupillary_distances`
--

LOCK TABLES `pupillary_distances` WRITE;
/*!40000 ALTER TABLE `pupillary_distances` DISABLE KEYS */;
/*!40000 ALTER TABLE `pupillary_distances` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rights_eyes`
--

DROP TABLE IF EXISTS `rights_eyes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rights_eyes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sphere` double DEFAULT NULL,
  `cylinder` double DEFAULT NULL,
  `axis` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rights_eyes`
--

LOCK TABLES `rights_eyes` WRITE;
/*!40000 ALTER TABLE `rights_eyes` DISABLE KEYS */;
/*!40000 ALTER TABLE `rights_eyes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sellers`
--

DROP TABLE IF EXISTS `sellers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sellers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `cellPhone` int(11) DEFAULT NULL,
  `shippingWay` varchar(255) DEFAULT NULL,
  `orderDetail_id` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
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
INSERT INTO `sequelizemeta` VALUES ('20220118033220-create-rights-eyes.js'),('20220118033359-create-lefts-eyes.js'),('20220118033540-create-pupillary-distance.js'),('20220118033734-create-values-eyes.js'),('20220118033801-create-prescription.js'),('20220118033921-create-prescriptions-values.js'),('20220118034324-create-user.js'),('20220118034409-create-order.js'),('20220118044233-create-material.js'),('20220118044234-create-sizes.js'),('20220118044235-create-product.js'),('20220118044236-create-color.js'),('20220118044238-create-price.js'),('20220118044239-create-image.js'),('20220118161631-create-categories.js'),('20220118161739-create-product-category.js'),('20220118165511-create-order-details.js'),('20220119155232-create-shopping-car.js'),('20220125125437-create-product-shopping-car.js'),('20220125131753-create-optics.js'),('20220125132840-create-sellers.js');
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
  `user_id` int(11) DEFAULT NULL,
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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `dateBirth` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `confirmPassword` varchar(255) DEFAULT NULL,
  `streetAddress` varchar(255) DEFAULT NULL,
  `buySell` varchar(255) DEFAULT NULL,
  `favoriteCategory` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
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
INSERT INTO `users` VALUES (1,'Admin','Admin','Admin','2022-01-03 00:00:00','admin@admin.com','$2a$10$DRUCinrbPtHwG.jMNgeF5.SRAgbvwE8LrzsJz3hGegwmZJ9kmIXbK','$2a$10$DRUCinrbPtHwG.jMNgeF5.SRAgbvwE8LrzsJz3hGegwmZJ9kmIXbK','Admin',NULL,NULL,'default.png',1,1,'2022-02-08 00:03:36','2022-02-08 00:03:36');
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
  `rightEye_id` int(11) DEFAULT NULL,
  `leftEye_id` int(11) DEFAULT NULL,
  `pupillaryDistance_id` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rightEye_id` (`rightEye_id`),
  KEY `leftEye_id` (`leftEye_id`),
  KEY `pupillaryDistance_id` (`pupillaryDistance_id`),
  CONSTRAINT `values_eyes_ibfk_1` FOREIGN KEY (`rightEye_id`) REFERENCES `rights_eyes` (`id`),
  CONSTRAINT `values_eyes_ibfk_2` FOREIGN KEY (`leftEye_id`) REFERENCES `lefts_eyes` (`id`),
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
-- Dumping routines for database 'proyecto_optica'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-08 15:30:01
