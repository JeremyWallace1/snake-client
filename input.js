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

  if (data === '\u0077') {
    console.log("Pressed", data);
    connection.write('up');
  }
  
  if (data === '\u0061') {
    // console.log("Pressed a");
    connection.process(data);
  }
  
  if (data === '\u0073') {
    // console.log("Pressed s");
    connection.process(data);
  }
  
  if (data === '\u0064') {
    // console.log("Pressed d");
    connection.process(data);
  }
};

module.exports = { setupInput }; // exports the function