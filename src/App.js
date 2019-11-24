import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import Div from 'styled-kit/Div';

import './App.css';

import RankingPage from './page/Ranking';
import CityPage from './page/City';
import Profile from './page/Profile';

import NavigationBar from "./components/NavigationBar";

import dog from './assets/dog.gif'

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
                <DogAnimation>
                    <DogWrapper>
                        <DogGif src={dog} />
                    </DogWrapper>
                </DogAnimation>
            </div>
        </BrowserRouter>
    );
}

export default App;

const dogRun = keyframes`
    0% { transform:translateX(0px); }
  100% { transform:translateX(1500px); }
`

const DogAnimation = styled(Div)`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`
const DogWrapper = styled(Div)`
    width: 150px;
    height: 150px;
    animation: ${dogRun} 10s linear infinite;
`
const DogGif = styled.img`
    width: 100%;
`
