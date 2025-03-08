import Navbar from "../../sections/navbar/navbar";
import Footer from '../../sections/footer/footer';
import photo from '../../assets/logo/undraw_destination_fkst.png'
import our_service_photo from '../../assets/logo/undraw_deliveries_2m9t.png'
import review_photo from '../../assets/logo/undraw_reviews_ukai.svg'
import reading_photo from '../../assets/logo/undraw_reading_c1xl.png'
import "./body.css"
import  { getOrder, registerOrder } from '../../methods/user.methods'
import { useState, useEffect } from "react";


interface Order {
    name: string;
    email: string;
    product: string;
    quantity: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    order_date: string;
    order_time: string;
    order_message: string;
    order_status: string;
    tracking_number: string;
    order_id: string;
}
function Body() {


    const [input, setInput] = useState<string>("");
    const [order, setOrder] = useState<Order[]>([]);
    
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        getOrder(input).then((res)=>{

            const orderArray = []
            orderArray.push(res.data)
            setOrder(orderArray);
            console.log("Orders fetched successfully",orderArray);
        })
    

    }

  
    const handle_tracking = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    }

    return ( 
        <>  
            <Navbar />
            <div className="body-content">
                <header className="header">
                    <div className="photo-container">
                        <img src={photo} alt="" className="" />
                    </div>
                    <div className="header-content">
                        <p className="order-delivery-tracker">Order Delivery Tracker</p>
                        <h1 className="header-title">
                            keep your online shopping organized
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
                <form action="" method="POST" className="track-form" onSubmit={handleSubmit}>
                    <h3 className="form-title">Track your order</h3>
                    <div className="form-container">
                        {/* <div className="track-form-input">
                            <input type="email" className="form-control" placeholder="Enter your email address" id="email-address" />
                        </div> */}
                        <div className="track-form-input">
                            <input type="text" className="form-control" 
                            placeholder="Enter your tracking number" 
                            id="tracking-number" onChange={(e) => handle_tracking(e)}
                            required />
                        </div>
                        <div className="submit-button">
                            <button className="btn btn-primary" id="track-btn" type="submit">Submit</button>
                        </div>
                    </div>
               </form>
                <div className="tracking">
                   <h3 className="tracking-title"></h3> 
                        <div className="tracking-item-container">
                        <div className="tracking-item">
                            <div className="tracking-icon">
                              <i className="bi bi-hand-thumbs-up"></i>
                            </div>
                            <div className="tracking-content">
                                {order.length > 0 ? order.map(
                                    (orders) => {
                                       
                                        return(
                                            <>
                                                <div className="tracking-date-time">
                                                    <span>{orders.order_date}</span>
                                                    <span className="tracking-time">{orders.order_time} </span>
                                                </div>
                                                <div className="tracking-status">
                                                    <div className="tracking-statuss">
                                                        <span>{orders.order_status}</span>
                                                        <span>{orders.order_message}</span>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                ) :
                                    <>
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
                                    </>
                                }
                            </div>
                        </div>
                        <div className="tracking-item">
                            <div className="tracking-icon">
                            <i className="bi bi-truck"></i>
                            </div>
                            <div className="tracking-content">
                                <div className="tracking-date-time">
                                    <span>----</span>
                                    <span className="tracking-time">---</span>
                                </div>
                                <div className="tracking-status">
                                    <div className="tracking-statuss">
                                        <span>----</span>
                                        <span>-----</span>
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
                                        <span>- - -</span>
                                        <span>- - -</span>
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
                                        <span>- - -</span>
                                        <span>- - - </span>
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
                                        <span>- - -</span>
                                        <span>- - -</span>
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
                                            <span>- - -</span>
                                            <span>- - -</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="our-service">
                    <h4>Our Service</h4>
                    <div className="our-service-container">
                        <div className="our-service-content">
        
                            <div className="content-text-container">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis vestibulum ante, 
                                    id gravida sem. Nam dictum ornare dictum. Sed congue accumsan arcu quis consectetur.
                                    <span>amet, consectetur adipiscing elit. Ut quis vestibulum ante, 
                                    id gravida sem. Nam dictum ornare dictum. Sed congue </span>
                                </p>
                            </div>
                            <div className="service-list">
                                <span><i className="bi bi-check-circle-fill" id="check"></i>  Easy tracking</span>
                                <span> <i className="bi bi-check-circle-fill" id="check"></i> Courier serivice</span>
                                <span> <i className="bi bi-check-circle-fill" id="check"></i>  Safest Delivery</span>
                                <span><i className="bi bi-check-circle-fill" id="check"></i> Same Day Delivery</span>
                                <span> <i className="bi bi-check-circle-fill" id="check"></i> Nation-Wide Express Delivery</span>
                            </div>
                        </div>
                        <div className="our-service-image-container">
                            <img src={our_service_photo} alt="our service" />
                        </div>
                    </div>
                </div>
                <div className="latest-blog-container">
                    <h4>Latest Blog</h4>
                    <div className="blog">
                        <p>porem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis vestibulum ante, 
                        id gravida sem. Nam dictum ornare dictum. Sed congue accumsan arcu quis consectetur.
                        </p>
                            <div className="cards-container">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={photo} alt='' />
                                    </div>
                                    <div className="card-content">
                                        <h4>title</h4>
                                        <p> id gravida sem. Nam dictum ornare dictum. Sed congue accumsan</p>
                                    </div>
                                </div>    
                                <div className="card">
                                    <div className="card-image">
                                        <img src={photo} alt='' />
                                    </div>
                                    <div className="card-content">
                                        <h4>title</h4>
                                        <p> id gravida sem. Nam dictum ornare dictum. Sed congue accumsan</p>
                                    </div>
                                </div>    
                                <div className="card">
                                    <div className="card-image">
                                        <img src={photo} alt='' />
                                    </div>
                                    <div className="card-content">
                                        <h4>title</h4>
                                        <p> id gravida sem. Nam dictum ornare dictum. Sed congue accumsan</p>
                                    </div>
                                </div>    
                           </div>
                    </div>
                </div>
                <div className="review-container">
                    <h4>Customer Review</h4>
                    <div className="review">
                        <div className="review-card">        
                            <div className="review-card-content">
                                <h4>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis vestibulum ante, 
                                    id gravida sem. Nam dictum ornare dictum. Sed congue accumsan arcu quis consectetur.
                                    Sed congue accumsan arcu quis consectetur.
                                </h4>
                                <div className="review-author">
                                    <div className="author-image-container">
                                        <img src={reading_photo} alt="author" />
                                    </div>
                                    <div className="author-details">
                                        <span>John Doe</span>
                                        <span>( buisness )</span>
                                    </div>
                                </div> 
                            </div>
                            <div className="slides-container">
                                <div className="slides">
                                    <div className="slide-left"><i className="bi bi-caret-left-fill"></i></div>
                                    <div className="slide-right"><i className="bi bi-caret-right-fill"></i></div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="review-image">
                            <img src={review_photo} alt="review" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </> 
     );
}

export default Body;