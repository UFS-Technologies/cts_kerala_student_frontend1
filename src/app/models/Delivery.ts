export class Delivery
{
Delivery_Id:number;
Entry_Date:string;
Entry_Time:string;
Client_Accounts_Id:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

