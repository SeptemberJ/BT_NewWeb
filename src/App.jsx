import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import './App.css';
// import IndexPage from './pages/Home/index.jsx'
import enquire from 'enquire.js';
import { scrollScreen } from 'rc-scroll-anim';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
      	<NavBar/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default App;
