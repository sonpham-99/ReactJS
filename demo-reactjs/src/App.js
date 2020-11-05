import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Views/Navbar';
import Homepage from './Views/Homepage';
import About from './Views/About';
import Flower from './Views/flower';
import Signup from './Views/signup';
import Login from './Views/login'
import Footer from './components/Footer';
import Waterlily from './Views/waterlily';

class App extends React.Component {
   render() {
      return (
          <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path ="/" component={Homepage}></Route>
                        <Route path ="/about" component={About}></Route>
                        <Route path ="/flower" component={Flower}></Route>
                        <Route path ="/signup" component={Signup}></Route>
                        <Route path ="/login" component={Login}></Route>
                        <Route path ="/waterlily" component={Waterlily}></Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
      );
   }
}
export default App;