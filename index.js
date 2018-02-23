const express = require('express'),
	path = require('path'),
	app = express(),
	Tree = require('./src/models/Tree');

// serving files for preview application
app.use('/', express.static('preview'));

// serving emails that are built with the workflow
app.use('/emails', express.static('emails'));

// serve json that displays the full file tree for built emails
app.get('/tree', (req, res) => {
	const filetree = new Tree('emails');
	res.json(filetree.getTree());
});

app.listen(3000, () => console.log(`App listening on port 3000`));
