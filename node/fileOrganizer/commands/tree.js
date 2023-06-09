const fs = require('fs');

const path = require('path');

function tree(dirPath) {
	if (dirPath == undefined) {
		console.log('Please Enter a Valid Path');
		return;
	} else {
		let doesExitst = fs.existsSync(dirPath);
		if (doesExitst == true) {
			treeHelper(dirPath, ' ');
		}
	}
}

function treeHelper(targetPath, indent) {
	let isFile = fs.lstatSync(targetPath).isFile();

	if (isFile == true) {
		let fileName = path.basename(targetPath);
		console.log(indent + '├── ' + fileName);
		return;
	}
	let dirName = path.basename(targetPath);
	console.log(indent + '└──' + dirName);

	let children = fs.readdirSync(targetPath);

	for (let i = 0; i < children.length; i++) {
		let childpath = path.join(targetPath, children[i]);
		treeHelper(childpath, indent + '\t');
	}
}

module.exports = {
	tree: tree,
};

// let srcPath = "/Users/kise/Desktop/js/node/fileOrganizer/commands";
// treeFn(srcPath);
