import express, { Express, Request, Response, NextFunction, RequestHandler, ErrorRequestHandler } from "express";
const app:Express = express();
import cors from "cors";
import { Auth } from './auth/auth'

app.use(cors());
app.use(express.json());

const PORT = 3000
const auth = new Auth();
app.get("/", (request:Request, respond:Response)=>{
    respond.send("hello welcome to my first api")
});


app.post("/register-order", async (req:Request,res:Response)=>{
    

    interface OrderStatus {
        status: string;
        date: string;
        time: string;
        message: string;
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
        order_status:string,
        tracking_number:string,
        order_id:string,
    }
    const order_status: OrderStatus[] = req.body.order_status?.map((status: any) => ({
        status: status.status?.trim() || "",
        date: status.date?.trim() || "",
        time: status.time?.trim() || "",
        message: status.message?.trim() || ""
    })) || [];
    
    const user = {
        name:req.body.name?.trim() || "",
        email:req.body.email?.trim() || "",
        product:req.body.product?.trim() || "",
        quantity:req.body.quantity?.trim() || "",
        phone:req.body.phone?.trim() || "",
        address:req.body.address?.trim() || "",
        city:req.body.city?.trim() || "",
        state:req.body.state?.trim() || "",
        country:req.body.country?.trim() || "",
        order_status:order_status,
        tracking_number:req.body.tracking_number?.trim() || "",
        order_id:req.body.order_id?.trim() || "",

    }
    try {
        const feedback = await auth.RegisterUserOrder(user);
        if(feedback.code == 200){
            res.status(200).send({
                message:feedback.message,
                data:feedback.data,
                code:feedback.code

            })  
        
        }else{
            res.status(500).send({
                message:feedback.message,
                data:feedback.data,
                code:feedback.code
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"an error occured",
            error:error instanceof Error ? error.message : "an error occured",
           
        })
    }
    

})

app.get("/get-order/:order_id", async (req:Request, res:Response)=>{
    const order_id:string = req.params.order_id?.trim() || "";
    
    const feedback = await auth.getOrder(order_id);
    if(feedback.code === 200){
        res.status(200).send({
            message:feedback.message,
            data:feedback.data,
            code:feedback.code

        })
    }else if(feedback.code === 404){
        res.status(404).send({
            message:feedback.message,
            data:feedback.data,
            code:feedback.code
        })
    }else{
        res.status(500).send({
            message:feedback.message,
            data:feedback.data,
            code:feedback.code
        })

    }
})

app.post("/update-order", async (req:Request, res:Response)=>{

    const order_details = {
        name:req.body.name?.trim() || "",
        email:req.body.email?.trim() || "",
        product:req.body.product?.trim() || "",
        quantity:req.body.quantity?.trim() || "",
        phone:req.body.phone?.trim() || "",
        address:req.body.address?.trim() || "",
        city:req.body.city?.trim() || "",
        state:req.body.state?.trim() || "",
        country:req.body.country?.trim() || "",
        order_date:req.body.order_date?.trim() || "",
        order_time:req.body.order_time?.trim() || "",
        order_message:req.body.order_message?.trim() || "",
        order_status:req.body.order_status?.trim() || "",
        tracking_number:req.body.tracking_number?.trim() || "",
        order_id:req.body.order_id?.trim() || "",

    }

    try {
        const feedback = await auth.updateOrder(order_details);
        if(feedback.code === 404){
            res.status(400).send({

                message:feedback.message,
                data:feedback.data

            })
        }else if(feedback.code === 200){

            try {
                const data = await auth.getOrder(order_details.order_id);

                if(data.code === 200){
                    res.status(200).send({
                        message:"order updated successfully",
                        data:data.data
                    })
                }else{
                    res.status(500).send({
                        message:"Order updated successfully but could not fetch updated order",
                        data:null
                    })
                }
            } catch (error) {
                res.status(500).send({
                    message: "Order updated successfully, but failed to fetch updated order details due to an error",
                    data:error instanceof Error ? error.message : "unknown error"
                })
            }
        }else{
            res.status(500).send({
                message:feedback.message,
                data:feedback.data
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"internal server error",
            data:null,
            error:error instanceof Error ? error.message : "unknown error"
        })
    }

    
})


app.get("/api", (request:Request, respond:Response)=>{
    respond.send("hello Apiss")
})

















app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})