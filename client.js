const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JTW");
  });
 
  return conn;
};

module.exports = { connect }; //export the connect object (function) for use in play.js