import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import {
  History,
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  NavLink  
} from 'react-router-dom'

// const History = require('react-router');

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
      MenuCur:'0'
    };
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    const PathName = this.context.router.history.location.pathname
    switch(PathName){
      case '/ZNKZ':
      this.setState({
        MenuCur: '1'
      })
      break
      case '/BYG':
      this.setState({
        MenuCur: '2'
      })
      break
      case '/SBY':
      this.setState({
        MenuCur: '3'
      })
      break
      default:
      this.setState({
        MenuCur: '0',
      })
    }
  }

  

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  Goto = (item) => {
    console.log(item)
    this.setState({
      MenuCur: item.key
    });
    switch(item.key){
      case '0':
      this.context.router.history.push("/Home")
      this.phoneClick()
      break
      case '1':
      this.context.router.history.push("/ZNKZ")
      this.phoneClick()
      break
      case '2':
      this.context.router.history.push("/BYG")
      this.phoneClick()
      break
      case '3':
      this.context.router.history.push("/SBY")
      this.phoneClick()
      break
    }
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const navData = [{'menu':'首页','link':'Home'},{'menu':'智能控制','link':'ZNKZ'},{'menu':'殡仪馆','link':'BYG'},{'menu':'社保云','link':'SBY'}];
    // const navData0 = { menu1: '首页', menu2: '智能控制', menu3: '殡仪馆', menu4: '社保云' };
    // const navChildren0 = Object.keys(navData)
    //   .map((key, i) => (<Item key={i}> <Link to="/ZNKZ">{navData[key]} </Link></Item>));

    const navChildren = navData
      .map((key, i) => (<Item key={i}> {key.menu}</Item>));

    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <TweenOne
        className={`${this.props.className}-logo`}
        animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
        id={`${this.props.id}-logo`}
      >
        <img width="" src="http://139.196.232.21/images/logo.png" />
      </TweenOne>
      {isMode ? (<div
        className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
        id={`${this.props.id}-menu`}
      >
        <div
          className={`${this.props.className}-phone-nav-bar`}
          onClick={() => {
            this.phoneClick();
          }}
        >
          <em />
          <em />
          <em />
        </div>
        <div
          className={`${this.props.className}-phone-nav-text`}
        >
          <Menu
            onClick={this.Goto}
            selectedKeys={[this.state.MenuCur]}
            mode="inline"
            theme="dark"
          >
            {navChildren}
          </Menu>
        </div>
      </div>) : (<TweenOne
        className={`${this.props.className}-nav`}
        animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
      >
        <Menu
          mode="horizontal" onClick={this.Goto}
            selectedKeys={[this.state.MenuCur]}
          id={`${this.props.id}-menu`}
        >
          {navChildren}
        </Menu>
      </TweenOne>)}
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
