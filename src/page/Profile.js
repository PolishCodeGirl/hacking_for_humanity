import React from 'react';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

import {transportEntries} from "../constants/constants";

import '../App.css';

const Profile = () => {
    return (
        <Div mTop={50} mLeft={75} column>
            <PointsCount>Moje punkty: {transportEntries
                .map(entry => entry.pointsCount)
                .reduce((pointsCount1, pointsCount2) => pointsCount1 + pointsCount2, 0)
            }
            </PointsCount>

            {transportEntries.map(entry => {
                return (
                    <Wrapper itemsCenter>
                        <TransportWrapper>
                            <Transport src={entry.icon}/>
                        </TransportWrapper>
                        <MetadataWraper>
                            <Metadata>{entry.pointsCount} pkt</Metadata>
                            <Metadata>{entry.date}</Metadata>
                            <Metadata>{entry.time}</Metadata>
                        </MetadataWraper>
                    </Wrapper>
                )
            })}
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