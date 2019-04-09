import React from 'react';
import { NavLink } from 'react-router-dom';




const NavBar = () => {
    return (
        <div className="NavBarWrapper">
            <h2>Ben's Smurf Project</h2>
            <div className="NavBarInsideWrapper">
                <NavLink className="NavLink" exact to="/">
                    <h3>View Your Smurf List</h3>
                </NavLink>

                <NavLink className="NavLink" exact to="/smurf-form">
                    <h3>Add A Smurf</h3>
                </NavLink>
            </div>
        </div>
    )
};

export default NavBar