import React, { useState, useEffect } from 'react'

export default function HelloFunction(props) {
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log('ini component baru dibuat');
    }, [])

    // useEffect(() => {
    //      console.log('hello function component dibuat')
    //     console.log('nilai count berubah')
    // }, [count])

    return (
        <div>
            <p>Hello {props.name}</p>
            <p>Umur {props.umur}</p>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Tambah Nilai</button>
        </div>
    )
}