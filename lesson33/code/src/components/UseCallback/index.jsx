import React, {useCallback, useEffect, useState} from 'react';

export function UseCallback() {
    const [count, setCount] = useState(0);

    // Regular function without useCallback
    const handleClick = () => {
      setCount(count + 1);
    };

    // Using useCallback to memoize the function
    const memoHandleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            {/* Without useCallback: */}
             <button onClick={handleClick}>Increment</button>
            {/* With useCallback: */}
            <button onClick={memoHandleClick}>Increment</button>
        </div>
    );
}