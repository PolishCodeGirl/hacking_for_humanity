import React from 'react'
import styled from 'styled-components';
import avatar3 from '../assets/avatar3.png';

import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <NavBarWrapper>
            <nav className="nav-wrapper-flex">
                <h3 class="title">COMPANY</h3>
                <ul class="nav-links">
                    <li><NavLinkStyled to='/company-ranking/' style={{ color: ' #ecf0f1'}}>W firmie </NavLinkStyled></li>
                    <li><NavLinkStyled to='/city-ranking/' style={{ color: ' #ecf0f1'}}>W Warszawie</NavLinkStyled></li>
                    <li><NavLinkStyled to='/'><AvatarWrapper><Avatar src={avatar3} /></AvatarWrapper></NavLinkStyled></li>
                </ul>
            </nav>
        </NavBarWrapper>
    )
}

export default NavigationBar

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    margin: 0 10px;
`

const NavBarWrapper = styled.div`
    width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const AvatarWrapper = styled.div`
    width: 50px;
    height: 50px;
`

const Avatar = styled.img`
    width: 100%;
`