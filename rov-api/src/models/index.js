const database = require('../config/db');
const as = require('./autonomous.system');
const bgp = require('./bgp');
const experiment = require('./experiment');

database.sync();

module.exports = database;