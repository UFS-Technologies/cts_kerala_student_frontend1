import * as internal from "events";

export class CandidatePublic
{

Candidate_Id:number;
Candidate_Name:string;
Mobile:string;
Email:string;
Password:string;
// User_Id:number;


constructor(values: Object = {})  
{
Object.assign(this, values) 
}
}

