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
            <PointsCount>Moje punkty: 1500</PointsCount>
            <Wrapper itemsCenter>
                <TransportWrapper>
                    <Transport src={tram}/>
                </TransportWrapper>
                <MetadataWraper>
                    <Metadata>500 pkt</Metadata>
                    <Metadata>2019-11-11</Metadata>
                    <Metadata>11:11</Metadata>
                </MetadataWraper>
            </Wrapper>

            <Wrapper itemsCenter>
                <TransportWrapper>
                    <Transport src={bike}/>
                </TransportWrapper>
                <MetadataWraper>
                    <Metadata>500 pkt</Metadata>
                    <Metadata>2019-11-12</Metadata>
                    <Metadata>12:12</Metadata>
                </MetadataWraper>
            </Wrapper>

            <Wrapper itemsCenter>
                <TransportWrapper>
                    <Transport src={bus}/>
                </TransportWrapper>
                <MetadataWraper>
                    <Metadata>500 pkt</Metadata>
                    <Metadata>2019-11-13</Metadata>
                    <Metadata>13:13</Metadata>
                </MetadataWraper>
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

const Metadata = styled.p`
    margin: 0;
`

const MetadataWraper = styled(Div)`
    width: 80%;
    justify-content: space-around;
`

const PointsCount = styled.p`
    font-size: 48px;
`