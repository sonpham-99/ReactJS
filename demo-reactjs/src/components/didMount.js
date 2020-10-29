import React from 'react'
import ReactDOM from 'react-dom'

class Change extends React.Component{
    constructor(props){
        super(props);
        this.state = {number: "1"};
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({number: "1000000"})
        }, 1000)
    }
    render(){
        return(
            <h1>My lucky number is: {this.state.number}</h1>
        )
    }
}
ReactDOM.render(<Change />, document.getElementById('root'))
export default Change