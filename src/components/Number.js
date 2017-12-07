import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let value = e.target.getAttribute('data-value');
    this.props.onClick(value);
  }

  render() {
    return (
      <div className="calc-button" data-value={this.props.value} onClick={this.handleClick} >
        {this.props.value}
      </div>
    );
  }
}
