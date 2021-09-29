import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Start extends Component {

    begin() {
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

    render() {
        return (
            <div className='quiz-start'>
            <img src={require('./images/start.gif')} alt="starting" />
                <h1>Flag Quiz</h1>
            <button className='start' onClick={this.begin}>
                    START GAME
            </button>
            </div>
        );
    }
}
ReactDOM.render(<Start />, document.getElementById('root'));


