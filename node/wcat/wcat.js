// 1) node wcat.js filepath => displays the contents of a file in terminal
// 2) node wcat.js filepath1 filepath2 filepath3 =? displays the contents of all files in terminal in concatenated foem in given order
const fs = require("fs"); // fs modules
let inputArr = process.argv.slice(2);
// console.log(inputArr);

let filesArr = [];
// place files path in filesArr
for (let i = 0; i < inputArr.length; i++) {
    filesArr.push(inputArr[i]);
}
// console.log("file to be read are: " + filesArr);

// check if all the files are present
for (let i = 0; i < filesArr.length; i++) {
    // Check file exit using -> [FS modules]
    let doesExist = fs.existsSync(filesArr[i]);
    if (!doesExist) {
        console.log("Files does not exits");
        return;
    }
}

// content read and appending starts
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let fileContent = fs.readFileSync(filesArr[i]);
    content += fileContent + "\n";
}
console.log(content);