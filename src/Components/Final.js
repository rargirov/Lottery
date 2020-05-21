import React, { Component } from 'react';
import { getRandomColor } from '../Helpers/utils';
import { Button, Card } from 'antd';

class Final extends Component {
  renderResult() {
    const { tickets, winningNumber } = this.props;
    return (tickets.some((ticket) => ticket.number === winningNumber))
      ? this.renderWinning()
      : this.renderTryAgain();
  }

  renderWinning() {
    return (
      <h1>Congratilation! You win!</h1>
    );
  }

  renderTryAgain() {
    return (
      <h1>Nope.</h1>
    );
  }

  render() {
    const { actions, winningNumber } = this.props;

    return (
      <Card style={{ backgroundColor: getRandomColor() }}
        title={this.renderResult()}
      >
        <h2>The winning number is: <b>{winningNumber}</b></h2>
        <Button block onClick={() => { actions.reset() }} >New game?</Button>
      </Card>
    );
  }
}

export default Final
