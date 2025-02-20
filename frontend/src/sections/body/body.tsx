import Navbar from "../navbar/navbar";
import "./body.css"
function Body() {

    return ( 
        <>  
            <Navbar />
            <div className="body-content">
                <header className="header">
                    <div className="header-content">
                        <p className="order-delivery-tracker">Order Delivery Tracker</p>
                        <h1 className="header-title">
                            keep your online order organized
                        </h1>
                        <p className="header-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis vestibulum ante,
                            id gravida sem. Nam dictum ornare dictum. Sed congue accumsan arcu quis consectetur.
                        </p>
                        <div className="track-your-order-btn">
                            <button className="btn btn-primary btn-lg" id="track-order-button   ">Track Your Order</button>
                        </div>
                        
                    </div>
                </header>
                <form action="#" method="post" className="track-form">
                    <h3 className="form-title">Track your order</h3>
                    <div className="form-container">
                        <div className="track-form-input">
                            <input type="email" className="form-control" placeholder="Enter your email address" id="email-address" />
                        </div>
                        <div className="track-form-input">
                            <input type="text" className="form-control" placeholder="Enter your tracking number" id="tracking-number" />
                        </div>
                        <div className="submit-button">
                            <button className="btn btn-primary" id="track-btn" type="submit">Submit</button>
                        </div>
                    </div>
               </form>
                <div className="tracking">
                   <h3 className="tracking-title">owner Title</h3> 
                        <div className="tracking-item-container">
                        <div className="tracking-item">
                            <div className="tracking-icon">
                              <i className="bi bi-hand-thumbs-up"></i>
                            </div>
                            <div className="tracking-content">
                                <div className="tracking-date-time">
                                    <span>12/12/2025</span>
                                    <span className="tracking-time">12:00PM </span>
                                </div>
                                <div className="tracking-status">
                                    <div className="tracking-statuss">
                                        <span>Order confirmed</span>
                                        <span>seller has confirmed your order</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tracking-item">
                            <div className="tracking-icon">
                            <i className="bi bi-truck"></i>
                            </div>
                            <div className="tracking-content">
                                <div className="tracking-date-time">
                                    <span>12/12/2025</span>
                                    <span className="tracking-time">12:00PM</span>
                                </div>
                                <div className="tracking-status">
                                    <div className="tracking-statuss">
                                        <span>Order confirmed</span>
                                        <span>seller has confirmed your order</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tracking-item">
                            <div className="tracking-icon">
                            <i className="bi bi-truck"></i>
                            </div>
                            <div className="tracking-content">
                                <div className="tracking-date-time">
                                    <span>- -</span>
                                    <span className="tracking-time">- -</span>
                                </div>
                                <div className="tracking-status">
                                    <div className="tracking-statuss">
                                        <span>Order confirmed</span>
                                        <span>seller has confirmed your order</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tracking-item">
                            <div className="tracking-icon">
                            <i className="bi bi-geo-alt"></i>
                            </div>
                            <div className="tracking-content">
                                <div className="tracking-date-time">
                                    <span>- -</span>
                                    <span className="tracking-time">- -</span>
                                </div>
                                <div className="tracking-status">
                                    <div className="tracking-statuss">
                                        <span>Order confirmed</span>
                                        <span>seller has confirmed your order</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tracking-item">
                            <div className="tracking-icon">
                            <i className="bi bi-truck"></i>
                            </div>
                            <div className="tracking-content">
                                <div className="tracking-date-time">
                                    <span>- -</span>
                                    <span className="tracking-time">- -</span>
                                </div>
                                <div className="tracking-status">
                                    <div className="tracking-statuss">
                                        <span>Order confirmed</span>
                                        <span>seller has confirmed your order</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="tracking-item">
                                <div className="tracking-icon">
                                <i className="bi bi-check2"></i>
                                </div>
                                <div className="tracking-content">
                                    <div className="tracking-date-time">
                                        <span>- -</span>
                                        <span className="tracking-time">- -</span>
                                    </div>
                                    <div className="tracking-status">
                                        <div className="tracking-statuss">
                                            <span>Order confirmed</span>
                                            <span>seller has confirmed your order</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </> 
     );
}

export default Body;