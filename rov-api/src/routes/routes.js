const router = require("express").Router();
const bgpRepository = require('../repositories/bgp.repository');
const asRepository = require('../repositories/autonomous.system.repository');
const experimentRepository = require('../repositories/experiment');

const initialize = require('../initialize');

router.get("/", (req, res) => {
    return res.status(200).json("Webserver up");
});

router.get("/bgp", async  (req,res) => {
    return res.status(200).send(await bgpRepository.getAll());
});

router.get("/experiment", async (req,res) => {
    return res.status(200).send(await experimentRepository.getAll());
});

router.get("/as", async  (req,res) => {
    return res.status(200).send(await asRepository.getAll());
});


router.get("/initialize", async  (req,res) => {
    return res.status(200).send(await initialize.initialize());
});



module.exports = router;