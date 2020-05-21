import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

import AboutUs from './Components/AboutUs';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';

import Final from './Components/Final';
import Lottery from './Components/Lottery';

import { getRandomNumber } from './Helpers/utils';
import { registerTicket, removeTicket, finish, reset } from './Helpers/actions';

import 'antd/dist/antd.css';

const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remainingTickets: 5,
      finished: false
    };

    this.registerTicket = registerTicket.bind(this);
    this.removeTicket = removeTicket.bind(this);
    this.finish = finish.bind(this);
    this.reset = reset.bind(this);
  }

  renderApp = () => {
    const { tickets, remainingTickets, finished, winningNumber } = this.state;
    const actions = {};

    if (finished) {
      actions.reset = this.reset;
      return (
        <Final
          tickets={tickets}
          winningNumber={winningNumber}
          actions={actions}
        />
      );
    }

    actions.registerTicket = this.registerTicket;
    actions.removeTicket = this.removeTicket;
    actions.finish = this.finish;
    return (<Lottery
      actions={actions}
      tickets={tickets}
      remainingTickets={remainingTickets}
    />)
  }

  render() {
    return (
      <BrowserRouter>
        <Layout className='layout'>
          <AppHeader />
          <Content style={{ padding: '0 50px', textAlign: 'center' }}>
            <div className="site-layout-content">
              <Switch>
                <Route path='/' exact component={() => this.renderApp()} />
                <Route path='/about' component={AboutUs} />
                <Redirect from='*' to='/'/>
              </Switch>
            </div>
          </Content>
          <AppFooter />
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App
