import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Content: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        alert('Effect');
        return () => {
            alert('Effect cleanup');
        };
    }, [count1]);

    return (
        <>
            <div onClick={() => setCount1(count1 + 1)}>count1: {count1}</div>
            <div onClick={() => setCount2(count2 + 1)}>count2: {count2}</div>
        </>
    );
};

const App: React.FC = () => {
    const [on, setOn] = React.useState(false);

    return (
        <div>
            <button onClick={() => setOn(!on)}>Turn {on ? 'off' : 'on'}</button>
            {on && <Content />}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
