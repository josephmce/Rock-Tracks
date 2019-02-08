import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Details } from "./components/Details";


class App1 extends React.Component {
    render(){
        return(
            <Router history ={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"Details"} component={Details}/>
                    <Route path={"home"} component={Home}/>
                </Route>
                <Route path={"home"} component={Home}/>
            </Router>
        );
    }
}
render(<App1 />, window.document.getElementById('app1'));