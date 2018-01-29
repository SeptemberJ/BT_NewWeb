import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RightImg from '../../components/RightImg';
import LeftImg from '../../components/LeftImg';
import SingleBanner from '../../components/SingleBanner';
import FnBlock from '../../components/FnBlock';
import LeftIntroduction from '../../components/LeftIntroduction';
import Video from '../../components/Video';
import IMGTop from '../../components/IMGTop';
import Blank from '../../components/Blank';
import axios from 'axios';
class SBY extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isMode: false,
        SBYInfo:'',
        BanInfo:'',
        FnInfo:'',
        IndividualInfo:'',
        EnterpriseInfo:''
      };
  }
    componentWillMount() {
      //获取数据;
      axios.get('/Json/SBY.json'
      ).then((res)=> {
        this.setState({
          SBYInfo: res.data.Info.imgTxt,
          BanInfo:res.data.Info.banner,
          FnInfo:res.data.Info.modules,
          IndividualInfo:res.data.Info.individual,
          EnterpriseInfo:res.data.Info.enterprise,
        })
      }).catch((error)=> {
        console.log(error)
      })
  }

    // getLeftChildren = (item, i) =>(
    //  <ImgLeft id="idx" key="idx" isMode={this.state.isMode} SBYInfo={item}/>
    // );
    

  render() {
    const children = [
      <LeftImg id="ImgLeft_0_0" key="ImgLeft_0" isMode={this.state.isMode}/>,
      <RightImg id="ImgRight_0_0" key="ImgRight_0" isMode={this.state.isMode}/>,
    ];
    let childrenToRender =null
    if(this.state.SBYInfo!=''){
       childrenToRender = this.state.SBYInfo.map((item, i) => {
        if(i%2 != 0){
          return <LeftImg id="idx" key="idx" isMode={this.state.isMode} SBYInfo={item}/>

        }else{
        return <RightImg id="idx" key="idx" isMode={this.state.isMode} SBYInfo={item}/>
        }
      });
    }
    return (
      <div className="templates-wrapper">
        <SingleBanner key="SingleBanner" BanInfo={this.state.BanInfo}/>
        <Blank/>
        <IMGTop Info={this.state.IndividualInfo}/>
        <Blank/>
        <IMGTop Info={this.state.EnterpriseInfo}/>
        {childrenToRender}
        
        

      </div>
    )
  }
}
export default SBY;