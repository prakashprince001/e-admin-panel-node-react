import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul class="nav-ul">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/addProduct">Add Product</Link></li>
                <li><Link to="/updateProduct">Update Product</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default Nav