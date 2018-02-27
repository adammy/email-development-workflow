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

			// sort files; folders take precedence, otherwise sort by name
			.sort((a, b) => {

				const aPath = path.join(dir, a),
					bPath = path.join(dir, b),
					aIsDir = fs.statSync(aPath).isDirectory(),
					bIsDir = fs.statSync(bPath).isDirectory();

				if (aIsDir && bIsDir) {
					if (a < b) {
						return -1;
					} else {
						return 1;
					}
				} else if (aIsDir) {
					return -1;
				} else if (bIsDir) {
					return 1;
				} else {
					if (a < b) {
						return -1;
					} else {
						return 1;
					}
				}

			})

			.forEach(file => {

				const filePath = path.join(dir, file),
					isDir = fs.statSync(filePath).isDirectory(),
					isEmail = path.extname(filePath) === '.html';

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
