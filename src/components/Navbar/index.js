import React from 'react'
import './Navbar.css'

const Navbar = props => {

    return (
    <div className="Navbar">
        <div className="Navbar-title">
            <h1>React<span>JS</span></h1>
        </div>
        <div className="Navbar-menu">
            <ul>
                <li><button name="hot" className="active">Hot</button></li>
                <li><button name="news">News</button></li>
                <li><button name="rising">Rising</button></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar