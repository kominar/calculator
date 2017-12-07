import React from 'react';

export default class Result extends React.Component {
  constructor(props) {
    super(props);

    this.handleResult = this.handleResult.bind(this);
  }

  handleResult() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="calc-button calc-button-result" onClick={this.handleResult} >
        {this.props.value}
      </div>
    );
  }
}
