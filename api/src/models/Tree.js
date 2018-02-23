const fs = require('fs'),
	path = require('path'),
	File = require('./File'),
	Email = require('./Email');

class Tree {

	constructor(dir) {
		this.dir = dir;
		this.filesToIgnore = ['css', '.DS_Store', 'Thumbs.db'];
	}

	getTree(dir = this.dir) {

		const tree = [];

		fs.readdirSync(dir)

			// filter out files/folders using filesToIgnore prop
			.filter(file => !this.filesToIgnore.includes(file))

			.forEach(file => {

				const filePath = path.join(dir, file);
				const isDir = fs.statSync(filePath).isDirectory();
				const isEmail = path.extname(filePath) === '.html';

				// return obj with key of folder name and recurisively run getTree() on that folder
				if (isDir) {
					tree.push({ [file]: this.getTree(filePath) });
				}

				// return email obj
				else if (isEmail) {
					tree.push(new Email(file, dir));
				}

				// return file obj
				else {
					tree.push(new File(file, dir));
				}

			});

			return tree;

	}

}

module.exports = Tree;
