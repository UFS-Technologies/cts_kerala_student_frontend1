
import { Course_Apply } from './Course_Apply';
export class Student_Course_Apply
{
    Student_Course_Apply_Id:number;
    Student_Id:number;
    Status_Id:number;
    Paid_On :Date ;
    Entry_Date: Date; 
    Description1 :string
    Description2 :string
    Course_Apply:Course_Apply[];
    Total_Course:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}