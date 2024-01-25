import React, {useState} from 'react';


function Form() {
    const [name, setName] = useState('Serhii');

    return (
        <form>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <p>Hello, {name}.</p>
        </form>
    );
}
export function StateReset() {
    const [version, setVersion] = useState(0);
    // const state = useState(0);

    function handleReset() {
        setVersion(version + 1);
    }
    return (
        <div>
            <button onClick={handleReset}>Reset</button>
            <Form key={version} />
        </div>
    )
}