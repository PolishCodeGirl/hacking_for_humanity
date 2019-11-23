import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <NavLink to='/company-ranking/'>W firmie</NavLink>
                <NavLink to='/city-ranking/'>W Warszawie</NavLink>
            </div>
        </nav>
    )
}

export default NavigationBar