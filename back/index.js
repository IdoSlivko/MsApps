const express = require('express');
const app = express();
// const router = require('./routes.js');
// const db = require('./db.js');
const bodyParser = require('body-parser');
// const path = require("path");
const https = require('https');

const { PORT = 8080 } = process.env;

app.use(function(req, res, next) {
	// console.log('req: ', req);

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header("Access-Control-Allow-Credentials", true);

	if (req.method === 'OPTIONS') {
		res.send();
	} else {
		next();
	}
});

// app.use(bodyParser.json());
app.use(express.json()); // 2021 express.js version...
app.use(bodyParser.urlencoded({ extended: true }));


https.get('https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=sport&image_type=photo', (res) => {
	
	let data = '';

  res.on('data', (chunk) => {
		data += chunk;
  });
	
  res.on('end', () => {
		data = JSON.parse(data);
		console.log('data: ', data);
		console.log('typeof data: ', typeof data);
  });
	
}).on("error", (err) => {
	console.log("Error: ", err.message);
});

// // app.use('/', router);
// app.use('/', (req, res) => {
// 	// console.log('data:', db);
// 	res.send(db);
// });

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
