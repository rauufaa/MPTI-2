-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2024 at 08:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pangkalan_lpg`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail_pembelian`
--

CREATE TABLE `detail_pembelian` (
  `id_pembelian` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `tipe_pembelian` set('ISI','KOSONG','TUKAR') NOT NULL,
  `harga` int(11) NOT NULL,
  `id_gas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_pengiriman`
--

CREATE TABLE `detail_pengiriman` (
  `id_pengiriman` int(11) NOT NULL,
  `jumlah` int(11) NOT NULL,
  `id_gas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gas`
--

CREATE TABLE `gas` (
  `id` int(10) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `harga_isi` int(10) NOT NULL,
  `harga_kosong` int(10) NOT NULL,
  `harga_tukar` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `konsumen`
--

CREATE TABLE `konsumen` (
  `nik` varchar(20) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `tipe` set('Rumah Tangga','Warung') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pembelian_gas`
--

CREATE TABLE `pembelian_gas` (
  `id` int(11) NOT NULL,
  `tanggal` int(11) NOT NULL,
  `nik_konsumen_pembelian` varchar(20) NOT NULL,
  `username_input_pembelian` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengiriman_gas`
--

CREATE TABLE `pengiriman_gas` (
  `id` int(11) NOT NULL,
  `tanggal` datetime NOT NULL,
  `username_input_pengiriman` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `token` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `nama`, `password`, `email`, `token`) VALUES
('macan', NULL, '1234', 'raarar', NULL),
('rauufaa', 'Rauuf Anugerah Akbar', '$2b$10$9xE9U4LBSv6Hn523XUrQ6e2IfbUQSCn7dNrUs7NzY/peUVqDYRtX6', 'rauufakbar03@gmail.com', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `detail_pembelian`
--
ALTER TABLE `detail_pembelian`
  ADD KEY `id_pembelian` (`id_pembelian`),
  ADD KEY `id_gas` (`id_gas`);

--
-- Indexes for table `detail_pengiriman`
--
ALTER TABLE `detail_pengiriman`
  ADD KEY `id_pengiriman` (`id_pengiriman`),
  ADD KEY `id_gas` (`id_gas`);

--
-- Indexes for table `gas`
--
ALTER TABLE `gas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `konsumen`
--
ALTER TABLE `konsumen`
  ADD PRIMARY KEY (`nik`);

--
-- Indexes for table `pembelian_gas`
--
ALTER TABLE `pembelian_gas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username_input_pembelian` (`username_input_pembelian`),
  ADD KEY `nik_konsumen_pembelian` (`nik_konsumen_pembelian`);

--
-- Indexes for table `pengiriman_gas`
--
ALTER TABLE `pengiriman_gas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username_input_pengiriman` (`username_input_pengiriman`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `token` (`token`),
  ADD UNIQUE KEY `email` (`email`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pembelian_gas`
--
ALTER TABLE `pembelian_gas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengiriman_gas`
--
ALTER TABLE `pengiriman_gas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `detail_pembelian`
--
ALTER TABLE `detail_pembelian`
  ADD CONSTRAINT `detail_pembelian_ibfk_1` FOREIGN KEY (`id_pembelian`) REFERENCES `pembelian_gas` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `detail_pembelian_ibfk_2` FOREIGN KEY (`id_gas`) REFERENCES `gas` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `detail_pengiriman`
--
ALTER TABLE `detail_pengiriman`
  ADD CONSTRAINT `detail_pengiriman_ibfk_1` FOREIGN KEY (`id_pengiriman`) REFERENCES `pengiriman_gas` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `gas`
--
ALTER TABLE `gas`
  ADD CONSTRAINT `gas_ibfk_1` FOREIGN KEY (`id`) REFERENCES `detail_pengiriman` (`id_gas`) ON UPDATE CASCADE;

--
-- Constraints for table `pembelian_gas`
--
ALTER TABLE `pembelian_gas`
  ADD CONSTRAINT `pembelian_gas_ibfk_1` FOREIGN KEY (`nik_konsumen_pembelian`) REFERENCES `konsumen` (`nik`) ON UPDATE CASCADE;

--
-- Constraints for table `pengiriman_gas`
--
ALTER TABLE `pengiriman_gas`
  ADD CONSTRAINT `pengiriman_gas_ibfk_1` FOREIGN KEY (`username_input_pengiriman`) REFERENCES `users` (`username`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
