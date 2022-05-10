const https = require('https');


const db = https.get('https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=sport&image_type=photo', (res) => {
	let data = [];
		
// A chunk of data has been received
	res.on('data: ', (chunk) => {
		data += chunk;
	});
	// The whole response has been received. Print out the result
	res.on('end: ', () => {
		data = JSON.parse(data);
		console.log('data: ', data);
		return data;
	});
})
.on('error: ', (err) => {
	console.log('Error: ', err.message);
});

module.exports = db;
