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
    //process.stdout.write('.');
  });
};

module.exports = { setupInput }; // exports the function