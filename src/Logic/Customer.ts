import {Account} from "./Account"
import { Agent } from "./Agent";
import { AccountType } from "./Enum"
import { Management } from "./Management";
import { Order } from "./Order";
import {Train} from "./Train"

export class Customer extends Account{
    private __seatNO : string | undefined;
    private __Train : Train | undefined;
    private __Orders : Array<Order> = [];
    private __allotedAgent : Agent | undefined;
    private __phoneNumber : string;
    constructor(name:string,username : string, password:string, phoneNo : string, management:Management, ID : number = -1){
        super(name,username,new Date(),AccountType.Customer,password,ID);
        this.__phoneNumber = phoneNo;
        management.loginC.set(this._username, this);
        // let m = Management.getInstance();
        management.Customers.set(this.getID(),(this));
        // management.CustomersForStoring.push(this);
    }
    addOrder(Order:Order) : void{
        this.__Orders.push(Order);
    }
    updateOrderStatus(orderId : number, status : number) : void{
        for(let i of this.__Orders){
            if(i.orderId === orderId){
                i.updateOrderStatus(status);
            }
        }
    }
    getReciept(orderId : number){
        for(let i of this.__Orders){
            if(i.orderId === orderId){
                return i.getReciept();
            }
        }
    }
    getOrder(orderId : number) : Order|null{
        for(let i of this.__Orders){
            if(i.orderId === orderId){
                return i;
            }
        }
        return null;
    }
    updateTrain(seatNo : string, train : Train){
        this.__Train = train;
        this.__seatNO = seatNo;
    }

    getOrderStatus(orderId : number){
        for(let i of this.__Orders){
            if(i.orderId == orderId){
                return i.getOrderStatus();
            }
        }
    }
    checkPasswords(userName : string,password : string){

    }
    getOrderList() : Array<Order>{
        return this.__Orders;
    }
    // static ReadCustomer(customer : Customer){
    //     let x = new Customer(customer["_name"],customer["_username"],customer["_password"],customer["__phoneNumber"]);
    //     x.__Train = customer["__Train"];
    //     x.__seatNO = customer["__seatNO"];
    //     x.__allotedAgent = customer["__allotedAgent"];
    //     x._ID = customer["_ID"];
    //     for(let i of x.__Orders)
    //         Order.readOrder(i,x);
    // }
}
