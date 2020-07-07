const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");
const bodyParser = require('body-parser')
const resultValidation = require('./helpers/resultValidation');
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
    roomsById[roomCode] = {id: roomCode, createdBy: req.body.username, createdAvatar: req.body.avatar, players: [req.body.username], turnCount: 0};
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

    //create a new game
  socket.on('create', function(data) {
    console.log(data)
    const { username, avatar, roomCode } = data;
    roomsById[roomCode] = {id: roomCode, createdBy: username, createdAvatar: avatar, player1: username, player2: "", turn: "", board: ['','','','','','','','','']};
    socket.join(data.roomCode);
    io.to(data.roomCode).emit("code", roomsById[roomCode])
  });
    //join to an existing game
  socket.on('join', data => {
    const { username, code } = data;
    if(roomsById.code && !roomsById.code.player2.length) return;
    roomsById[code].player2 = username;
    socket.join(code);
    io.to(code).emit("code", roomsById[code]);
  });
    //start the game once both player have joined
  socket.on('start', data => {
    console.log(data);
    const {code, turn} = data;
    roomsById[code].turn = turn;
    io.to(code).emit("started", roomsById[code]);
  });
    //player played a turn
  socket.on('play', async data => {
      console.log({data})
      const { index, avatar, code, turn, playedBy } = data;
      // roomsById[code].turnCount += 1;
      roomsById[code].turn = turn;
      roomsById[code].board[index] = avatar;
      const winner = await resultValidation.getWinner(roomsById[code], playedBy, roomsById[code].turnCount);
      if(winner !== null && winner !== 'tie') {
          io.to(code).emit('play_response', { board: roomsById[code].board, turn: roomsById[code].turn, winner: playedBy });
      }
      else if(winner === 'tie') {
        io.to(code).emit('play_response', { board: roomsById[code].board, turn: roomsById[code].turn, winner });
      }
      else {
        io.to(code).emit('play_response', {board: roomsById[code].board, turn: roomsById[code].turn, winner: null});
      }
  });
  socket.on('restart', data => {
      const { code, turn } = data;
    roomsById[code].board = ["","","","","","","","",""];
    // roomsById[code].turn = turn;
    // console.log('The turn is of :', {turn})
    io.to(code).emit('started', roomsById[code]);
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

