const fs = require('fs'),
	path = require('path');

const generateTree = (dir, filesToIgnore = ['.DS_Store', 'Thumbs.db']) => {

	// use sync method since we're returning data
	const tree = fs.readdirSync(dir)

		// filter out filesToIgnore
		.filter(file => !filesToIgnore.includes(file))

		// change each file to a full object
		.map(file => {
			const fileObj = {};
			fileObj.name = file;
			fileObj.fullPath = path.join(dir, file);
			fileObj.isDir = fs.statSync(fileObj.fullPath).isDirectory();
			if (!fileObj.isDir) {
				fileObj.ext = path.extname(fileObj.fullPath);
				fileObj.ext = fileObj.ext.substring(1, fileObj.ext.length);
			}
			return fileObj;
		})

		// sort files; give precedence to folders
		.sort((a, b) => {
			if (a.isDir && b.isDir) return (a.name < b.name) ? -1 : 1;
			else if (a.isDir) return -1;
			else if (b.isDir) return 1;
			else return (a.name < b.name) ? -1 : 1;
		});

		return tree;

}

module.exports = generateTree;
