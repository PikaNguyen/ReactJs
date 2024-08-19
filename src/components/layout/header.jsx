import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <ul>
            <li><NavLink class="active" to="/">Home</NavLink></li>
            <li><NavLink to="/user">Users</NavLink></li>
            <li><NavLink to="/product">Product Book</NavLink></li>
        </ul>
    )
}

export default Header