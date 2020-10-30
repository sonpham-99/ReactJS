import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
//impore Views
// import Homepage from './Views/Homepage';
// import About from './Views/About';

class index extends Component{
    render(){
        return(
            <Register />
            // <Router>
            //     <Switch>
            //         <Route exact path="/" component={Homepage} />
            //         <Route exact path="/about" component={About} />
            //         <Route exact path="/register" component={Register} />
            //     </Switch>
            // </Router>
        );
    }
}
// export default index;