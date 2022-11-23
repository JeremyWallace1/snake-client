const { stdin } = require("process");

// setup interface to handle user input from stdin
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    console.log("Exiting the game.");
    process.exit();
  }

  if (data === '\u0077') {
    console.log("Pressed w");
  }
  
  if (data === '\u0061') {
    console.log("Pressed a");
  }
  
  if (data === '\u0073') {
    console.log("Pressed s");
  }
  
  if (data === '\u0064') {
    console.log("Pressed d");
  }
};

module.exports = { setupInput }; // exports the function