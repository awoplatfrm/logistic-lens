import './footer.css'
function Footer() {
    return ( 
        <> 
           <footer className='footer'>
                <div className="footer-container">
                    <div className="section1-container">
                        <div className="quick-links-container">                     
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Tracker</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Service</a></li>
                                </ul>
                        </div>
                        <div className="address-container">
                            <div className="address">
                                <h2>Address</h2>
                                <p>Address: 1234 Street Name, City, State, Zip Code</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Email: info@yourwebsite.com</p>

                            </div>
                        </div>
                        <div className="social-connect-container">          
                                <h2>Social Connect</h2>
                                <div className="social-icons">
                                    <div className="icon"><i className="bi bi-twitter-x"></i></div>
                                    <div className="icon"><i className="bi bi-facebook"></i></div>
                                    <div className="icon"><i className="bi bi-instagram"></i></div>
                                </div>
                        </div>
                    </div>
                    <div className="section2-container">
                        <p>all right reserved</p>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;