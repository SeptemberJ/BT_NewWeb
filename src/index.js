import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
// import {createHashHistory} from "history";
import './index.css';
import App from './App.jsx';
import Home from './pages/HOME';
import SBY from './pages/SBY';
import ZNKZ from './pages/ZNKZ';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
// 	<HashRouter>
//     <App>
//         <Route path="/SBY" component={SBY} />
//     </App>
//   </HashRouter>,
	
// 	 document.getElementById('root')
// 	 );
// registerServiceWorker();

ReactDOM.render(
  <HashRouter>
    <App>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/ZNKZ" component={ZNKZ} />
        <Route path="/SBY" component={SBY} />
    </App>
    </HashRouter>,
	 document.getElementById('root')
	 );
registerServiceWorker();
