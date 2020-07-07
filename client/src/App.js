import React, { useState, useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Background from './images/background/background';
// const ENDPOINT = "http://192.168.43.80:3000";
// const socket = socketIOClient(ENDPOINT);

function App() {

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
