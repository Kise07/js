const fs = require("fs"); // fs module
const path = require("path"); // path module
let types = {
	media: ["mp4", "mkv", "mp3"],
	archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
	doucuments: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex"],
	app: ['exe', 'dmg', 'pkg', 'deb'],
	images: ['png', 'jpg', 'jpeg']
}

function organize(srcPath) {
	// 1. to check if srcPath is present
	if (srcPath == undefined) {
		// The process.cwd() method returns the current working directory of the Node.js process.
		// console.log(srcPath); // -> undefined
		srcPath = process.cwd();
		// console.log("source path is ", srcPath);
	}

	// 2. to create a directory -> organized_files
	let organizedFiles = path.join(srcPath, "organized_files");
	// console.log("organized files folder path is ", organizedFiles);
	if (fs.existsSync(organizedFiles) == false) {
		// organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
		fs.mkdirSync(organizedFiles);
	} else {
		console.log('folder already exists');
	}

	// 3. scan the entire srcPath(downloads folder in this case)
	// Reads the contents of the directory. ->basically read the names of files present in directory
	let allFiles = fs.readdirSync(srcPath);
	console.log(allFiles);

	// 4. traverse over all the files and classify them on the basis of their extensions eg.(.pdf or .mp3)
	for (let i = 0; i < allFiles.length; i++) {
		// let ext = allFiles[i].split(".")[1];
		let ext = path.extname(allFiles[i]);
		console.log(ext);
	}
}

let srcPath = "/Users/kise/Desktop/js/node/fileOrganizer/downloads";
organize(srcPath);