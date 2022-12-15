const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

require("dotenv-safe").config();
const express = require('express');
const cors = require("cors");
const index = require("./routes/index");
const users = require("./routes/userRoutes");
const maps = require("./routes/mapsRoutes");
const mongoose = require("./database/mongooseConnect");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/", index);
app.use("/users", users);
app.use("/maps", maps);
app.use("/mapear-vida-api-documentation", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;