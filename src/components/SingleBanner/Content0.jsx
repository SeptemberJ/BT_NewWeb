import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

class Content extends React.Component {
  componentWillReceiveProps(nextProps) {
      console.log('SingleBanner content0------')
      console.log(nextProps)
  }
  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (
      <div style={{backgroundImage: "url("+ props.BanInfo.img +")"}}
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <h1
            key="content"
            id={`${props.id}-content`}
          >
            {props.BanInfo.tit}
          </h1>
          <p
            key="content"
            id={`${props.id}-content`}
          >
            {props.BanInfo.content}
          </p>
          
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </div>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
