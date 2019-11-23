import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RankingPage from './page/Ranking';
import CityPage from './page/City';
import Profile from './page/Profile';

import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={Profile} />
                    <Route path='/company-ranking' component={RankingPage} />
                    <Route path='/city-ranking' component={CityPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

