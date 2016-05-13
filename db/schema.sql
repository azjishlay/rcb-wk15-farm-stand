CREATE DATABASE IF NOT EXISTS `farmstand`;
USE `farmstand`;

CREATE TABLE `inventory` (
	`id` INT(11) AUTO_INCREMENT NOT NULL,
	`item` VARCHAR(255) NOT NULL,
	`category` VARCHAR(255) NOT NULL,
	`price` DECIMAL(8,2),
	`quantity` INT(11)

	PRIMARY KEY ( `id` ) );