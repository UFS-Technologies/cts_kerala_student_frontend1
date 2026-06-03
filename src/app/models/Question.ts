export class Question
{
Question_Id:number;
Question_Name:string;
Option_1:boolean;
Option_2:boolean;
Option_3:boolean;
Option_4:boolean;
Correct_Answer:string;
Subject_Id:number;
Subject_Name:string;
Course_Id:number;
Course_Name:string;
Semester_Id:number;
Semester_Name:string;
Is_Correct:boolean;
Question_Answer:string;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

