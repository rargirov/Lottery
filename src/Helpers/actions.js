import { getRandomNumber, getRandomColor } from './utils';

const registerTicket = function () {
    const newTicket = {
        number: getRandomNumber(),
        color: getRandomColor()
    };

    this.setState((prevState) => {
        prevState.tickets.push(newTicket);
        return {
            tickets: prevState.tickets,
            remainingTickets: --prevState.remainingTickets
        }
    });
}

const removeTicket = function (index) {
    this.setState((prevState) => {
        prevState.tickets.splice(index, 1);
        return {
            tickets: prevState.tickets,
            remainingTickets: ++prevState.remainingTickets
        }
    });
}

const finish = function () {
    this.setState({ finished: true });
}

const reset = function () {
    this.setState({
        winningNumber: getRandomNumber(),
        tickets: [],
        remainingTickets: 5,
        finished: false
    });
}

export { registerTicket, removeTicket, finish, reset }