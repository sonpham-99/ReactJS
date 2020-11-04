import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Views/Navbar';
import Homepage from './Views/Homepage';
import About from './Views/About';
import Product from './Views/product';
import Signup from './Views/signup';
import Login from './Views/login'
import Footer from './components/Footer';

class App extends React.Component {
   render() {
      return (
          <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path ="/" component={Homepage}></Route>
                        <Route path ="/about" component={About}></Route>
                        <Route path ="/product" component={Product}></Route>
                        <Route path ="/signup" component={Signup}></Route>
                        <Route path ="/login" component={Login}></Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
      );
   }
}
export default App;