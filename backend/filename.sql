-- MySQL dump 10.17  Distrib 10.3.18-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: tutorfinding
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `app_binh_luan`
--

DROP TABLE IF EXISTS `app_binh_luan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_binh_luan` (
  `id_binh_luan` int(11) NOT NULL AUTO_INCREMENT,
  `binh_luan` longtext NOT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  `id_gia_su_id` int(11) NOT NULL,
  `id_lop_id` int(11) NOT NULL,
  `id_phu_huynh_id` int(11) NOT NULL,
  PRIMARY KEY (`id_binh_luan`),
  KEY `app_binh_luan_id_gia_su_id_9563c849_fk_app_gia_su_id_gia_su` (`id_gia_su_id`),
  KEY `app_binh_luan_id_lop_id_58df51a3_fk_app_danh_sach_lop_id_lop` (`id_lop_id`),
  KEY `app_binh_luan_id_phu_huynh_id_7e4c75e2_fk_app_phu_h` (`id_phu_huynh_id`),
  CONSTRAINT `app_binh_luan_id_gia_su_id_9563c849_fk_app_gia_su_id_gia_su` FOREIGN KEY (`id_gia_su_id`) REFERENCES `app_gia_su` (`id_gia_su`),
  CONSTRAINT `app_binh_luan_id_lop_id_58df51a3_fk_app_danh_sach_lop_id_lop` FOREIGN KEY (`id_lop_id`) REFERENCES `app_danh_sach_lop` (`id_lop`),
  CONSTRAINT `app_binh_luan_id_phu_huynh_id_7e4c75e2_fk_app_phu_h` FOREIGN KEY (`id_phu_huynh_id`) REFERENCES `app_phu_huynh` (`id_phu_huynh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_binh_luan`
--

LOCK TABLES `app_binh_luan` WRITE;
/*!40000 ALTER TABLE `app_binh_luan` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_binh_luan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_danh_gia`
--

DROP TABLE IF EXISTS `app_danh_gia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_danh_gia` (
  `id_danh_gia` int(11) NOT NULL AUTO_INCREMENT,
  `diem` double NOT NULL,
  `mo_ta` longtext NOT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  `id_gia_su_id` int(11) NOT NULL,
  `id_phu_huynh_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_danh_gia`),
  KEY `app_danh_gia_id_gia_su_id_9775ef1a_fk_app_gia_su_id_gia_su` (`id_gia_su_id`),
  KEY `app_danh_gia_id_phu_huynh_id_2f25afc8_fk_app_phu_h` (`id_phu_huynh_id`),
  CONSTRAINT `app_danh_gia_id_gia_su_id_9775ef1a_fk_app_gia_su_id_gia_su` FOREIGN KEY (`id_gia_su_id`) REFERENCES `app_gia_su` (`id_gia_su`),
  CONSTRAINT `app_danh_gia_id_phu_huynh_id_2f25afc8_fk_app_phu_h` FOREIGN KEY (`id_phu_huynh_id`) REFERENCES `app_phu_huynh` (`id_phu_huynh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_danh_gia`
--

LOCK TABLES `app_danh_gia` WRITE;
/*!40000 ALTER TABLE `app_danh_gia` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_danh_gia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_danh_sach_lop`
--

DROP TABLE IF EXISTS `app_danh_sach_lop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_danh_sach_lop` (
  `id_lop` int(11) NOT NULL AUTO_INCREMENT,
  `ten_lop` varchar(50) NOT NULL,
  `gia` double NOT NULL,
  `mo_ta` longtext,
  `dia_chi` longtext NOT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  `id_gia_su_id` int(11) NOT NULL,
  `id_mon_hoc_id` int(11) NOT NULL,
  `id_phu_huynh_id` int(11) NOT NULL,
  PRIMARY KEY (`id_lop`),
  KEY `app_danh_sach_lop_id_gia_su_id_2c041165_fk_app_gia_su_id_gia_su` (`id_gia_su_id`),
  KEY `app_danh_sach_lop_id_mon_hoc_id_d40b1613_fk_app_mon_hoc_id_mon` (`id_mon_hoc_id`),
  KEY `app_danh_sach_lop_id_phu_huynh_id_87a33775_fk_app_phu_h` (`id_phu_huynh_id`),
  CONSTRAINT `app_danh_sach_lop_id_gia_su_id_2c041165_fk_app_gia_su_id_gia_su` FOREIGN KEY (`id_gia_su_id`) REFERENCES `app_gia_su` (`id_gia_su`),
  CONSTRAINT `app_danh_sach_lop_id_mon_hoc_id_d40b1613_fk_app_mon_hoc_id_mon` FOREIGN KEY (`id_mon_hoc_id`) REFERENCES `app_mon_hoc` (`id_mon`),
  CONSTRAINT `app_danh_sach_lop_id_phu_huynh_id_87a33775_fk_app_phu_h` FOREIGN KEY (`id_phu_huynh_id`) REFERENCES `app_phu_huynh` (`id_phu_huynh`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_danh_sach_lop`
--

LOCK TABLES `app_danh_sach_lop` WRITE;
/*!40000 ALTER TABLE `app_danh_sach_lop` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_danh_sach_lop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_gia_su`
--

DROP TABLE IF EXISTS `app_gia_su`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_gia_su` (
  `id_gia_su` int(11) NOT NULL AUTO_INCREMENT,
  `ho_ten` varchar(50) NOT NULL,
  `mat_khau` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `gioi_tinh` varchar(10) DEFAULT NULL,
  `gioi_thieu` longtext,
  `hinh_dai_dien_url` varchar(200) DEFAULT NULL,
  `dia_chi` longtext NOT NULL,
  `hoc_phi_gs` longtext NOT NULL,
  `hinh_thuc_day` varchar(150) NOT NULL,
  `kinh_nghiem` longtext NOT NULL,
  `buoi_day` varchar(50) DEFAULT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  `role` int(11) DEFAULT NULL,
  `id_level_id` int(11) DEFAULT NULL,
  `id_mon_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_gia_su`),
  UNIQUE KEY `phone` (`phone`),
  KEY `app_gia_su_id_level_id_0542f0c5_fk_app_level_id_level` (`id_level_id`),
  KEY `app_gia_su_id_mon_id_57782a5e_fk_app_mon_hoc_id_mon` (`id_mon_id`),
  CONSTRAINT `app_gia_su_id_level_id_0542f0c5_fk_app_level_id_level` FOREIGN KEY (`id_level_id`) REFERENCES `app_level` (`id_level`),
  CONSTRAINT `app_gia_su_id_mon_id_57782a5e_fk_app_mon_hoc_id_mon` FOREIGN KEY (`id_mon_id`) REFERENCES `app_mon_hoc` (`id_mon`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_gia_su`
--

LOCK TABLES `app_gia_su` WRITE;
/*!40000 ALTER TABLE `app_gia_su` DISABLE KEYS */;
INSERT INTO `app_gia_su` VALUES (1,'1','sha1$123$c348c1794df04a0473a11234389e74a236833822','kieuchicong99@gmail.com','1',NULL,NULL,'https://google.com','','','','',NULL,'2019-11-23 06:39:29.038337','2019-11-23 06:39:29.038379',1,NULL,NULL);
/*!40000 ALTER TABLE `app_gia_su` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_level`
--

DROP TABLE IF EXISTS `app_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_level` (
  `id_level` int(11) NOT NULL AUTO_INCREMENT,
  `ten_level` varchar(50) NOT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  PRIMARY KEY (`id_level`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_level`
--

LOCK TABLES `app_level` WRITE;
/*!40000 ALTER TABLE `app_level` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_lop_yeu_cau`
--

DROP TABLE IF EXISTS `app_lop_yeu_cau`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_lop_yeu_cau` (
  `id_lop` int(11) NOT NULL AUTO_INCREMENT,
  `trang_thai` varchar(20) NOT NULL,
  `mo_ta` longtext,
  `hinh_thuc_day` varchar(150) DEFAULT NULL,
  `yeu_cau_gioi_tinh` varchar(50) DEFAULT NULL,
  `gia_thue_moi_buoi` int(11) DEFAULT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  `id_gia_su_id` int(11) DEFAULT NULL,
  `id_mon_hoc_id` int(11) DEFAULT NULL,
  `id_phu_huynh_id` int(11) NOT NULL,
  `dia_chi` longtext NOT NULL,
  `so_buoi_hoc_moi_tuan` int(11) DEFAULT NULL,
  `so_gio_moi_buoi` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_lop`),
  KEY `app_lop_yeu_cau_id_phu_huynh_id_27db98ab_fk_app_phu_h` (`id_phu_huynh_id`),
  KEY `app_lop_yeu_cau_id_gia_su_id_2a0a773d_fk_app_gia_su_id_gia_su` (`id_gia_su_id`),
  KEY `app_lop_yeu_cau_id_mon_hoc_id_8e6b235f_fk_app_mon_hoc_id_mon` (`id_mon_hoc_id`),
  CONSTRAINT `app_lop_yeu_cau_id_gia_su_id_2a0a773d_fk_app_gia_su_id_gia_su` FOREIGN KEY (`id_gia_su_id`) REFERENCES `app_gia_su` (`id_gia_su`),
  CONSTRAINT `app_lop_yeu_cau_id_mon_hoc_id_8e6b235f_fk_app_mon_hoc_id_mon` FOREIGN KEY (`id_mon_hoc_id`) REFERENCES `app_mon_hoc` (`id_mon`),
  CONSTRAINT `app_lop_yeu_cau_id_phu_huynh_id_27db98ab_fk_app_phu_h` FOREIGN KEY (`id_phu_huynh_id`) REFERENCES `app_phu_huynh` (`id_phu_huynh`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_lop_yeu_cau`
--

LOCK TABLES `app_lop_yeu_cau` WRITE;
/*!40000 ALTER TABLE `app_lop_yeu_cau` DISABLE KEYS */;
INSERT INTO `app_lop_yeu_cau` VALUES (1,'1','cần tìm gia sư dạy toán','tai nha','O',200000,'2019-11-22 05:53:45.435035','2019-11-22 05:53:45.435070',NULL,NULL,1,'Cau Giay',2,2);
/*!40000 ALTER TABLE `app_lop_yeu_cau` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_mon_hoc`
--

DROP TABLE IF EXISTS `app_mon_hoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_mon_hoc` (
  `id_mon` int(11) NOT NULL AUTO_INCREMENT,
  `ten_mon` varchar(100) NOT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  PRIMARY KEY (`id_mon`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_mon_hoc`
--

LOCK TABLES `app_mon_hoc` WRITE;
/*!40000 ALTER TABLE `app_mon_hoc` DISABLE KEYS */;
INSERT INTO `app_mon_hoc` VALUES (1,'Toán','2019-11-25 05:10:13.216028','2019-11-25 05:10:13.216064'),(2,'Lý','2019-11-25 05:10:13.336626','2019-11-25 05:10:13.336749'),(3,'Hóa','2019-11-25 05:10:13.423023','2019-11-25 05:10:13.423129'),(4,'Văn','2019-11-25 05:10:13.502055','2019-11-25 05:10:13.502088'),(5,'Anh','2019-11-25 05:10:13.587574','2019-11-25 05:10:13.587732'),(6,'Sinh học','2019-11-25 05:10:13.686663','2019-11-25 05:10:13.686846'),(7,'Lịch sử','2019-11-25 05:10:13.769523','2019-11-25 05:10:13.769661'),(8,'Địa lý','2019-11-25 05:10:13.942530','2019-11-25 05:10:13.942655'),(9,'Tin Học','2019-11-25 05:10:14.041636','2019-11-25 05:10:14.041762'),(10,'Tiếng Nhật','2019-11-25 05:10:14.099462','2019-11-25 05:10:14.099602');
/*!40000 ALTER TABLE `app_mon_hoc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_phu_huynh`
--

DROP TABLE IF EXISTS `app_phu_huynh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_phu_huynh` (
  `id_phu_huynh` int(11) NOT NULL AUTO_INCREMENT,
  `ho_ten` varchar(100) NOT NULL,
  `mat_khau` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `dia_chi` longtext NOT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  `role` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_phu_huynh`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_phu_huynh`
--

LOCK TABLES `app_phu_huynh` WRITE;
/*!40000 ALTER TABLE `app_phu_huynh` DISABLE KEYS */;
INSERT INTO `app_phu_huynh` VALUES (1,'student','sha1$123$5f089734bdf230d19a954748db1985877e0c13e8','kieuchicong99@gmail.com','111','','2019-11-21 05:40:53.027385','2019-11-21 05:40:53.027447',2);
/*!40000 ALTER TABLE `app_phu_huynh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_so_lien_lac`
--

DROP TABLE IF EXISTS `app_so_lien_lac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_so_lien_lac` (
  `id_sll` int(11) NOT NULL AUTO_INCREMENT,
  `ngay` date NOT NULL,
  `noi_dung` longtext NOT NULL,
  `ngay_tao` datetime(6) NOT NULL,
  `ngay_chinh_sua` datetime(6) NOT NULL,
  `id_lop_id` int(11) NOT NULL,
  PRIMARY KEY (`id_sll`),
  KEY `app_so_lien_lac_id_lop_id_6cf4e0af_fk_app_danh_sach_lop_id_lop` (`id_lop_id`),
  CONSTRAINT `app_so_lien_lac_id_lop_id_6cf4e0af_fk_app_danh_sach_lop_id_lop` FOREIGN KEY (`id_lop_id`) REFERENCES `app_danh_sach_lop` (`id_lop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_so_lien_lac`
--

LOCK TABLES `app_so_lien_lac` WRITE;
/*!40000 ALTER TABLE `app_so_lien_lac` DISABLE KEYS */;
/*!40000 ALTER TABLE `app_so_lien_lac` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add danh_sach_lop',7,'add_danh_sach_lop'),(26,'Can change danh_sach_lop',7,'change_danh_sach_lop'),(27,'Can delete danh_sach_lop',7,'delete_danh_sach_lop'),(28,'Can view danh_sach_lop',7,'view_danh_sach_lop'),(29,'Can add gia_su',8,'add_gia_su'),(30,'Can change gia_su',8,'change_gia_su'),(31,'Can delete gia_su',8,'delete_gia_su'),(32,'Can view gia_su',8,'view_gia_su'),(33,'Can add level',9,'add_level'),(34,'Can change level',9,'change_level'),(35,'Can delete level',9,'delete_level'),(36,'Can view level',9,'view_level'),(37,'Can add mon_hoc',10,'add_mon_hoc'),(38,'Can change mon_hoc',10,'change_mon_hoc'),(39,'Can delete mon_hoc',10,'delete_mon_hoc'),(40,'Can view mon_hoc',10,'view_mon_hoc'),(41,'Can add so_lien_lac',11,'add_so_lien_lac'),(42,'Can change so_lien_lac',11,'change_so_lien_lac'),(43,'Can delete so_lien_lac',11,'delete_so_lien_lac'),(44,'Can view so_lien_lac',11,'view_so_lien_lac'),(45,'Can add phu_huynh',12,'add_phu_huynh'),(46,'Can change phu_huynh',12,'change_phu_huynh'),(47,'Can delete phu_huynh',12,'delete_phu_huynh'),(48,'Can view phu_huynh',12,'view_phu_huynh'),(49,'Can add lop_yeu_cau',13,'add_lop_yeu_cau'),(50,'Can change lop_yeu_cau',13,'change_lop_yeu_cau'),(51,'Can delete lop_yeu_cau',13,'delete_lop_yeu_cau'),(52,'Can view lop_yeu_cau',13,'view_lop_yeu_cau'),(53,'Can add danh_gia',14,'add_danh_gia'),(54,'Can change danh_gia',14,'change_danh_gia'),(55,'Can delete danh_gia',14,'delete_danh_gia'),(56,'Can view danh_gia',14,'view_danh_gia'),(57,'Can add binh_luan',15,'add_binh_luan'),(58,'Can change binh_luan',15,'change_binh_luan'),(59,'Can delete binh_luan',15,'delete_binh_luan'),(60,'Can view binh_luan',15,'view_binh_luan');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(15,'app','binh_luan'),(14,'app','danh_gia'),(7,'app','danh_sach_lop'),(8,'app','gia_su'),(9,'app','level'),(13,'app','lop_yeu_cau'),(10,'app','mon_hoc'),(12,'app','phu_huynh'),(11,'app','so_lien_lac'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-11-21 05:38:12.063887'),(2,'auth','0001_initial','2019-11-21 05:38:15.240775'),(3,'admin','0001_initial','2019-11-21 05:38:26.938298'),(4,'admin','0002_logentry_remove_auto_add','2019-11-21 05:38:29.719214'),(5,'admin','0003_logentry_add_action_flag_choices','2019-11-21 05:38:29.839586'),(6,'app','0001_initial','2019-11-21 05:38:40.346972'),(7,'app','0002_auto_20191121_0538','2019-11-21 05:39:27.969820'),(8,'contenttypes','0002_remove_content_type_name','2019-11-21 05:39:30.549481'),(9,'auth','0002_alter_permission_name_max_length','2019-11-21 05:39:32.591875'),(10,'auth','0003_alter_user_email_max_length','2019-11-21 05:39:33.185936'),(11,'auth','0004_alter_user_username_opts','2019-11-21 05:39:33.375110'),(12,'auth','0005_alter_user_last_login_null','2019-11-21 05:39:35.296683'),(13,'auth','0006_require_contenttypes_0002','2019-11-21 05:39:35.519086'),(14,'auth','0007_alter_validators_add_error_messages','2019-11-21 05:39:35.726667'),(15,'auth','0008_alter_user_username_max_length','2019-11-21 05:39:38.478632'),(16,'auth','0009_alter_user_last_name_max_length','2019-11-21 05:39:41.572284'),(17,'auth','0010_alter_group_name_max_length','2019-11-21 05:39:41.980759'),(18,'auth','0011_update_proxy_permissions','2019-11-21 05:39:42.152295'),(19,'sessions','0001_initial','2019-11-21 05:39:42.842700'),(20,'app','0003_auto_20191121_0543','2019-11-21 05:43:03.814753');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-25 13:25:38
