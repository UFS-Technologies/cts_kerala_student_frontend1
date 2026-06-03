import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Candidate } from '../models/Candidate.js';
@Injectable({
providedIn: 'root'
})
export class Candidate_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
// Save_Candidate(Candidate_)
// {
// return this.http.post(environment.BasePath +'Candidate/Save_Candidate/',Candidate_);
// }
private extractData(res: Response)
{
let body = res;
return body || { };
}
Public_Save_Candidate_Front(Candidate_:Candidate, Photo: File[],Resume: File[]) {
        const postData = new FormData();
        
     
            postData.append("Candidate_Id", Candidate_.Candidate_Id.toString());
            postData.append("Candidate_Name", Candidate_.Candidate_Name);
            postData.append("Address1",Candidate_.Address1);
            postData.append("Address2", Candidate_.Address2);
            postData.append("Address3",Candidate_.Address3);
            postData.append("Address4", Candidate_.Address4);
            postData.append("Pincode",Candidate_.Pincode);
            postData.append("Phone", Candidate_.Phone);
            postData.append("Mobile", Candidate_.Mobile);
            postData.append("Whatsapp", Candidate_.Whatsapp);
            postData.append("DOB", Candidate_.DOB.toString());
            postData.append("Gender",Candidate_.Gender.toString());
            postData.append("Email", Candidate_.Email);
            postData.append("Alternative_Email", Candidate_.Alternative_Email);
            postData.append("Passport_No", Candidate_.Passport_No);
            // postData.append("Passport_Expiry", Candidate_.Passport_Expiry);
            postData.append("User_Name", Candidate_.User_Name);
            postData.append("Password", Candidate_.Password);
            //  postData.append("Photo", Candidate_.Photo);
            // postData.append("User_Id", Candidate_.User_Id.toString());
            postData.append("Functional_Area_Id", Candidate_.Functional_Area_Id.toString());
            postData.append("Functional_Area_Name", Candidate_.Functional_Area_Name);
            postData.append("Specialization_Id", Candidate_.Specialization_Id.toString());
            postData.append("Specialization_Name", Candidate_.Specialization_Name);
            postData.append("Experience_Id", Candidate_.Experience_Id.toString());
            postData.append("Experience_Name", Candidate_.Experience_Name);
            postData.append("Qualification_Id", Candidate_.Qualification_Id.toString());
            postData.append("Qualification_Name",Candidate_.Qualification_Name);
            // postData.append("Resume", Candidate_.Resume);
            postData.append("Postlookingfor", Candidate_.Postlookingfor);
            
      

        var i = 0;
        if (Photo != undefined) {

            for (const img of Photo) {
                postData.append("myFile", img);
                postData.append("Photo", i.toString());
                i = i + 1;
            }
        }
        if (Resume != undefined) {

            for (const img of Resume) {
                postData.append("myFile", img);
                postData.append("Resume", i.toString());
                i = i + 1;
            }
        }
     
        
  return this.http.post(environment.BasePath + 'Candidate/Public_Save_Candidate_Front', postData);

}
Search_Candidate(Search_FromDate, Search_ToDate,  Search_Name, By_User_, Status_Id_, Look_In_Date, 
    Page_Index1_, Page_Index2_, Login_User_Id_, RowCount_, RowCount2_,Register_Value): Observable<any> 
{   
    var Search_Data = {
    'From_Date_': Search_FromDate, 'To_Date_': Search_ToDate, 'SearchbyName_': Search_Name,'By_User_': By_User_, 'Status_Id_': Status_Id_,
     'Is_Date_Check_': Look_In_Date,'Page_Index1_': Page_Index1_, 'Page_Index2_': Page_Index2_, 'Login_User_Id_': Login_User_Id_,
      'RowCount': RowCount_, 'RowCount2': RowCount2_,'Register_Value':Register_Value
    }
    return this.http.get(environment.BasePath + 'Candidate/Search_Candidate/', { params: Search_Data });
}
Delete_Candidate(Candidate_Id)
{
 return this.http.get(environment.BasePath +'Candidate/Delete_Candidate/'+Candidate_Id);
}
Get_Candidate(Candidate_Id)
{
 return this.http.get(environment.BasePath +'Candidate/Get_Candidate/'+Candidate_Id);
}
Search_Status_Typeahead(Status_Name,Group_Id): Observable<any>
{
    var Search_Data = { 'Status_Name': Status_Name, 'Group_Id': Group_Id }
    return this.http.get(environment.BasePath + 'Student/Search_Status_Typeahead/', { params: Search_Data });
}
Search_Users_Typeahead(Users_Name): Observable<any>
{
    var Search_Data = { 'Users_Name': Users_Name }
    return this.http.get(environment.BasePath + 'Student/Search_Users_Typeahead/', { params: Search_Data });
}
Load_Gender(): Observable<any>
{
    return this.http.get(environment.BasePath + 'Student/Load_Gender/');
}
Load_Candidate_Search_Dropdowns(Group_Id)
{
    return this.http.get(environment.BasePath + 'Student/Load_Student_Search_Dropdowns/' + Group_Id);
}
// Load_Candidate_Dropdowns()
// {
//     return this.http.get(environment.BasePath + 'Candidate/Load_Candidate_Dropdowns/' );
// }
Load_Candidate_Dropdowns()
{
    return this.http.get(environment.BasePath + 'Public_Data/Load_Candidate_Dropdowns/' );
}
Get_Last_Followup(Users_Id)
{
    return this.http.get(environment.BasePath + 'Candidate/Get_Last_Candidate_FollowUp/' + Users_Id);
}
Get_FollowUp_Details(Candidate_Id)
{
    return this.http.get(environment.BasePath + 'Candidate/Get_Candidate_FollowUp_Details/' + Candidate_Id);
}
Followup_History(Candidate_Id)
{
    return this.http.get(environment.BasePath + 'Candidate/Get_Candidate_FollowUp_History/' + Candidate_Id);
}
Register_Candidate(Candidate_Id,User_Id)
{
    return this.http.get(environment.BasePath + 'Candidate/Register_Candidate/' + Candidate_Id+ '/' +User_Id);
}
Remove_Registration(Candidate_Id)
{
    return this.http.get(environment.BasePath + 'Candidate/Remove_Registration_Candidate/' + Candidate_Id);
}

