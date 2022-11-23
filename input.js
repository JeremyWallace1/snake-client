const { stdin } = require("process");

// setup interface to handle user input from stdin
let connection;

const setupInput = (conn) => {
  connection = conn; //setupInput() places a reference to conn (from play.js) into the variable connection which is in the global scope of this module.
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) { //When data comes in from your keyboard, the stdin event handler can now interact with the server because the scope in the handler now includes both data from the keyboard AND the connection object!
  if (data === '\u0003') {
    console.log("Exiting the game.");
    process.exit();
  }

  if (data === 'w') {
    // console.log("Pressed w");
    connection.write("Move: up");
  }
  
  if (data === 'a') {
    // console.log("Pressed a");
    connection.write("Move: left");
  }
  
  if (data === 's') {
    // console.log("Pressed s");
    connection.write("Move: down");
  }
  
  if (data === 'd') {
    // console.log("Pressed d");
    connection.write("Move: right");
  }
  if (data === 'p') {
    connection.write("Say: I'm gonna get you!");
  }
};

module.exports = { setupInput }; // exports the function