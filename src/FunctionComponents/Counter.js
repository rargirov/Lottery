import React, { useState } from 'react';

function Counter() {
    const initialCounter = 0;
    const [counter, setCounter] = useState(initialCounter);
    
    return (
        <div className="site-layout-content">
            <h1>{counter}</h1>
            <button onClick={() => setCounter(prevCounter => ++prevCounter)}>
                Increment
            </button>

            <button onClick={() => setCounter(prevCounter => --prevCounter)}>
                Decrement
            </button>

            <button onClick={() => setCounter(initialCounter)}>
                Reset
            </button>
        </div>
    );
}

export default Counter
