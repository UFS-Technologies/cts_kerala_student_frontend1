import {Fees_Dates} from './Fees_Dates'
export class Student_Fees_Installment
{
Student_Fees_Installment_Id:number;
Student_Id:number;
Course_Id:number;
Fees_Type_Id:number;
Fees_Type_Name:string;
Instalment_Date:Date;
Amount:number;
Status:number;

No_Of_Instalment:number;
Instalment_Period:number;
Fees_Dates:Fees_Dates[];
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

