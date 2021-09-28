import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Test extends React.Component {
    //method used to initialize an object's state in a class
    constructor(){
        super();
        this.state = {
            blue: true
        }
    }
    changeColor(){
        this.setState({blue: !this.state.blue})
    }

    render(){
        let btn_class = this.state.blue ? "blueButton" : "greenButton";

        return (
            <div>
                <button className={btn_class}
                        onClick={this.changeColor.bind(this)}>
                    Button
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Test />, document.getElementById("root"))
