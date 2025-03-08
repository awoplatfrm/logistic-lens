import axios,{isAxiosError, AxiosResponse} from "axios";


interface IorderStatus{
    status:string,
    message:string
    date:string,
    time:string
}

interface IOrder{
    name:string,
    email:string,
    product:string,
    quantity:string,
    phone:string,
    address:string,
    city:string,
    state:string,
    country:string,
    order_date:string,
    order_time:string,
    order_message:string,
    order_status:IorderStatus[],
    tracking_number:string,
    order_id:string,
}

export const registerOrder = async (order_details:IOrder) => {
    try {
        const response:AxiosResponse = await axios.post("http://localhost:3000/register-order", order_details);
        if (response.status === 200) {
            return response.data;
            console.log("Order registered successfully",response.data);
        }else {
            return null
            console.log("Error registering order",response.data);
        }
    } catch (error) {
        if(isAxiosError(error)) {
            console.log("Axios Error while registering order", error.response?.data);
        }else{
            console.log("Error while registering order",error);
        }
        
    }
}

export const getOrder = async (order_id:string) => {
    try {
        const response:AxiosResponse = await axios.get(`http://localhost:3000/get-order/${order_id}`);
        if (response.status === 200) {
            
            return response.data;
        }else {
            console.log("Error fetching orders",response.data);
            return null;
        }
    }catch (error) {
        if (isAxiosError(error)) {
            console.log(" axios error while fetching orders", error.response?.data,);
        } else {
            console.log("error while fetching orders", error);
            
        }
    }
}