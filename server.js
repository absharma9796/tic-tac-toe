const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;
const roomsById = {
    /*
        '675152' : {
            id: '675152',
            createdBy: 'Abhishek',
            creatorAvatar: '',
            players: ['Abhishek']
        }
    */
}
const playersById = {

}

const app = express();
// parse application/x-www-form-urlencoded, application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'/build')));
app.post('/newgame', (req,res) => {
    console.log(req.body)
    const roomCode = `${Math.floor(100000 + Math.random() * 900000)}`;
    console.log(`Creating room: ${roomCode}`)
    roomsById[roomCode] = {id: roomCode, createdBy: req.body.username, createdAvatar: req.body.avatar, players: [req.body.username]};
    res.json({ username: req.body.username, code: roomCode});
})

app.post('/joingame', (req,res) => {
    const { username, code } = req.body;
    console.log(req.body, roomsById)
    if(Object.keys(roomsById).includes(req.body.code)) {
        const roomLength = roomsById[code].players.length;
        if(roomLength < 2) {
            roomsById[code].players.push(username);
            const avatar = roomsById[code].createdAvatar === 'x' ? 'o' : 'x';
            res.json({avatar, opponent: roomsById[code].players[0], msg: "Game Started", success: true});
        }
        else if(roomLength === 2) {
            res.json({msg: "Game is full", success: false})
        }
    }
    else {
        res.json({msg: "Game not found", success: false})
    }
})

app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));                               
});


const server = http.createServer(app);

const io = socket(server);

let count = 0;

io.on("connection", async (socket) => {
    const userId = socket.id;
    socket.join(userId);

  socket.on('create', function(data) {
    console.log(data)
    const { username, avatar, roomCode } = data;
    roomsById[roomCode] = {id: roomCode, createdBy: username, createdAvatar: avatar, player1: username, player2: ""};
    socket.join(data.roomCode);
    io.to(data.roomCode).emit("code", roomsById[roomCode])
  });
  socket.on('join', data => {
    const { username, code } = data;
    if(roomsById.code && !roomsById.code.player2.length) return;
    roomsById[code].player2 = username;
    socket.join(code);
    io.to(code).emit("code", roomsById[code]);
  })
  const roomChannels = Object.keys(roomsById);
  console.log(roomChannels)
  socket.emit("message", `The client is connected ${count}`);
  socket.on("disconnect", () => {
    io.emit('message','Player X left');
    console.log("Client disconnected");
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));

