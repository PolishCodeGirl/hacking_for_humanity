import React from 'react';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

import '../App.css';
import tram from '../assets/tram.png';
import bike from '../assets/bike.png';
import bus from '../assets/bus.png';

const Profile = () => {
    return (
        <Div mTop={50} mLeft={75} column>
            <p>Moje punkty: 1500</p>
            <Wrapper itemsCenter>
                <TransportWrapper>
                    <Transport src={tram} />
                </TransportWrapper>
                <p>2345678 pkt</p>
            </Wrapper>

            <Wrapper itemsCenter>
                <TransportWrapper>
                    <Transport src={bike} />
                </TransportWrapper>
                <p>2345678 pkt</p>
            </Wrapper>

            <Wrapper itemsCenter>
                <TransportWrapper>
                    <Transport src={bus} />
                </TransportWrapper>
                <p>2345678 pkt</p>
            </Wrapper>
        </Div>
    )
}

export default Profile

const Wrapper = styled(Div)`
    min-height: 60px;
    min-width: 500px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.25);
`

const TransportWrapper = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 15px;
    background: #aed581;
    border-radius: 50px;
    padding: 10px;
`

const Transport = styled.img`
    width: 100%;
`
