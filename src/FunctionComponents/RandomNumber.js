import React, { useState, useEffect } from 'react';

function RandomNumber() {
    return (
        <div className="site-layout-content">
            <h1>{useRandomNumberOnInterval()}</h1>
        </div>
    );
}

const useRandomNumberOnInterval = () => {
    const initialCounter = 0;
    const [random, setRandom] = useState(initialCounter);

    useEffect(() => {
        let interval = setInterval(() => {
            setRandom((Math.random() * 100).toFixed());
        }, 1000);

        return () => (
            clearInterval(interval)
        );
    });

    return random;
}

export default RandomNumber
