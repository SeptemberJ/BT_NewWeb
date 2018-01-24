import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import axios from 'axios';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPartners:'',
    };
    console.log(props)
  }

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  componentWillReceiveProps(newProps) {
    //alert('componentWillReceiveProps-----')
        // console.log(newProps)
    }
  componentDidMount() {
    
    
  }

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = { ...this.props };
    delete props.isMode;
    const dataSource = [
      { icon: 'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png', title: 'XXX有限公司', content: '' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png', title: 'XXX有限公司', content: '' },
      { icon: 'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png', title: 'XXX有限公司', content: '' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <div
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            合作商
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </div>
      </div>
    );
  }
}

export default Content;
