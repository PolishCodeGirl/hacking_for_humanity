import React from 'react'
import styled from 'styled-components';
import Div from 'styled-kit/Div';

import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <Navigation>
            <Div>
                <NavLinkStyled to='/company-ranking/'>W firmie </NavLinkStyled>
                <div>{`  |  `}</div>
                <NavLinkStyled to='/city-ranking/'>W Warszawie</NavLinkStyled>
            </Div>
        </Navigation>
    )
}

export default NavigationBar

const Navigation = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
`
const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    margin: 0 10px;
`