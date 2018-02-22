const fs = require('fs');

class File {

	constructor(name, dir) {
		this.name = name;
		this.dir = dir;
		this.created;
		this.modified;
		this.size;
		this.setFsProps();
	}

	setFsProps() {
		const stats = fs.statSync(this.getFullPath());
		this.created = stats.birthtime;
		this.modified = stats.mtime;
		this.size = stats.size;
	}

	getFullPath() {
		return `${this.dir}/${this.name}`;
	}

	getData() {
		return this;
	}

}

module.exports = File;
