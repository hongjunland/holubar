import "./Nav.css"
import {Link} from 'react-router-dom'

export function Nav(){
    return (
        <nav>
            <div className="Navbar--left"><div><Link to="/">Holubar</Link></div></div>
            <ul className="Navbar--containerList">
                <div>
                    <li><Link to="/donate">Donate</Link></li>
                    <li><Link to="/market">Market</Link></li>
                    <li><Link to="/ranking">Rankings</Link></li>
                </div>
                <div>
                    <li><Link to="/profile">Profile</Link></li>
                </div>
            </ul>
        </nav>
    );
}