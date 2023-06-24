const express = require("express");
const app = express();
const router = require("./src/routes/routes");
const cors = require('cors');

const db = require("./src/models/index");

const HOST = 'localhost';
const PORT = 3001;

app.use(express.json());

app.use(cors());

app.use("/api", router);

app.listen(PORT, HOST, () => {
   console.info(`Webserver is up for ${HOST} on port ${PORT}`);
});