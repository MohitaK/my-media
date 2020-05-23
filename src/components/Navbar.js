import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <div class="nav-wrapper #82b1ff blue accent-1">
                <ul class="right hide-on-med-and-down">
                    <li><NavLink exact={true} to="/">Profile</NavLink></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/comments">Comments</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/photos">Photos</Link></li>
                </ul>
            </div>
        </nav>
    )
}