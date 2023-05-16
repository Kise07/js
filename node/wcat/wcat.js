// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3 => displays the contents of all files in terminal in concatenated foem in given order
// 3) `node wcat.js [-n] file1 file2 file3` OR `node wcat.js [-n] file1` => no. the lines of code
const fs = require('fs'); // fs modules
let input = process.argv;
// console.log(input);
let inputArr = process.argv.slice(2);
console.log(inputArr);

let filesArr = []; // Files Array here!
let optionsArr = []; // Options Array here!
// =======> place files path in filesArr <=======
for (let i = 0; i < inputArr.length; i++) {
	let firstChar = inputArr[i].charAt(0);
	// console.log(firstChar);
	if (firstChar == '-') {
		optionsArr.push(inputArr[i]);
	} else {
		filesArr.push(inputArr[i]);
	}
}
// console.log("file to be read are: " + filesArr);

// =======> check if all the files are present <=======
for (let i = 0; i < filesArr.length; i++) {
	// Check file exit using -> [FS modules]
	let doesExist = fs.existsSync(filesArr[i]);
	if (!doesExist) {
		console.log('One or more Files does not exits');
		return;
	}
}

// =======> content read and appending starts <=======
let content = '';
for (let i = 0; i < filesArr.length; i++) {
	let fileContent = fs.readFileSync(filesArr[i]);
	content = content + fileContent + '\n';
}
// console.log(content);

let contentArr = content.split('\n');
console.table(contentArr);

// =======> -s command -> checking if -s is present or not <=======
let tempArr = []; // tempArr for storing contents of -s command

let isSpresent = optionsArr.includes('-s');
// -s command instructions:
if (isSpresent) {
	for (let i = 1; i < contentArr.length; i++) {
		if (contentArr[i] == '' && contentArr[i - 1] == '') {
			contentArr[i] = null;
		} else if (contentArr[i] == '' && contentArr[i - 1] == null) {
			contentArr[i] = null;
		}
	}
	console.table(contentArr);
	
	// push everything in tempArr except null values
	for (let i = 0; i < contentArr.length; i++) {
		if (contentArr[i] != null) {
			tempArr.push(contentArr[i]);
		}
	}
	console.log('data after removing extra lines\n', tempArr);
}

contentArr = tempArr; // storing ContentArr in tempArr

// -n & -b commands features instructions
let indexOfN = optionsArr.indexOf('-n');
let indexOfB = optionsArr.indexOf('-b');
// if -n OR -b is not found, return -1

// checking for `first come, first server` either -n OR -b
let finalOption = ''; // empty

// if -n OR -b are present here! // EdgeCase -> 1
if (indexOfN != -1 && indexOfB != -1) {
	if (indexOfN < indexOfB) {
		finalOption = '-n'; // empty to -n
	} else {
		finalOption = '-b'; // empty to -b
	}
} else { // either -n OR -b is present here! // EdgeCase -> 2
	if (indexOfN != -1) {
		finalOption = '-n';
	} else if (indexOfB != -1) {
		finalOption = '-b';
	}
}

// calling of function by evaluating finalOption
if (finalOption == "-n") {
    modifyContentByN(); // -n function will be called here!
} else if (finalOption == "-b") {
    modifyContentByB(); // -b function will be called here!
}

// -n content function
function modifyContentByN() {
	for (let i = 0; i < contentArr.length; i++) {
		contentArr[i] = (i + 1) + ") " + contentArr[i]; // numbering all new Lines
	}
}

console.log(contentArr);

// -b content function
function modifyContentByB() {
	let count = 1; // count for Code's Lines
	for (let i = 0; i < contentArr.length; i++) {
		if (contentArr[i] != "") { // checking if the current line is empty or not
			contentArr[i] = count + ") " + contentArr[i]; // numbering Code's Lines
			count++;
		}
	}
}