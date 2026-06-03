import { Question } from "./Question";

export class Exam_Submission
{
Exam_Master_Id:number;
Student_Id:number;
Mark_Obtained:number;
Question_Data:Question[];
Status:number=1;
Student_Course_Part_Id:number;
Course_Subject_Id:number;
Part_Name:string;
Month_Id:number;
Month_name:string;
Year_Id:number;
Year_name:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

