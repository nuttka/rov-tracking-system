const experiment = require("../models/experiment");

module.exports = {
   getById: (id) => experiment.findByPk(id),
   getOneByField: (params) => experiment.findOne({ where: params }),
   getAllByField: (params) => experiment.findAndCountAll({ where: params }),
   getAll: () => experiment.findAll(),
   create: (params) => experiment.create(params)
};