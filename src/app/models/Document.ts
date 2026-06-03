export class Document
{
Document_Id:number;
Student_Id:number;
Document_Name:string;
Files:string;
Document_File_Name:string;
Description:string;
New_Entry:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

