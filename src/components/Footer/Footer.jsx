import React from 'react';
import TweenOne from 'rc-tween-one';

class Footer extends React.Component {

  static defaultProps = {
    className: 'footer0',
  };

  render() {
    const props = { ...this.props };
    delete props.isMode;
    return (<div
      {...props}
      playScale={0.05}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <span id={`${props.id}-content`}>
          © 2018 Ztnet 沪ICP备16036901号
        </span>
      </TweenOne>
    </div>);
  }
}

export default Footer;
