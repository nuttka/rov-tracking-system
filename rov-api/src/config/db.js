const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'rov-tracking-system',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }    
);

module.exports = sequelize;