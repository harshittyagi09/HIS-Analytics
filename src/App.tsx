import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/navbar/Navbar';
import Home from './components/views/home/Home';
import Dashboard from './components/views/dashboard/Dashboard';

function App() {

  return (
    <Router>
      {/* <Navbar /> */}
      <Dashboard />
      {/* <Home /> */}
    </Router>
  );
}

export default App;
