const bubble = require("./bubblechart.js");
const bar = require("./bargraph.js");
const column = require("./columngraph.js");
const pie = require("./piegraph.js");

const GraphINTERFACE = {
	bubble: bubble(),
	bar: bar(),
	column: column(),
	pie: pie()
}
module.exports = GraphINTERFACE;

