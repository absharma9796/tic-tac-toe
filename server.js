const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname,'/build')));
app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));                               
});


const server = http.createServer(app);

const io = socket(server);

let interval;
let count = 0;

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("message", `The client is connected ${count}`);
  socket.on("chat", data => {
      console.log(data)
      io.emit("chat2", data)
  })

  socket.on("disconnect", () => {
    io.emit('message','Player X left');
    console.log("Client disconnected");
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));

