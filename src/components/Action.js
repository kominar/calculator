import React from 'react';

export default class Action extends React.Component {
  constructor(props) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(e) {
    let value = e.target.getAttribute('data-value');
    this.props.onClick(value);
  }

  render() {
    return (
      <div className="calc-button calc-button-action" data-value={this.props.value} onClick={this.handleAction} >
        {this.props.value}
      </div>
    );
  }
}
