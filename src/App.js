import React from 'react';
import './App.css';
import RankingPage from './page/Ranking';
import CityPage from "./page/City";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App-header">
              <Switch>
                <Route path='/company-ranking' component={RankingPage} />
                <Route path='/city-ranking' component={CityPage} />
              </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
