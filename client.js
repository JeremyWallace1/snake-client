const net = require("net");

// establishes a connection with the game server
const connect = function () {
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

  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 50)
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 100)
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 150)
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 200)
  // });

/* movement commands supported by the game server
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/
// NOTE: Snakes cannot instantly make a 180 turn by moving in the opposite direction.



  
  return conn;
};

module.exports = { connect }; //export the connect object (function) for use in play.js