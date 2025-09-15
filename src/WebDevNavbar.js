import { Link } from 'react-router-dom';

const WebDevNav = () => {


    const handleMenuToggle = () => {

        const menuToggle = document.getElementById("menu-toggle");
        if (menuToggle) {
            menuToggle.checked = false;
        }

    }


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

            <Link className="logo" to="/web-dev">Frank Mbadiwe</Link>



            
            <Link className="web-dev-link" to="/">Graphic Design</Link>

        </nav>




        <div className="nav-items">
            <ul>
                <li id="nav-links"> <Link to='/web-dev' onClick={handleMenuToggle} >Home</Link> </li>


                <li><a className="isDisabled" href="#">Playground</a></li>


                <li id="nav-links"><Link to='about' onClick={handleMenuToggle} >About</Link></li>
            </ul>
        </div>


    </div>


</header>



     );
}
 
export default WebDevNav;