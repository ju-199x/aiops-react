import React from 'react';
import './app.less';
import background from './assets/images/background.jpg';

function App() {
    return (
        <div className="app">
            <h1 className="text">Hello Webpack4</h1>
            <img className="background" src={background} alt=""/>
        </div>
    );
}

export default App;
