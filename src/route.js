import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './views/App'
import Home from './views/Home'
import Detail from './views/Detail'


const routeconfig = (
	<Router history={browserHistory}>
		<Route component={App} path='/'>
			<IndexRoute component={Home}/>
			<Route component={Detail} path='/detail/:id'/>
		</Route>
	</Router>
)

export default routeconfig;
