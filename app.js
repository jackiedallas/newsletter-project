
const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");
const app = express();
const https = require("https");
const request = require("request");
// app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function (request, response) {
	response.sendFile(__dirname + "/signup.html");
})









app.listen(3000, function () {
	console.log("Server is running..")
})