import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link className='header_link' to="/accountmanagment">Manage Account</Link>
            <Link className='header_link' to="/signout">Sign Out</Link>
        </div>
    )
}

export default Header
