export class Course_Fees
{
Course_Fees_Id:number;
Course_Id:number;
Fees_Type_Id:number;
Amount:number;
    Fees_Type_Name:string;
No_Of_Instalment:string;
Instalment_Period:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

