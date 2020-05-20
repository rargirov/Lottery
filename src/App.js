import React, { Component } from 'react';
import { getRandomNumber } from './Helpers/utils';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      winningNumber: 0,
      tickets: [],
      remainingTickets: 5,
      finished: false 
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillMount() {
  }
  
  render () {
    return (
      <div className='App'>
      </div>
    )
  }
}

export default App
