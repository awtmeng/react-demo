import React, {Component} from 'react';

import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from '../containers/Home'

export default class RouterMap extends Component {
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/*只有当路径为/的时候才匹配路由*/}
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </Router>
            </div>    
        )
    }
}