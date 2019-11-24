import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Verification from './Verification';
import '../styles/main.css';
import styles from '../styles/styles.module.css';

const Confirmation = () => <h2>Confirmation</h2>;

const App = () => {
    return (
        <div className={`${styles.alignCenter}`}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route path="/verification" component={Verification} />
                    <Route path="/confirmation" component={Confirmation} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;