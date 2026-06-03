import { Student_Course_Subject } from './Student_Course_Subject'
import { Student_Fees_Installment_Save } from './Student_Fees_Installment_Save'
export class Student_Course
{
Student_Course_Id:number;
Student_Id:number;
Entry_Date:Date;
Course_Name_Details:string;
Course_Id:number;
Course_Name:string;
Start_Date:Date;
End_Date:Date;
Join_Date:Date;
By_User_Id:number;
Status:number;
Course_Type_Name:string;
Agent_Amount:number
Course_Type_Id:number;
Total_Fees:number;

Student_Course_Subject:Student_Course_Subject[];
Student_Fees_Installment_Save:Student_Fees_Installment_Save[];
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

