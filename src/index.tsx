import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext({ theme: themes.light, switchTheme: () => {} });

const App: React.FC = () => {
    const [light, setLight] = useState(true);

    return (
        <ThemeContext.Provider
            value={{ theme: light ? themes.light : themes.dark, switchTheme: () => setLight(!light) }}
        >
            <Toolbar />
        </ThemeContext.Provider>
    );
};

const Toolbar: React.FC = () => (
    <div>
        <ThemedButton />
    </div>
);

const ThemedButton: React.FC = () => {
    return <button>I am styled by theme context!</button>;
};

ReactDOM.render(<App />, document.getElementById('root'));
