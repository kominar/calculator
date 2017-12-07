import React from 'react';
import './App.css';
import Calc from './components/Calc'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNumber: '',
      secondNumber: '',
      action: '',
      result: 0,
    }
  }

  render() {
    return (
      <Calc />
    );
  }
}
