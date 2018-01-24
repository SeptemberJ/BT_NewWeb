import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImgLeft from '../../components/ImgLeft';
import ImgRight from '../../components/ImgRight';
import axios from 'axios';
class SBY extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      isMode: false,
	      SBYInfo:''
	    };
	}
    componentWillMount() {
      //获取数据;
      axios.get('/Json/SBY.json'
      ).then((res)=> {
        this.setState({
          SBYInfo: res.data.SBYInfo
        })
      }).catch((error)=> {
        console.log(error)
      })
  }

    // componentDidMount() {
    //     alert("componentDidMount");
    // }

    // componentWillReceiveProps(nextProps) {
    //     alert("componentWillReceiveProps");
    // }

    // shouldComponentUpdate() {
    //     alert("shouldComponentUpdate");
    //     return true;        // 记得要返回true
    // }

    // componentWillUpdate() {
    //     alert("componentWillUpdate");
    // }

    // componentDidUpdate() {
    //     alert("componentDidUpdate");
    // }

    // componentWillUnmount() {
    //     alert("componentWillUnmount");
    // }
    getLeftChildren = (item, i) =>(
    	<ImgLeft id="idx" key="idx" isMode={this.state.isMode} SBYInfo={item}/>
    );
    

  render() {
    const children = [
      <ImgLeft id="ImgLeft_0_0" key="ImgLeft_0" isMode={this.state.isMode}/>,
      <ImgRight id="ImgRight_0_0" key="ImgRight_0" isMode={this.state.isMode}/>,
    ];
    let childrenToRender =null
    if(this.state.SBYInfo!=''){
    	 childrenToRender = this.state.SBYInfo.map((item, i) => {
	    	if(i%2 != 0){
	    		return <ImgLeft id="idx" key="idx" isMode={this.state.isMode} SBYInfo={item}/>

	    	}else{
				return <ImgRight id="idx" key="idx" isMode={this.state.isMode} SBYInfo={item}/>
	    	}
	    });
    }
    return (
    	<div className="templates-wrapper">
    		{childrenToRender}
    	</div>
    )
  }
}
export default SBY;