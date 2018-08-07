const functions = require('firebase-functions');
const express = require('express');

const appREST = express();


appREST.get('/all', (req, res) => {
	res.status(200).send({msg: "Hey there! testing this stuff over here :)"});
});

appREST.get('/id/:id', (req, res) => {
	res.send(`This id: ${req.params.id}`);
});


exports.appREST = functions.https.onRequest(appREST);
