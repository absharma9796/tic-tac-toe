import React, { useState, useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import Background from './images/background/background';
// const ENDPOINT = "http://192.168.43.80:3000";
// const socket = socketIOClient(ENDPOINT);

function App() {

  const [response, setResponse] = useState("");
  const [msgArr, setmsgArr] = useState([]);
  // socket.on("chat2", data => {
  //   setmsgArr([...msgArr, data])
  // })

  useEffect(() => {
    // const socket = socketIOClient(ENDPOINT);
    // socket.on("message", data => {
    //   console.log(data)
    //   setResponse(data);
    // });
    // // CLEAN UP THE EFFECT
    // return () => socket.disconnect();
  }, []);

  const handleClick = () => {
    const value = document.getElementById("msg-input").value;
    // const socket = socketIOClient(ENDPOINT);
    // socket.emit("chat", value);
  }

  return (
    <Router>
      <div className="App">
        <Background />
        <Route path="/" exact>
          <HomeScreen />
        </Route>
      </div>
    </Router>
  );
}

export default App;
