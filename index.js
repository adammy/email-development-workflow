const express = require('express'),
	path = require('path'),
	fileTree = require('node-file-tree'),
	app = express();

// serving files for preview application
app.use('/', express.static('preview/public'));

// serving emails that are built with the workflow
app.use('/emails/build/', express.static('emails/build'));

// serve json that displays the file tree for built emails
app.get('/api/tree', (req, res) => {
	const path = req.query.path || 'emails/build';
	res.json(fileTree(path, true));
});

app.listen(3000, () => console.log(`App listening on port 3000`));
