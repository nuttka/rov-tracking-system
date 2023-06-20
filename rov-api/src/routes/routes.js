const router = require("express").Router();
const bgpRepository = require('../repositories/bgp.repository');
const asRepository = require('../repositories/autonomous.system.repository');
const experimentRepository = require('../repositories/experiment');

router.get("/", (req, res) => {
    return res.status(200).json("Webserver up");
});

router.get("/bgp", (req,res) => {
    return res.status(200).send(bgpRepository.getAll());
});

router.get("/experiment", (req,res) => {
    return res.status(200).send(experimentRepository.getAll());
});

router.get("/as", (req,res) => {
    return res.status(200).send(asRepository.getAll());
});



module.exports = router;