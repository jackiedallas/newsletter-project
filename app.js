const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
const request = require("request");
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (request, response) {
	response.sendFile(__dirname + "/index.html");
})









app.listen(3000, function () {
	console.log("Server is running..")
})