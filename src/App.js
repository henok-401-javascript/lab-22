import React from 'react';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Counter from './components/Counter.js';
import "./styles.scss";

class App extends React.Component {
    render() {
        return (
            <div className = "flex-box">
            <React.Fragment >
                <Header />
                <Counter />
                <Footer />
            </React.Fragment>
            </div>
        );
    }
}

export default App;