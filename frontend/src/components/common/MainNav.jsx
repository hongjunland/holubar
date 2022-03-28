import "components/common/MainNav.css"
// import {Link} from 'react-router-dom'
export function MainNav(){
    return (
        <nav>
            <div className="Navbar--left"><div><a href="/">Holubar</a></div></div>
            <ul className="Navbar--containerList">
                <div>
                    <li><a href="/donate">Donate</a></li>
                    <li><a href="/market">Market</a></li>
                    <li><a href="/ranking">Rankings</a></li>
                </div>
                <div>
                    <li><a href="/profile">Profile</a></li>
                </div>
            </ul>
        </nav>
    );
}