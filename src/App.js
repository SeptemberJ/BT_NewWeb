import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import './App.css';
import IndexPage from './pages/Home/index.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexPage/>
      </div>
    );
  }
}

export default App;
