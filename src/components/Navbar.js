import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">EDGAR Search</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mr-2">
                        {/* <NavLink className="btn btn-outline-primary col-sm-12" to="/">Search</NavLink> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;