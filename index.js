const express = require('express'),
	path = require('path'),
	app = express(),
	generateTree = require('./modules/Tree');

// serving files for preview application
app.use('/', express.static('preview/public'));

// serving emails that are built with the workflow
app.use('/emails', express.static('emails/build'));

// serve json that displays the file tree for built emails
app.get('/api/tree/', (req, res) => {
	const path = req.query.path || 'emails/build';
	res.json(generateTree(path));
});

app.listen(3000, () => console.log(`App listening on port 3000`));
