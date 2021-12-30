require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const https = require("https");
const request = require("request");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function (request, response) {
	response.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;
	// mail chimp object
	const data = {
		members: [
			{
				email_address: email,
				status: "subscribed",
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName
				}
				
			}
		]
	};
	const jsonData = JSON.stringify(data);
	const url = 'https://us20.api.mailchimp.com/3.0/lists/6f0931e41c';
	const options = {
		method: "POST",
		auth: process.env.MAIL_CHIMP_API_KEY
	}
	
	const request = https.request(url, options, function (response) {
		
		if (response.statusCode === 200) {
			res.sendFile(__dirname + "/success.html");
		} else {
			res.sendFile(__dirname + "/failure.html");
		}
		
		response.on("data", function (data) {
			console.log(JSON.parse(data))
		})
	})
	
	request.write(jsonData);
	request.end();
	
})












app.listen(process.env.PORT || 3000, function () {
	console.log("Server is running..")
})

