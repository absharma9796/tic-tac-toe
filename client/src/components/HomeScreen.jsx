import React, { useState } from 'react';
import axios from 'axios';
import HomeLogo from '../images/HomeLogo';
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://tik-tac-do.herokuapp.com/";
const socket = socketIOClient(ENDPOINT);

const createRoom = ({username, avatar, roomCode}) => {
    socket.emit('create', {username, avatar,roomCode});
}

const joinRoom = ({username,code}) => {
    console.log({username,code})
    socket.emit('join', {username,code})
}

const HomeScreen = () => {
    // ['code', 'home','choose','wait','game']
    const [screen, setscreen] = useState("home");
    const [playerArr, setplayerArr] = useState({current: "", opponent: ""});
    const [username, setusername] = useState("");
    const [code, setcode] = useState("");
    const [avatar, setavatar] = useState("");
    const [creator, setcreator] = useState(false);
    const [isTurn, setisTurn] = useState('');
    // const [board, setboard] = useState({0: {0: '', 1: '', 2: ''}, 1: {0: '', 1: '', 2: ''}, 2: {0: '', 1: '', 2: ''}});
    const [board, setboard] = useState(['','','','','','','','','']);
    const [winner, setwinner] = useState(null);
    const [tie, settie] = useState(false);


    const handleCreateRoom = async () => {
        setcreator(true);
        if(!avatar.length) {
            alert("Please choose a side");
            return;
        }
        if(!username.length) {
            alert("Please enter a player name in home screen");
            return;
        }
        const roomCode = `${Math.floor(100000 + Math.random() * 900000)}`;
        setcode(roomCode);
        // const data = await axios.post('/newgame', {username, avatar})
        //                     .then(res => {
        //                         console.log(res)
        //                     })
        //                     .catch(err => {
        //                         console.log(err)
        //                     })
        setplayerArr({...playerArr, current: username});
        createRoom({username, avatar,roomCode});
        setcreator(true);
        setscreen('wait');
    }

    socket.on("code", data => {
        console.log(data)
        const { createdBy, createdAvatar, player1, player2 } = data;
        if(createdBy === playerArr.current) {
            console.log('creator');
            setavatar(createdAvatar);
            setplayerArr({...playerArr, opponent: player2});
        }
        else if(createdBy !== playerArr.current){
            console.log('creator not');
            let myAvatar = createdAvatar === 'x' ? 'o' : 'x';
            setavatar(myAvatar);
            setplayerArr({...playerArr, opponent: player1});
        }
    });

    socket.on("started", data => {
        const { turn, board } = data;
        setisTurn(turn);
        setscreen('game');
        setboard(board);
        setwinner(null);
        settie(false);
    });

    socket.on('play_response', data => {
        const { turn, board, winner } = data;
        if(winner === null) {
            setisTurn(turn);
            setboard(board);
        }
        else if(winner === 'tie') {
            setisTurn(turn);
            setboard(board);
            settie(winner);
        }
        else{
            setisTurn(turn);
            setboard(board);
            setwinner(winner);
            // setTimeout(alert(`${winner} won the game`), 5000);
        }
    });

    const handleSubmitCode = async () => {
        if(code.length < 6) {
            alert('Enter a valid game code');
            return;
        }
        setplayerArr({...playerArr, current: username});
        joinRoom({username,code});
        setscreen('wait');
    }

    const handleStartGame = () => {
        socket.emit("start", {turn: playerArr.current, code});
    }

    const handlePlayTurn = (index) => {
        console.log('played')
        setisTurn(playerArr.opponent);
        socket.emit('play', {index, avatar, code, turn: playerArr.opponent, playedBy: playerArr.current});
    }

    const handleRestartGame = () => {
        socket.emit('restart', {code, isTurn});
    }


    if(screen === 'home') {
        return (
            <div className="home-screen">
                <h5>Welcome to Tic-Tac-Toe</h5>
                <div className="center-area">
                    <div className="ca-box">
                        <label>What should we call you?</label>
                        <input type="text" className="form-control" placeholder="player name" value={username} onChange={(e) => {setusername(e.target.value)}}></input>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-dark" onClick={() => {if(!username.length){alert('Enter a player name');return;};setscreen('choose')}}>Start Game</button>
                        <span className="span-or">OR</span>
                        <button className="btn btn-dark" onClick={() => {if(!username.length){alert('Enter a player name');return;};setscreen('code')}}>Join Game</button>
                    </div>
                </div>
            </div>
        )
    }
    else if(screen === 'choose') {
        return(
            <div className="home-screen">
                <div className="home-logo-container" onClick={() => setscreen('home')}>
                    <HomeLogo size={"24"} className="home-logo"/>
                </div>
                <h5>Hello {username}</h5>
                <div className="choose-box">
                    <label>Choose your side</label>
                    <div className={avatar === 'x' ? "tile is-active" : "tile"} onClick={() => setavatar('x')}>
                        <span className="material-icons">clear</span>
                        <span className="sub">men</span>
                    </div>
                    <div className={avatar === 'o' ? "tile is-active" : "tile"} onClick={() => setavatar('o')}>
                        <span className="sub">potat</span>
                        <span className="material-icons">panorama_fish_eye</span>
                    </div>
                </div>
                <button className="btn btn-dark" onClick={handleCreateRoom}>Start Game</button>
            </div>
        )
    }
    else if(screen === 'code') {
        return(
            <div className="home-screen">
                <div className="home-logo-container" onClick={() => setscreen('home')}>
                    <HomeLogo size={"24"} className="home-logo"/>
                </div>
                <h5>Hello {username}</h5>
                <div className="center-area">
                    <div className="ca-box">
                        <label>Enter game code</label>
                        <input type="text" className="form-control" maxLength="6" placeholder="code" value={code} onChange={(e) => setcode(e.target.value)}></input>
                    </div>
                    <div className="btn-container">
                        <button className="btn btn-dark" onClick={handleSubmitCode}>Join Game</button>
                    </div>
                </div>
            </div>
        )
    }

    else if(screen === 'wait') {
        return(
            <div className="home-screen">
                <div className="home-logo-container" onClick={() => setscreen('home')}>
                    <HomeLogo size={"24"} className="home-logo"/>
                </div>
                {
                    creator ? 
                        <h5>{playerArr.opponent.length ? 'Player Joined' : 'Waiting for other player'}</h5> 
                            :
                        <h5>{playerArr.opponent} will start the game</h5>
                }
                <div className="wait-box">
                    <label>Game Code</label>
                    <div className="code-tile">
                        <span className="code-text">{code}</span>
                        <span className="material-icons">content_copy</span>
                    </div>
                    <div className="player-box">
                        <div className="player-tile">
                            {
                                avatar === 'x' ? 
                                    <span className="material-icons">clear</span>
                                        :
                                    <span className="material-icons">panorama_fish_eye</span>
                            }
                            <span className="player-name">{playerArr.current}</span>
                        </div>
                        <div className="player-tile">
                            {
                                    avatar === 'x' ? 
                                        <span className="material-icons">panorama_fish_eye</span>
                                            :
                                        <span className="material-icons">clear</span>
                            }
                            <span className="player-name">{playerArr.opponent.length ? playerArr.opponent : 'Waiting for Player...'}</span>
                        </div>
                    </div>
                    {
                        creator ? 
                            <div className="btn-container">
                                <button className="btn btn-dark" disabled={!playerArr.opponent.length} onClick={handleStartGame}>Start Game</button>
                            </div> 
                                :
                            ""

                    }
                    {/* {
                        !creator ? 
                            <span>opponent will start the game</span>
                                :
                            ""
                    } */}
                </div>
            </div>
        )
    }
    if(screen === 'game') {
        return(
            <div className="home-screen">
                <div className="player-name-header">
                    <div className="player-name-box">
                        <span className="player-name">You</span>
                        <span className={isTurn === playerArr.current ? "material-icons is-active" : "material-icons" }>{avatar === 'x' ? 'clear' : 'panorama_fish_eye'}</span>
                    </div>
                    <div className="player-name-box">
                        <span className="player-name">{playerArr.opponent}</span>
                        <span className={isTurn !== playerArr.current ? "material-icons is-active" : "material-icons" }>{avatar === 'x' ? 'panorama_fish_eye' : 'clear'}</span>
                    </div>
                </div>
                <div className="game-grid">
                    {
                        board.map((cell,index) => {
                            if(cell === '') {
                                return(
                                    <div className="game-cell" onClick={(isTurn === playerArr.current) && !winner && !tie ? () => handlePlayTurn(index) : () => {return;}}></div>
                                )
                            }
                            else if(cell === 'x') {
                                return(
                                    <div className="game-cell">
                                        <span className="material-icons">clear</span>
                                    </div>
                                )
                            }
                            else if(cell === 'o') {
                                return(
                                    <div className="game-cell">
                                        <span className="material-icons">panorama_fish_eye</span>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                {
                    tie ? 
                        <span className="game-end-msg">It's a Tie</span>
                            :
                        ""
                }
                {
                    winner ? 
                        <span className="game-end-msg">{winner} won the game</span>
                            :
                        ""
                }
                {
                    winner || tie ? 
                        <button className="btn btn-dark" onClick={handleRestartGame}>Play Again?</button>
                            :
                        ""
                }
            </div>
        )
    }
}

export default HomeScreen;
