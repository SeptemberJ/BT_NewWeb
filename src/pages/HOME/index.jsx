import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarouselSingle from '../../components/CarouselSingle';
import Partner from '../../components/Partner';
import axios from 'axios';
// import {send} from '../../util/ajax.js';
class Home extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isMode: false
	    };
	}
  componentDidMount() {
    
  }
  render() {
  	const children = [
      <CarouselSingle id="CarouselSingle_0_0" key="CarouselSingle_0" isMode={this.state.isMode}/>,
      <Partner id="Partner_0_0" key="Partner_0" isMode={this.state.isMode} />,
    ];
    return (
    	<div className="templates-wrapper">
    		{children}
    	</div>
    )
  }
}
export default Home;