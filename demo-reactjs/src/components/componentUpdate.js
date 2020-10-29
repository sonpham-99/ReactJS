import React from 'react'
import ReactDOM from 'react-dom'

class Update extends React.Component{
    constructor(props){
        super(props);
        this.state = { deci: "Yes"}
    }
    shouldComponentUpdate(){
        return true;
    }
    changeDeci = () => {
        setTimeout(() => {
            this.setState({deci:"No"})
        },100)
    }
    render(){
        return(
            <div>
                <h1>Ask: Do you want this ?</h1>
                <h1>Answer: {this.state.deci}</h1>
                <button type="button" onClick={this.changeDeci}>Change Decision</button>
            </div>
        )
    }
}
ReactDOM.render(<Update />, document.getElementById('root'));
export default Update