export class Activity
{
    Activity_Id:number;
    Activity_Name:string;
    Amount:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

