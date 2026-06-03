export class Job_Posting
{
Job_Posting_Id:number;
Job_Code:string;
Job_Title:string;
Descritpion:string;
Skills:string;
No_Of_Vaccancy:string;
Experience:string;
Job_Location:string;
Qualification:string;
Functional_Area:string;
Specialization:string;
Salary:string;
Last_Date:string;
Company_Name:string;
Address:string;
Contact_Name:string;
Contact_No:string;
Email:string;
Address1:string;
Address2:string;
Address3:string;
Address4:string;
Pincode:string;
Status:string;
Logo:string;
User_Id:number;
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

