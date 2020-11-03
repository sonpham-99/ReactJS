// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer'

// export default function About(){
//     {
//         return(
//             <div>
//                <Navbar /> 
//                 <div className="container">
//                     <h1>About</h1>
//                     <p>About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     </p>
//                     <p>About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     </p>
//                 </div>
//                 <Footer />
//             </div>
//         );
//     }
// }
// ReactDOM.render(<About />, document.getElementById('root'));
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar';
import Footer from '../components/Footer'

 class about extends Component{
    render(){
        return(
            <div>
               <Navbar /> 
                <div className="container">
                    <h1>About</h1>
                    <p>About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
                    </p>
                    <p>About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
//                     About this shop, try to make guess.About this shop, try to make guess.About this shop, try to make guess.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<about />, document.getElementById('root'));
export default about;