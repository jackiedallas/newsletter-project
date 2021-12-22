const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
app.use(bodyParser.urlencoded({extended: true}))









app.listen(3000, function () {
	console.log("Server is running..")
})