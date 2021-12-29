
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

app.post("/", function (req, res) {
	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let email = req.body.email;
	
	console.log(firstName);
	console.log(lastName);
	console.log(email)
})









app.listen(3000, function () {
	console.log("Server is running..")
})