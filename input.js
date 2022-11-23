// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // your code here
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Exiting the game.");
      process.exit();
    }
    if (key === '\u0077') {
      console.log("Pressed w");
    }
    if (key === '\u0061') {
      console.log("Pressed a");
    }
    if (key === '\u0073') {
      console.log("Pressed s");
    }
    if (key === '\u0064') {
      console.log("Pressed d");
    }
    //process.stdout.write('.');
  });
};

module.exports = { setupInput }; // exports the function