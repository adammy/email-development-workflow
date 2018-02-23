const fs = require('fs'),
	cheerio = require('cheerio'),
	File = require('./File');

class Email extends File {

	constructor(...args) {
		super(...args);
		this.subject;
		this.preview;
		this.setEmailProps();
	}

	setEmailProps() {
		const html = cheerio.load(fs.readFileSync(this.getFullPath()));
		this.subject = html('title').text() || 'Undefined';
		this.preview = html('.preview').text() || 'Undefined';
	}

}

module.exports = Email;
