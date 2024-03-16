import React from 'react'
import { NavLink } from 'react-router-dom'

type NavProp = {
    isActive: boolean
}
export const Navbar = () => {
    const navStyleLink = ({isActive}: NavProp)=>(
        {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    )
    return(
        <React.Fragment>
            <NavLink to="/" style={navStyleLink}>Home</NavLink>
            <NavLink to="/about" style={navStyleLink}>About</NavLink>
            <NavLink to="/contact" style={navStyleLink}>Contact</NavLink>
        </React.Fragment>
    )
}