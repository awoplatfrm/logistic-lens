import mongodb, { MongoClient, ObjectId, Db, Collection } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()


interface OrderStatus {
    status: string;
    date: string;
    time: string;
    message: string;
}

interface User{
    name:string,
    email:string,
    product:string,
    quantity:number | string,
    phone:string,
    address:string,
    city:string,
    state:string,
    country:string,
    order_status:OrderStatus[],
    tracking_number:string | number,
    order_id:string,
}



export class Auth {
   
    client: MongoClient;
    db:Db;
    collection:Collection;

   constructor() {
       this.client = new MongoClient(process.env.DB_URL as string);
       this.db = this.client.db(process.env.DB_NAME );
       this.collection = this.db.collection(process.env.DB_TB as string);
   }

    async RegisterUserOrder(user:User){

        const save_user = {
        name: user.name,
        email:user.email,
        product:user.product,
        quantity:user.quantity,
        phone:user.phone,
        address:user.address,
        city:user.city,
        state:user.state,
        country:user.country,
        order_status:user.order_status,
        tracking_number:user.tracking_number,
        order_id:user.order_id,
        }

       try {
            const result = await this.collection.insertOne(save_user);
            return({
                message:"order saved successfully",
                data:result,
                code:200
            })
            console.log(`New user order added with the following id: ${result.insertedId}`);
       } catch (error) {
        return({
            message:`${error} while saving user order}`,
            data:null,
            code:500
        })
        console.error(`${error} while saving user order}`);
       }
       
        
    }

    async getOrder(order_id:string){
        try {
            const result = await this.collection.findOne({order_id:order_id});
            if(result){
                return({
                    message:"order found",
                    data:result,
                    code:200
                })
            }else{
                return({
                    message:"order not found",
                    data:null,
                    code:404
                })
            }
        } catch (error) {
            return({
                message:`${error} while checking user order}`,
                data:null,
                code:500
            })
        }
    }

    async checkOrder(order_id:string){
        try {
            const result = await this.collection.findOne({order_id:order_id});
            if(result){
                return({
                    message:"order found",
                    data:result,
                    code:200
                })
            }else{
                return({
                    message:"order not found",
                    data:null,
                    code:404
                })
            }
        } catch (error) {
            return({
                message:`${error} while checking user order}`,
                data:null,
                code:500
            })
        }
    }

    async updateOrder(order_details:User){
        const feedback = await this.checkOrder(order_details.order_id);
        if(feedback.code === 200){
            try {
                const result = await this.collection.updateOne({order_id:order_details.order_id},{$set:order_details});
                if(result.modifiedCount>0){
                    return({
                        message:"order updated",
                        data:result,
                        code:200
                    })
                }else{
                    return({
                        message:"order not updated",
                        data:null,
                        code:500
                    })
                }
            } catch (error) {
                return({
                    message:`${error} while updating user order}`,
                    data:null,
                    code:500
                })
            }
        }else if(feedback.code === 404){
            return({
                message:"order not found",
                data:null,
                code:404
            })

        }else{
            return({
                message:"something went wrong",
                data:null,
                code:500
            })
        }
    }


}

  