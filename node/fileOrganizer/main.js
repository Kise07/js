// entry point of my command line
let helpFunc = require('./commands/help');
let treeFunc = require('./commands/tree');
let orgFunc = require('./commands/organize');
// console.log(helpFunc.haathi());
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];
switch (command) {
	case 'help':
		// call help function
		helpFunc.help();
		// console.log("help function called and executed succesfully on path " + path);
		break;
	case 'tree':
		// call tree function
		treeFunc.tree(path);
		// console.log("tree function called and executed succesfully on path " + path);
		break;
	case 'organize':
		// call organize function
		orgFunc.organize(path);
		// console.log("organize function called and executed succesfully on path " + path);
		break;
	default:
		console.log('command not recognized :/');
		break;
}
