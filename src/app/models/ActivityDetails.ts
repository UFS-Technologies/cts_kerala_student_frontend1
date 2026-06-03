export class ActivityDetails
{
Activity_Details_Id:number;
Activity_Id:number; 
Activity_Name:string;
Entry_Date:Date;
Student_Id :number;
Status:number;
Descripition:string;
Amount:number; 
Additional_Remark:string;
NextFollowup_Date:Date;
Payment_Status:number;
  
constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

