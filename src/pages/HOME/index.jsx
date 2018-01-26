import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarouselBanner from '../../components/Carousel';
// import CarouselSingle from '../../components/CarouselSingle';
import Partners from '../../components/Partners';
import axios from 'axios';
// import {send} from '../../util/ajax.js';
class Home extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isMode: false,
        PartnersInfo:''
	    };
	}
  componentDidMount() {
    //获取数据;
      axios.get('/Json/partner.json'
      ).then((res)=> {
        this.setState({
          PartnersInfo: res.data.Info
        })
      }).catch((error)=> {
        console.log(error)
      })

    
  }

  // componentWillMount() {
      
  // }

  // shouldComponentUpdate() {
  //     alert("shouldComponentUpdate");
  //     return true;        // 记得要返回true
  // }

  render() {
  	const children = [
      <CarouselBanner id="CarouselSingle_0_0" key="CarouselSingle_0" isMode={this.state.isMode}/>,
      <Partners key="Partners" PartnersInfo={this.state.PartnersInfo}/>
    ];
    return (
    	<div className="templates-wrapper">
    		{children}
      }
    	</div>
    )
  }
}
export default Home;