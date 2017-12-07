import React from 'react';
import Number from './Number'
import Action from './Action'
import Clean from './Clean'
import Result from './Result'

export default class Calc extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstNumber: '',
      secondNumber: '',
      action: '',
      result: 0,
    }

    this.setNumber = this.setNumber.bind(this);
    this.setAction = this.setAction.bind(this);
    this.setResult = this.setResult.bind(this);
    this.cleanUp = this.cleanUp.bind(this);
  }

  setNumber(value) {
    if(this.state.action) {
      let number = this.state.secondNumber + value
      if(number.length < 19) {
        this.setState({
          secondNumber: number,
          result: number,
        });
      }
    } else {
      let number = this.state.firstNumber + value
      if(number.length < 19) {
        this.setState({
          firstNumber: number,
          result: number,
        });
      }
    }
  }

  setAction(value) {
    this.setState({
      action: value
    });
  }

  setResult(value) {

    let action = this.state.action
    let firstNumber = parseInt(this.state.firstNumber, 10)
    let secondNumber = parseInt(this.state.secondNumber, 10)
    let result

    if(!firstNumber || !action) { return }

    if(!secondNumber) { secondNumber = firstNumber }

    if(action === '+') {
      result = firstNumber + secondNumber;
    } else if(action === '-') {
      result = firstNumber - secondNumber;
    } else if(action === '*') {
      result = firstNumber * secondNumber;
    } else if(action === '/') {
      result = firstNumber / secondNumber;
    }

    this.setState({
      result: result,
      firstNumber: result,
      secondNumber: '',
    });
  }

  cleanUp() {
    this.setState({
      firstNumber: '',
      secondNumber: '',
      action: '',
      result: 0,
    });
  }

  render() {
    return (
      <div className="calc-wrapper">
        <div className="calc">
          <div className="calc-screen">
            {this.state.result}
          </div>
          <div className="calc-body">
            <div className="calc-numbers">
              <Number value="1" onClick={this.setNumber} />
              <Number value="2" onClick={this.setNumber} />
              <Number value="3" onClick={this.setNumber} />
              <Number value="4" onClick={this.setNumber} />
              <Number value="5" onClick={this.setNumber} />
              <Number value="6" onClick={this.setNumber} />
              <Number value="7" onClick={this.setNumber} />
              <Number value="8" onClick={this.setNumber} />
              <Number value="9" onClick={this.setNumber} />
              <Clean value="C" onClick={this.cleanUp} />
              <Number value="0" onClick={this.setNumber} />
              <Result value="=" onClick={this.setResult} />
            </div>
            <div className="calc-actions">
              <Action value="/" onClick={this.setAction} />
              <Action value="*" onClick={this.setAction} />
              <Action value="-" onClick={this.setAction} />
              <Action value="+" onClick={this.setAction} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
