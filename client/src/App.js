import React, { useState, useEffect } from 'react';
import './App.css';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.43.80:3000";
const socket = socketIOClient(ENDPOINT);

function App() {

  const [response, setResponse] = useState("");
  const [msgArr, setmsgArr] = useState([]);
  socket.on("chat2", data => {
    setmsgArr([...msgArr, data])
  })
  
  useEffect(() => {
    // const socket = socketIOClient(ENDPOINT);
    socket.on("message", data => {
      console.log(data)
      setResponse(data);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  const handleClick = () => {
    const value = document.getElementById("msg-input").value;
    // const socket = socketIOClient(ENDPOINT);
    socket.emit("chat", value);
  }

  return (
    <div className="App">
       <p>
        {response}
      </p>
      <input className="form-control" type="text" placeholder="Enter your message" id="msg-input"></input>
      <button className="btn btn-primary" onClick={handleClick}>Click</button>
      {
        msgArr.map(e => {
          return(
            <p>{e}</p>
          )
        })
      }
    </div>
  );
}

export default App;
