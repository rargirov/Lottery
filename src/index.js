import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import LotteryApp from './Components/LotteryApp';
import Counter from './FunctionComponents/Counter';
import RandomNumber from './FunctionComponents/RandomNumber';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <LotteryApp />,
    // <Counter />,
    // <RandomNumber />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
