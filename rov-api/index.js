const express = require("express");
const app = express();
const router = require("./src/routes/routes");

const db = require("./src/models/index");

const HOST = 'localhost'
const PORT = 3000

app.use(express.json());

app.use("/api", router);

app.listen(PORT, HOST, () => {
   console.info(`Webserver is up for ${HOST} on port ${PORT}`);
});