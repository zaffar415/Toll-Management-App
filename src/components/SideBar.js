import React from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div>
            </div>
            <ul className="menu">
                <li><Link to="/">Vehicles</Link></li>
                <li><Link to="/add-vehicle">Add Vehicle</Link></li>
                <li><Link to="/tolls">Tolls</Link></li>
                <li><Link to="/add-toll">Add Toll</Link></li>
            </ul>
        </div>
    )    
}

export default SideBar;