import React, {useState} from 'react';
import {MemoDialog} from "./MemoDialog";

export function UseMemo() {
    const [isOpen, setIsOpen] = useState(false)
    const [list, setList]  = useState([1, 2, 3, 4])

    return (
        <div>
            <h2>Use memo</h2>
            { isOpen && <MemoDialog list={list}/>}
            <button onClick={() => setIsOpen(prevState => !prevState)}>Open dialog</button>
            <button onClick={() => setList(prevState => [...prevState, Math.random()])}>Add item</button>
        </div>
    )
}