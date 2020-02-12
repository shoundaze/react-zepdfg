import React, { Component } from 'react';
import { render } from 'react-dom';
import Test from './components/Greet'
import Bye from './components/Bye'
import Message from './components/Message'

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Message />
       
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
