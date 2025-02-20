import logo from '../../assets/logo/logisticlens-high-resolution-logo-transparent.png'
import './navbar.css'
function Navbar() {



    return ( 
        <>
            <nav className="navbar">
                <div id="navbar-container" className=""> 
                    <div id="navbar-logo-container">
                        <a href="#" className="navbar-logo-link">
                            <img src={logo} alt="Logo" className="" id='navbar-logo'  />
                        </a>
                    </div>
                    <div className="" id='navbar-item'>
                        <ul className='' id='navbar-list'>
                            <li className='nav-item'><a href="#">Home</a></li> 
                            <li className='nave-item'><a href="#">Tracker</a></li>
                            <li className='nav-item'><a href="#">Service</a></li>
                            <li className='nav-item'><a href="#">Blog</a></li>
                            <li className='nav-item'><a href="#">contact</a></li>
                        </ul>
                    </div>   
                </div>
                <div id='navbar-mobile'>
                    <button className="navbar-toggler" type="button" id='' >
                       <i className="bi bi-list"></i>
                    </button>
                </div>
            </nav>

</>
    );
}

export default Navbar;