Save_Candidate_Public(Candidate_)
    {
        
    return this.http.post(environment.BasePath +'Public_Data/Save_Candidate_Public/',Candidate_);
    }
 Save_Candidate_JobApply_Public(Candidate_Id_,Job_Posting_Id_)
    {
        var JobApply_ = {
            'Candidate_Id_': Candidate_Id_, 'Job_Posting_Id_': Job_Posting_Id_
        }
    return this.http.post(environment.BasePath +'Candidate/Save_Candidate_JobApply_Public/' ,JobApply_);
    }
    Candidate_JobApply_Public_Check(Candidate_Id_,Job_Posting_Id_)
    {
        var JobApply_ = {
            'Candidate_Id_': Candidate_Id_, 'Job_Posting_Id_': Job_Posting_Id_
        }
    return this.http.post(environment.BasePath +'Candidate/Candidate_JobApply_Public_Check/' ,JobApply_);
    }
    Get_Candidate_Details(Candidate_Id)
    {
        
        return this.http.get(environment.BasePath + 'Candidate/Get_Candidate_Details/' + Candidate_Id);
    }
    Get_Candidate_Job_Apply(Candidate_Id)
    {
        
        return this.http.get(environment.BasePath + 'Candidate/Get_Candidate_Job_Apply/' + Candidate_Id);
    }
    Public_Search_Job(job_title,qualification_id, experience_id,functional_area_id, specialization_id,Page_Start_,Page_End_,Page_Length_): Observable<any> {

        try {
            if (job_title !== undefined) {
                if (job_title.job_title!== undefined) {
                    job_title = job_title.job_title
                    
                }
            }
        }
        catch (error) {
            console.error('Here is the error message', error);
        }
        
        var Search_Data = {
            'Job_Title_': job_title, 'Qualification_': qualification_id, 'Experience_': experience_id, 'Functional_Area_': functional_area_id,
            'Specialization_': specialization_id, 'Page_Start_':Page_Start_,'Page_End_':Page_End_,'Page_Length_':Page_Length_
        }
        return this.http.get(environment.BasePath + 'Public_Data/Public_Search_Job/', { params: Search_Data });
    }

    Save_Delivery(Delivery_) 
    {
        return this.http.post(environment.BasePath + 'Delivery/Save_Delivery/', Delivery_).toPromise();
    }
    Update_Student(Student_) 
    {
        return this.http.post(environment.BasePath + 'Student/Update_Student/', Student_);
    }
    Update_Student_Public(Student_) {
        return this.http.post(environment.BasePath + 'Public_Data/Update_Student_Public/', Student_);
    }
    Save_Student_Course(Student_Course_Apply_) 
    {
        return this.http.post(environment.BasePath + 'Public_Data/Save_Student_Course/', Student_Course_Apply_);
    }
    Update_Student_Course_Apply(Student_Course_Apply_) 
    {
        return this.http.post(environment.BasePath + 'Public_Data/Update_Student_Course_Apply/', Student_Course_Apply_);
    }
    
    Search_Delivery(Delivery_Name): Observable<any>
    {
        var Search_Data = { 'Delivery_Name': Delivery_Name }
        return this.http.get(environment.BasePath + 'Delivery/Search_Delivery/', { params: Search_Data });
    }
    Public_Search_Course(Level_Detail_Id,Country_Id,Intake_Id,Course_Name,Branch_Search,Duration_Search,Ielts_,Page_Start,Page_End,Page_Length):Observable<any>
    {
        try 
        {
            if(Course_Name!==undefined)
            {
                if(Course_Name.Course_Name!==undefined)
                {
                    Course_Name=Course_Name.Course_Name
                }
            }
        }
        catch (error) 
        {
            console.error('Here is the error message', error);
        }

        
    var Search_Data={'Level_Detail_Id':Level_Detail_Id,'Country_Id':Country_Id,'Intake_Id':Intake_Id,'Course_Name':Course_Name,'Branch_Search':Branch_Search,
    'Duration_Search':Duration_Search,'Ielts_':Ielts_,'Page_Start':Page_Start,'Page_End':Page_End,'Page_Length':Page_Length}
    return this.http.get(environment.BasePath +'Public_Data/Public_Search_Course/',{params:Search_Data});
    }
    Get_More_Information(Course_Id):Observable<any>
    {
        return this.http.get(environment.BasePath + 'Public_Data/Get_More_Information/' + Course_Id);
    }
    Delete_Delivery(Delivery_Id)
    {
        return this.http.get(environment.BasePath + 'Delivery/Delete_Delivery/' + Delivery_Id);
    }
    Get_Student_Details(Student_Id)
    {
        
        return this.http.get(environment.BasePath + 'Student/Get_Student_Details/' + Student_Id);
    }
    Get_Student_Course_Apply(Student_Id)
    {
        
        return this.http.get(environment.BasePath + 'Student/Get_Student_Course_Apply/' + Student_Id);
    }
    Get_Student_Course_Selection(Student_Course_Apply_Id)
    {
        return this.http.get(environment.BasePath + 'Student/Get_Student_Course_Selection/' + Student_Course_Apply_Id);
    }
    Get_site_Pageload() 
    {
        return this.http.get(environment.BasePath + 'Public_Data/Get_site_Pageload/').toPromise();
    }
    Get_Message_Details(Student_Id)
    {
        return this.http.get(environment.BasePath + 'Student/Get_Message_Details/' + Student_Id);
    }

    Get_Student_Document(Student_Id)
    {
        
        return this.http.get(environment.BasePath + 'Student_Document/Get_Student_Document/' + Student_Id);
    }

 

    Search_Document(Document_Name):Observable<any>
    {
        
    var Search_Data={'Document_Name':Document_Name}
     return this.http.get(environment.BasePath +'Document/Search_Document/',{params:Search_Data});}




    Public_Search_Course_Typeahead(Level_Detail_Id,Country_Id,Intake_Id,Course_Name,Branch_Search,Duration_Search,Ielts_,Page_Start,Page_End,Page_Length): Observable<any> {
        var Search_Data={'Level_Detail_Id':Level_Detail_Id,'Country_Id':Country_Id,'Intake_Id':Intake_Id,'Course_Name':Course_Name,'Branch_Search':Branch_Search,
                         'Duration_Search':Duration_Search,'Ielts_':Ielts_,'Page_Start':Page_Start,'Page_End':Page_End,'Page_Length':Page_Length}
        return this.http.get(environment.BasePath +'Public_Data/Public_Search_Course_Typeahead/',{params:Search_Data});
    }


    Forgot_Password_Student(StudentEmail_Forgot){
        var data ={'Email':StudentEmail_Forgot}
        return this.http.post(environment.BasePath +'Public_Data/Forgot_Password_Student/',data);
    }



    Forgot_Password_Agent(AgentEmail_Forgot){
        var data ={'Email':AgentEmail_Forgot}
        return this.http.post(environment.BasePath +'Public_Data/Forgot_Password_Agent/',data);
    }
    Forgot_Password_Candidate(CandidateEmail_Forgot){
        var data ={'Email':CandidateEmail_Forgot}
        return this.http.post(environment.BasePath +'Public_Data/Forgot_Password_Candidate/',data);
    }


        Save_Student_Document(Document_Id,Student_Id, image: File[]) {
            
            const postData = new FormData();
            postData.append("Document_Id", Document_Id.toString());
            postData.append("Student_Id", Student_Id.toString());
          
            var tm = '';
             
            
            if (image != undefined) {
                for (const img of image) {
                    postData.append("myFile", img);
                }
            }
            
            return this.http.post(environment.BasePath + 'Student/Save_Student_Document', postData);
        }

        Search_Student_Status(Student_Status_Id):Observable<any>
        {
        var Search_Data={'Student_Status_Name':Student_Status_Id}
         return this.http.get(environment.BasePath +'Student_Status/Search_Student_Status/',{params:Search_Data});}



        Get_Course_Load_Data():Observable<any>
            {
            return this.http.get(environment.BasePath +'Internship/Get_Course_Load_Data');
            }


        Search_Student_Agent(From_Date,To_Date,look_In_Date_Value,Search_Name,Phone_Number_,Agent_Id,Student_Status_Id_,Pointer_Start_,Pointer_Stop_,Page_Length_):Observable<any>
        {
           
            var Search_Data = { 'From_Date_': From_Date, 'To_Date_': To_Date, 'Is_Date_Check_': look_In_Date_Value, 'Student_Name_': Search_Name,'Phone_Number_':Phone_Number_, 'Agent_Id_':Agent_Id,'Student_Status_Id_':Student_Status_Id_,'Pointer_Start_':Pointer_Start_,'Pointer_Stop_':Pointer_Stop_,'Page_Length_':Page_Length_}
         return this.http.get(environment.BasePath +'Student/Search_Student_Agent/',{params:Search_Data});}
        
         Get_Student_Agent(Student_Id)
         {
         return this.http.get(environment.BasePath +'Student/Get_Student_Agent/'+Student_Id);
         }
}

