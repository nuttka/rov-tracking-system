const bgp = require("../models/bgp");

module.exports = {
   getById: (id) => bgp.findByPk(id),
   getOneByField: (params) => bgp.findOne({ where: params }),
   getAllByField: (params) => bgp.findAndCountAll({ where: params }),
   getAll: () => bgp.findAll(),
   create: (params) => bgp.create(params)
};