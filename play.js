const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect(); //connect() returns an object that can be used to interact with the server
setupInput(conn); //the object, conn, returned by connect() should be passed into setupInput