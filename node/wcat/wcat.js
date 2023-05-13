// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3 => displays the contents of all files in terminal in concatenated foem in given order
// 3) `node wcat.js [-n] file1 file2 file3` OR `node wcat.js [-n] file1` => no. the lines of code
const fs = require("fs"); // fs modules
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
        console.log("One or more Files does not exits");
        return;
    }
}

// =======> content read and appending starts <=======
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content = content + fileContent + "\n";
}
// console.log(content);

let contentArr = content.split("\n");
console.log(contentArr);