const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const objConnect = connect();
setupInput(objConnect);