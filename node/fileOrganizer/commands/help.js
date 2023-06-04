function help() {
	console.log(`These are some of myCLI commands used in various situations
        1. node main.js help
        2. node main.js tree <path>
        3. node main.js organize <path>
    `);
}

// function abc() {
//     console.log("in help.js");
// }

module.exports = {
	// key : value pair
	help: help,
	// haathi: help, // -> eg. multiple exports
	// ghoda: abc,
};
