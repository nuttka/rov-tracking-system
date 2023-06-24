const as = require("../models/autonomous.system");

module.exports = {
   getOneByField: (params) => as.findOne({ where: params }),
   getAll: () => as.findAll(),
   create: (params) => as.create(params)
};