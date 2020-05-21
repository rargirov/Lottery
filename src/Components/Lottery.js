import React, { Component } from 'react';
import LotteryTicket from './LotteryTicket';
import { Button, Typography, Divider } from 'antd';

const { Title } = Typography;

class Lottery extends Component {

  renderButton = (text, action) => <Button type="primary" block onClick={action}>{text}</Button>

  renderActionButton = () => {
    const { remainingTickets, actions } = this.props;
    return remainingTickets > 0
      ? this.renderButton('Buy a ticket', actions.registerTicket)
      : this.renderButton('Check your tickets', actions.finish);
  }

  renderTickets = () => {
    const { tickets, actions } = this.props;
    return tickets.map((ticket, index) => {
      return (
        <LotteryTicket
          color={ticket.color}
          number={ticket.number}
          key={index}
          index={index}
          actions={{ removeTicket: actions.removeTicket }}
        />
      );
    });
  }

  render() {
    return (
      <>
        <Title>Lottery</Title>
        {this.renderActionButton()}
        <small>remaining tickets: {this.props.remainingTickets}</small>
        <Divider>Your tickets</Divider>
        {this.renderTickets()}
      </>
    );
  }
}

export default Lottery
