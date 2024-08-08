import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <ul>
            <li><NavLink class="active" to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/user">Users</NavLink></li>
            <li><NavLink to="/product">Products</NavLink></li>
        </ul>
    )
}

export default Header