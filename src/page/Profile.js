import React from 'react';
import styled from 'styled-components';
import Div from 'styled-kit/Div';

import '../App.css';

const Profile = () => {
    return (
        <Div mTop={50} mLeft={75} column>
            <Wrapper>
                <p>Moje punkty: 1500</p>
            </Wrapper>
        </Div>
    )
}

export default Profile

const Wrapper = styled(Div)`
    height: 60px;
    margin-bottom: 30px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.25);
`