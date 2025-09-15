import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 



    <header className="header">

    <div className="nav-container">


        <input className="checkbox" type="checkbox" name="" id="menu-toggle" />
        <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
        </div>

        <nav className="nav">

        <a className="logo" href="/">Frank Mbadiwe</a>



        <Link className="web-dev-link" to="/web-dev">Web Developer</Link>

        </nav>


        <div className="nav-items">
        <ul>
            <li id="nav-links"><a href="/">Home</a></li>
            <li id="nav-links"><a href="/playground">Playground</a></li>
            <li id="nav-links"><a href="/about">About</a></li>
        </ul>
        </div>


    </div>


    </header>



     );
}
 
export default Navbar;