-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 08, 2022 at 01:43 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `escape_room_petah_tikva`
--
CREATE DATABASE IF NOT EXISTS `escape_room_petah_tikva` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `escape_room_petah_tikva`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryId`, `categoryName`) VALUES
(1, 'עורף האוייב'),
(2, 'ספיי קידס'),
(3, 'הנגאובר'),
(4, 'חופשה בהפרעה');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `firstUserAge` int(11) NOT NULL,
  `secondUserAge` int(11) NOT NULL,
  `thirdUserAge` int(11) DEFAULT NULL,
  `fourthUserAge` int(11) DEFAULT NULL,
  `fifthUserAge` int(11) DEFAULT NULL,
  `sixthUserAge` int(11) DEFAULT NULL,
  `seventhUserAge` int(11) DEFAULT NULL,
  `eighthUserAge` int(11) DEFAULT NULL,
  `ninthUserAge` int(11) DEFAULT NULL,
  `tenthUserAge` int(11) DEFAULT NULL,
  `categoryId` int(11) NOT NULL,
  `similarGame` varchar(15) NOT NULL,
  `payment` varchar(50) NOT NULL,
  `sexuallyAware` varchar(15) DEFAULT NULL,
  `hangoverEilat` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `firstName`, `lastName`, `firstUserAge`, `secondUserAge`, `thirdUserAge`, `fourthUserAge`, `fifthUserAge`, `sixthUserAge`, `seventhUserAge`, `eighthUserAge`, `ninthUserAge`, `tenthUserAge`, `categoryId`, `similarGame`, `payment`, `sexuallyAware`, `hangoverEilat`) VALUES
(1, 'עידן', 'להב', 15, 16, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3, 'לא', 'שובר', NULL, NULL),
(6, 'נועה', 'נועה', 23, 16, 18, 13, 23, NULL, NULL, NULL, NULL, NULL, 3, 'false', 'מזומן', 'true', 'false'),
(7, 'עומר', 'עומר', 12, 11, 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'false', 'אשראי', NULL, NULL),
(12, 'ddd', 'ddd', 12, 12, 22, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 'false', 'אשראי', NULL, NULL),
(13, 'df', 'dsf', 22, 22, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 'true', 'אשראי', NULL, NULL),
(14, 'sdf', 'sdfdsf', 22, 11, 11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'false', 'אשראי', NULL, NULL),
(15, 'sdf', 'sdf', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'false', 'אשראי', NULL, NULL),
(16, 'asdasd', 'asdsa', 1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'true', 'בהצדעה', NULL, NULL),
(18, 'יובל', 'יובל', 1, 2, 3, 4, 5, NULL, NULL, NULL, NULL, NULL, 4, 'true', 'מזומן', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `email`, `password`) VALUES
(1, 'idanlaav.1@gmail.com', '475594658ee267ed38042cd53243a6e8870a2e3f1f68b78b537cad8cddfd6d7ba924dfd617da21f10268e3d9938b196db8c8dc1a86cc578d999f9ac7b20a7e77');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`categoryId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
