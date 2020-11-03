import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Homepage from './Views/Homepage';
// import about from './Views/About';
import signup1 from './Views/signup1'
// import FormsAndInputs from './Views/signup1'

class App extends Component{
    render(){
        return(
            <signup1 />
            // <Router>
            //     <Switch>
            //         {/* <Route path="/" component={Homepage} />
            //         <Route path="/signup" component={signup} /> */}
            //         {/* <Route exact path ="/"><Homepage /></Route>
            //         <Route path ="/about"><about /></Route> */}
            //     </Switch>
            // </Router>
        );
    }
}