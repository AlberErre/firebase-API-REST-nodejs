const functions = require('firebase-functions');
const express = require('express');

const appREST = express();


appREST.get('/all', (req, res) => {
	res.send("Hey there! testing this stuff over here :)");
});

appREST.get('/id', (req, res) => {
	res.send("This id");
});


exports.appREST = functions.https.onRequest(appREST);
