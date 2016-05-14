// Reference standard library
var Sequelize = require("sequelize");

// Reference database connection
var sequelize = require("../config/connection.js");

// Create model that matches up with DB
var Items = sequelize.define("items", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	item: {
		type: Sequelize.STRING,
	},
	category: {
		type: Sequelize.STRING,
	},
	price: {
		type: Sequelize.INTEGER,
	},
	quantity: {
		type: Sequelize.INTEGER,
	},
});

// Sync with DB
Items.sync();

// Export
module.exports = Items;