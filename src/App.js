import React from 'react';
import './App.css';
import RankingPage from './page/Ranking';
import CityPage from "./page/City";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <BrowserRouter>
            <div className="App-header">
                <NavigationBar/>
                <Switch>
                    <Route path='/company-ranking' component={RankingPage}/>
                    <Route path='/city-ranking' component={CityPage}/>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
