const os = require("os"); // Interact With OS

let mySystemArch = os.arch(); // Underlying Architechture
// console.log(mySystemArch);

let myCpuInfo = os.cpus(); // CPU information
// console.log(myCpuInfo);

let hostName = os.hostname(); // Current HostName
// console.log(hostName);

let networkInfo = os.networkInterfaces(); // Network Information
// console.log(networkInfo);

console.log(os.release()); // Current OS Release
console.log(os.platform()); // operating system platform for which the Node.js binary was compiled
console.log(os.type()); // operating system name as returned by uname(3)
console.log(os.totalmem()); // total amount of system memory in bytes as an integer

// console.log(os.uptime()); // system uptime in number of seconds
let uptimeInHours = os.uptime() / 3600;
console.log(uptimeInHours);

console.log(os.userInfo()); // information about the currently effective user
console.log(os.tmpdir()); // operating system's default directory for temporary files as a string