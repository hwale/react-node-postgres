import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';

// const Landing = () => <h2>Landing</h2>;
const Verification = () => <h2>Verification</h2>;
const Confirmation = () => <h2>Confirmation</h2>;

const App = () => {
    return (
        <div>
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