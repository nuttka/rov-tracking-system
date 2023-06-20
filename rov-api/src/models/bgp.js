const Sequelize = require('sequelize');
const DB = require('../config/db')


const Bgp = DB.define(
    'bgp', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        record_type: Sequelize.STRING,
        type: Sequelize.STRING,
        time: Sequelize.STRING,
        project: Sequelize.STRING,
        collector: Sequelize.STRING,
        router: Sequelize.STRING,
        router_ip: Sequelize.STRING,
        peer_asn: Sequelize.STRING,
        peer_address: Sequelize.INET,
        prefix: Sequelize.CIDR,
        next_hop: Sequelize.STRING,
        as_path: Sequelize.STRING,
        communities: Sequelize.STRING,
        old_state: Sequelize.STRING,
        new_state: Sequelize.STRING,
    }, {
        createdAt: false,
        updatedAt: false,
    }
);

module.exports = Bgp;