import React from 'react';
import ReactDOM from 'react-dom';

interface props {
    init: number;
}

const App: React.FC<props> = ({ init }) => {
    const [count, setCount] = React.useState(init);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

ReactDOM.render(<App init={5} />, document.getElementById('root'));
