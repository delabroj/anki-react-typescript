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

const App: React.FC = () => {
    return <Toolbar />;
};

const Toolbar: React.FC = () => (
    <div>
        <ThemedButton />
    </div>
);

const ThemedButton: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <button
            onClick={themeContext.switchTheme}
            style={{ background: themeContext.theme.background, color: themeContext.theme.foreground }}
        >
            I am styled by theme context!
        </button>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
