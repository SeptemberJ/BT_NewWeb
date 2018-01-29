import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col,Card, Icon, Avatar } from 'antd';
import axios from 'axios';
const { Meta } = Card;

export default class Partners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PartnersInfo:''
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('content0------')
        console.log(nextProps)
    }
  // componentWillMount() {
  //     //获取数据;
  //     axios.get('/Json/partner.json'
  //     ).then((res)=> {
  //       this.setState({
  //         PartnersInfo: res.data.Info
  //       })
  //     }).catch((error)=> {
  //       console.log(error)
  //     })
  // }

  //   shouldComponentUpdate() {
  //       alert("shouldComponentUpdate");
  //       return true;        // 记得要返回true
  //   }


  
  render() {
    const props = { ...this.props };
    let CardsToRender = null
    console.log(props.PartnersInfo)
    if(props.PartnersInfo){
      CardsToRender = props.PartnersInfo.map((item, idx) => {
      return (
              <Col xs={24} sm={24} md={6} lg={6} key={idx}>
                <Card className="MarginTB_20" key={idx}
                  bordered={false}
                  style={{ width: 200 }}
                  cover={<img alt="example" src={item.icon} />}
                >
                  
                </Card>
              </Col>
        )
     });
    }
    return (
      <div style={{ background:'#fff',marginTop:'30px', marginBottom:'30px' }}>
        <Row>
          <Col span={24} className="TextCenter"><h2 style={{ lineHeight:5 }}>合作伙伴</h2></Col>
        </Row>
        <Row type="flex" justify="space-around" >
          {CardsToRender}
        </Row>
      </div>
    );
  }
}
