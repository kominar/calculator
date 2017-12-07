import React from 'react';

export default class Clean extends React.Component {
  constructor(props) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
  }

  handleAction() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="calc-button calc-button-clean" onClick={this.handleAction} >
        {this.props.value}
      </div>
    );
  }
}
