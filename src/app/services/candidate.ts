import { Component, OnInit, Input, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
@Injectable({
    providedIn: 'root'
})
export class CandidateService {
    constructor(private http: HttpClient) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    } 

    Save_Candidate_Public(Candidate_)
    {
    return this.http.post(environment.BasePath +'Public_Data/Save_Candidate_Public/',Candidate_);
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
    private extractData(res: Response)  
    {
        let body = res;
        return body || {};
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

         Submit_Contact_Form(Contact_Data) {
             return this.http.post(environment.BasePath + 'Public_Data/Submit_Contact_Form/', Contact_Data);
         }
         }
         

