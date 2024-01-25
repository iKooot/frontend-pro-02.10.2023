import React, {useState} from 'react';

export function StateBatching() {
    const [counter, setCounter] = useState(0)

    function increaseHandler() {
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
    }


    return (
        <div>
            <p>Counter is {counter}</p>
            <button onClick={increaseHandler}>Increase</button>
        </div>
    )
}