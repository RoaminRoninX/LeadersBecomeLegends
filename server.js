const express = require('express'); // imports express framework
const sendingMail = require('./public/js/mail'); // exports sendingMail function in mail.js file
const app = express(); // sets express to a variable called app, which you can access functions within it via . notations
const PORT = (process.env.PORT || 8080); // the port we will set our local host to 
const log = console.log; // saves console.log function to a variable called log 
const path = require('path'); // imports path
//_____________________________________________________________
//allows your app to render static pages
app.use(express.static(__dirname + '/public'));
//data parsing
app.use(express.urlencoded({
	extended: false
}));

app.use(express.json());
//_____________________________________________________________


app.post('/sendToServer', (req, res) => {
	//req.body stores the data parsed sent from the form into an object
	//then we make 3 variables and set their values from an the req.body object
	const {email, subject, text} = req.body;
	log('Data:', req.body);
	//we pass needed variables into sendingMail function stored in the mail.js file
	//this will send the data to email address
	sendingMail(email, subject, text, function (err, data){
		if(err){
			res.status(500).json({ message: 'Internal Error' });
		} else {
			res.json({ message: 'Email Sent My G!!'});
		}
	});
});

//_____________________________________________________________


// this searches for index.html file 
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/./public/index.html'));
});
//this sends your index.html file to local host 8080
app.listen(PORT, () => log('Server is Starting on PORT, ', (process.env.PORT || 8080)));