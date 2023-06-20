const Sequelize = require('sequelize');
const DB = require('../config/db')


const Experiment = DB.define(
    'experiment', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        day: Sequelize.DATE,
        peer_asn: Sequelize.STRING,
        peer_address: Sequelize.STRING,
        anchor_prefix: Sequelize.CIDR,
        experiment_prefix: Sequelize.CIDR,
    }, {
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = Experiment;