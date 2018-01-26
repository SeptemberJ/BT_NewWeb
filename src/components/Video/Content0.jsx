import React from 'react';
import TweenOne from 'rc-tween-one';
import VideoPlay from 'react-sublime-video';

class Content extends React.Component {

  static defaultProps = {
    className: 'content3',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animation = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const videoChildren = 'http://www.thinkhome.com.cn/video%20AND%20image/%E8%A7%86%E9%A2%91/3%E5%88%86%E9%92%9F%E5%B8%A6%E4%BD%A0%E4%BA%86%E8%A7%A3ThinkHome%E6%99%BA%E8%83%BD%E5%AE%B6%E5%B1%85%E7%B3%BB%E7%BB%9F.mp4'
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`} style={{height:'auto'}}>
        <div className="Blank"></div>
        <div
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={animation}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            走进智能化生活
          </TweenOne>
          <TweenOne
            animation={{ ...animation, delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            当你的生活智能化时
          </TweenOne>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            className={`${props.className}-video`}
            id={`${props.id}-video`}
          >
            {isMode ?
              (<video src={videoChildren} width="100%" loop  controls/>) :
              (<VideoPlay loop src={videoChildren} width="100%"/>)}
          </TweenOne>
        </div>
      </div>
    );
  }
}


export default Content;
