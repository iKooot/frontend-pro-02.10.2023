import React, {useEffect, useState} from 'react';

export function Timer() {
    const [time, setTime] = useState(new Date());
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        setIntervalId(id);
    };

    const stopTimer = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    return (
        <div>
            <p>This timer is {time.toISOString()}</p>
            <button disabled={intervalId} onClick={startTimer}>Start Timer</button>
            <button disabled={!intervalId} onClick={stopTimer}>Stop Timer</button>
        </div>
    );
}