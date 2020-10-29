import React from 'react'
import ReactDOM from 'react-dom'

class Answer extends React.Component{
    render(){
        return <h2>Hi, My name is {this.props.name}!</h2>
    }
}

class Question extends React.Component{
    render() {
        return (
             <div>
                 <h1>Who are you ?</h1>
                 <Answer name="Kelly Moores" />
             </div>
        );
    }
}
ReactDOM.render(<Question />, document.getElementById('root'))
export default Answer;