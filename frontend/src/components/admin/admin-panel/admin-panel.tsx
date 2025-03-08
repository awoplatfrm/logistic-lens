import logo from '../../../assets/logo/logisticlens-high-resolution-logo (1).png';
import './admin-panel.css';
import { useState } from 'react';
import image from '../../../assets/logo/undraw_fill-forms_npwp.png'


export function AddCustomer(){
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        product: '',
        quantity: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        order_date: '',
        order_time: '',
        order_message: '',
        tracking_number: '',
        order_id: ''
    });

    const handleStep = (action:string) => {
        setStep(()=> action === "next"? step + 1 : step - 1);
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    console.log(formData);

    const handleFormData = (e:React.FormEvent) => {
        e.preventDefault();

    }

    

    return(
        <>
            <div className="add-customer">
                <div className="form">
                    <form onSubmit={handleFormData}>
                        <h3>Register Order</h3>
                        
                        {step === 1 &&(
                            <>
                                 <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" onChange={handleChange} name='name'  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" onChange={handleChange} name='email'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="product">Product</label>
                                    <input type="text" id="product" onChange={handleChange} name='product'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="quantity">quantity</label>
                                    <input type="text" id="quantity" onChange={handleChange} name='quantity'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Address</label>
                                    <input type="text" id="address" onChange={handleChange} name='address'/>
                                </div>

                                <button type="button" onClick={()=> handleStep("next")}>next</button>   
                            </>
                        )}


                        {
                            step === 2 && (
                                <> 
                                <button type="button" onClick={()=> handleStep("back")} id='back-button'><i className="bi bi-arrow-left-square"> back </i></button>
                                <div className="form-group">
                                    <label htmlFor="phone">City</label>
                                    <input type="text" id="city" onChange={handleChange} name='city'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <input type="text" id="state" onChange={handleChange} name='state'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <input type="text" id="country" onChange={handleChange} name='country'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <input type="text" id="message" onChange={handleChange} name='order_message'/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Date</label>
                                    <input type="date" id="date" onChange={handleChange} name='order_date'/>
                                </div>

                                <div className="buttons">
                                    <button type="submit">Add Customer</button>
                                </div>
                                </>
                            )
                        }
                    </form>
                    <div className="fill-form-image">
                            <img src={image} alt=""  />
                    </div>
               </div>
            </div>
        </>
    )
    
}

export function AdminNav() {
    return (  
        <>
            <nav className='admin-nav'>
                <ul className='nav-list'>
                    <li>
                       <div className='nav-logo'>
                            <a href="">
                                <img src={logo} alt="logo"  />
                            </a>
                       </div>
                    </li>
                    <li>
                        <div className='admin-name'>
                            <i className="bi bi-person-fill"></i>
                            <p>Admin Name</p>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export function AdminSideNav() {
   return(
    <>  
        <nav className='admin-sideNav'>
           <div className="dashboard">
               <i className="bi bi-speedometer2"></i>
               <h3>DASHBOARD</h3>
           </div>
            <ul>
                <li>
                    <button>
                        <i className='bi bi-person-fill'></i>
                        <p>Customers</p>
                    </button>
                </li>
                <li>
                    <button>
                        <i className='bi bi-envelope-fill'></i>
                        <p>Message</p>
                    </button>
                </li>
                <li>
                    <button>
                        <i className='bi bi-gear-fill'></i>
                        <p>Settings</p>
                    </button>
                </li>
            </ul>
        </nav>
    </>
   )
}



export function AdminContent() {
    return(
        <>
            <div className="admin-content">
                <div className="customer-list-add-customer">
                    <h3>Customers</h3>
                    <button className="add-customer-btn">Add Customer</button>
                </div>
                <div className="search">
                    <p>Search:</p>
                    <input type="text" placeholder="" />
                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Customer Name</th>
                                <th>Tracking</th>
                                <th>Contact No</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>item 1 </td>
                                <td>item 2 </td>
                                <td>item 3 </td>
                                <td>item 4 </td>
                                <td>item 5 </td>
                                <td>item 6 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default function AdminPanel() {
    return (
        <div className="admin-panel-container">
           <div className="adminNav-container">
            <AdminNav />
           </div>
            <div className="sideBar-adminContent">
                <AdminSideNav />
                <AddCustomer />
                {/* <AdminContent /> */}
            </div>
        </div>
    );
}