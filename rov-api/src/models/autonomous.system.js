const Sequelize = require('sequelize');
const DB = require('../config/db')


const AutonomousSystem = DB.define(
    'autonomous_system', {
        asn: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    }, {
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = AutonomousSystem;