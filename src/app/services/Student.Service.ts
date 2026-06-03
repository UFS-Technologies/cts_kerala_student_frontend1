import { Component, OnInit,Input,Injectable } from '@angular/core';
import { environment } from '../../environments/environment.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Student } from '../models/Student.js';

@Injectable({
providedIn: 'root'
})
export class Student_Service {
constructor(private http: HttpClient)
{
const httpOptions = {
headers: new HttpHeaders({
'Content-Type':  'application/json'
})
};
}AnimationKeyframesSequenceMetadata
// Save_Student(Student_)
// {
// return this.http.post(environment.BasePath +'Student/Save_Student/',Student_);
// }
private extractData(res: Response)
{
let body = res;
return body || { };
}
Save_Student_front(Student_:Student, photo: File[],Aadhaar: File[], Document_File_Array: File[],
        Document_Array: any[],Document_Description :string,ImageFile:any[],Display_File_Name_:string) {
       
        const postData = new FormData();
            postData.append("Student_Id", Student_.Student_Id.toString());
            postData.append("Student_Name", Student_.Student_Name);
            postData.append("Address1", Student_.Address1);
            postData.append("Address2", Student_.Address2);
            postData.append("Address3", Student_.Address3);
            postData.append("Address4", Student_.Address4);
            postData.append("Pincode", Student_.Pincode);
            postData.append("Phone", Student_.Phone);
            postData.append("Mobile", Student_.Mobile);
            postData.append("Whatsapp", Student_.Whatsapp);
            postData.append("DOB", Student_.DOB.toString());
            postData.append("Gender", Student_.Gender.toString());
            postData.append("Email", Student_.Email);
            postData.append("Alternative_Email", Student_.Alternative_Email);
            // postData.append("Passport_No", Student_.Student.Passport_No);
            // postData.append("Passport_Expiry", Student_.Student.Passport_Expiry);
            postData.append("User_Name", Student_.User_Name);
            postData.append("Password", Student_.Password);
            // postData.append("Photo", Student_.Photo);
            // postData.append("Aadhaar", Student_.Aadhaar);
            // postData.append("User._Id", Student_.User_Id.toString());
            postData.append("Registration_No",Student_.Registration_No);
            postData.append("Role_No", Student_.Role_No);
            postData.append("Course_Name", Student_.Course_Name);
            
        var i = 0;
        if (photo != undefined) {
            
            for (let img of photo) 
            {
                postData.append("myFile",img );
                 postData.append("photo", i.toString());
                i = i + 1;
             }
        }
        
        if (Aadhaar != undefined) 
        {
            
            for (let img of Aadhaar) 
            {
                postData.append("myFile",img );
                 postData.append("Aadhaar", i.toString());
                i = i + 1;
             }
        }
        postData.append("Document_File_Array", i.toString());
        
        if (Document_File_Array != undefined) {

            var j=0
            for (const img of Document_File_Array)
             {
                if(Document_Array[j].New_Entry==1)
                {
                postData.append("myFile", img);
                }
                j++;
                i = i + 1;
            }
        }
        if (ImageFile != undefined) 
        {
            for (const img of ImageFile)
            {
             
               postData.append("myFile", img);
               Document_Array.push({'New_Entry':1,'Description':Document_Description
               ,'Document_File_Name':Display_File_Name_
            })
               j++;
               i = i + 1;
           }

        }
        
        if (Document_Array != undefined) 
        {
            var Document_Temp=""
            j=0;
            for (var i = 0; i < Document_Array.length; i++) 
            { 
                if(Document_Array[i].New_Entry==1)
                {
                Document_Temp="Document_Array" + j.toString()
                postData.append(Document_Temp, Document_Array[i].Document_Name);
                Document_Temp="Document_File_Name" + j.toString()
                postData.append(Document_Temp, Document_Array[i].Document_File_Name);
                j++;
                }
               
            }
        }
         
  return this.http.post(environment.BasePath + 'Student/Save_Student_front', postData);
}
Search_Student(Search_FromDate, Search_ToDate,  Search_Name, By_User_, Status_Id_, Look_In_Date, 
    Page_Index1_, Page_Index2_, Login_User_Id_, RowCount_, RowCount2_,Register_Value): Observable<any> 
{   
    var Search_Data = {
    'From_Date_': Search_FromDate, 'To_Date_': Search_ToDate, 'SearchbyName_': Search_Name,'By_User_': By_User_, 'Status_Id_': Status_Id_,
     'Is_Date_Check_': Look_In_Date,'Page_Index1_': Page_Index1_, 'Page_Index2_': Page_Index2_, 'Login_User_Id_': Login_User_Id_,
      'RowCount': RowCount_, 'RowCount2': RowCount2_,'Register_Value':Register_Value
    }
    return this.http.get(environment.BasePath + 'Student/Search_Student/', { params: Search_Data });
}
Delete_Student(Student_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Student/'+Student_Id);
}
Get_Fees_Details(Student_Id_,Client_Account_Id_)
{
    
        return this.http.get(environment.BasePath + 'Student/Get_Fees_Details/' + Student_Id_+'/'+Client_Account_Id_);
 }
 Get_Mark_Details_Student(Part_Id,Student_Id)
 {
     return this.http.get(environment.BasePath + 'Student/Get_Mark_Details_Student/' + Part_Id +'/'+Student_Id);
 }
Get_Student(Student_Id)
{
 return this.http.get(environment.BasePath +'Student/Get_Student/'+Student_Id);
}
Save_Activity_Details(ActivityDetails_)
{
return this.http.post(environment.BasePath +'Student/Save_Activity_Details/',ActivityDetails_);
}

Public_Search_Student_Details(Registration_No): Observable<any> {       
    var Search_Data = {
        'Registration_No_': Registration_No
    }
    return this.http.get(environment.BasePath + 'Public_Data/Public_Search_Student_Details/',{params:Search_Data});
}
Get_ActivitiesDetails(Activities_Details_Id)
{
 return this.http.get(environment.BasePath +'Student/Get_Student/'+Activities_Details_Id);
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
Load_Student_Search_Dropdowns(Group_Id)
{
    return this.http.get(environment.BasePath + 'Student/Load_Student_Search_Dropdowns/' + Group_Id);
}
Get_Last_Followup(Users_Id)
{
    return this.http.get(environment.BasePath + 'Student/Get_Last_Followup/' + Users_Id);
}
Get_FollowUp_Details(Student_Id)
{
    return this.http.get(environment.BasePath + 'Student/Get_FollowUp_Details/' + Student_Id);
}
Followup_History(Student_Id)
{
    return this.http.get(environment.BasePath + 'Student/Get_FollowUp_History/' + Student_Id);
}
Register_Student(Student_Id,User_Id)
{
    return this.http.get(environment.BasePath + 'Student/Register_Student/' + Student_Id+ '/' +User_Id);
}
Remove_Registration(Student_Id)
{
    return this.http.get(environment.BasePath + 'Student/Remove_Registration/' + Student_Id);
}
Search_Course_Typeahead(Course_Name): Observable<any>
{
    var Search_Data = { 'Course_Name': Course_Name }
    return this.http.get(environment.BasePath + 'Student/Search_Course_Typeahead/', { params: Search_Data });
}
Get_Course_Student(Course_Id)
{
    return this.http.get(environment.BasePath + 'Student/Get_Course_Student/' + Course_Id);
}
Get_Student_Course(Student_Id)
{
    return this.http.get(environment.BasePath + 'Student/Get_Student_Course/' + Student_Id);
}
Save_Student_Course(Student_Course_)
{
    return this.http.post(environment.BasePath +'Student/Save_Student_Course/',Student_Course_);
}
Submit_Exam(Exam_Submitted_)
{
    console.log(Exam_Submitted_);
     return this.http.post(environment.BasePath +'Student/Submit_Exam/',Exam_Submitted_);
}
Search_Subject_Course_Typeahead(Subject_Name,Course_Id): Observable<any>
{
    var Search_Data = { 'Subject_Name': Subject_Name, 'Course_Id': Course_Id }
    return this.http.get(environment.BasePath + 'Student/Search_Subject_Course_Typeahead/', { params: Search_Data });
}
Load_Exam_Status()
{
    return this.http.get(environment.BasePath + 'Student/Load_Exam_Status/');
}
Save_Mark_List_Master(Mark_List_Master_)
{
    return this.http.post(environment.BasePath +'Student/Save_Mark_List_Master/',Mark_List_Master_);
}
Get_Student_Mark_List(Student_Id)
{
    return this.http.get(environment.BasePath + 'Student/Get_Student_Mark_List/' + Student_Id);
}
Load_Mode(): Observable<any> 
{
    return this.http.get(environment.BasePath + 'Agent/Load_Mode/');
}
Accounts_Typeahead(Account_Group_Id_,Client_Accounts_Name_): Observable<any> 
{
    var Search_Data = { 'Account_Group_Id_': Account_Group_Id_, 'Client_Accounts_Name_': Client_Accounts_Name_ }
    return this.http.get(environment.BasePath + 'Agent/Accounts_Typeahead/', { params: Search_Data });
}
Save_Student_Receipt_Voucher(Receipt_Voucher_)
{
   return this.http.post(environment.BasePath +'Student/Save_Student_Receipt_Voucher/',Receipt_Voucher_);
}
Get_Student_Receipt_History(Student_Id)
{
       return this.http.get(environment.BasePath + 'Student/Get_Student_Receipt_History/' + Student_Id);
}
Delete_Receipt_Voucher(Receipt_Voucher_Id)
{
 return this.http.get(environment.BasePath +'Student/Delete_Student_Receipt_Voucher/'+Receipt_Voucher_Id);
}
Save_Student_Public(Student_) {
    return this.http.post(environment.BasePath + 'Public_Data/Save_Student_Public/', Student_);
}
Get_Student_Details(Student_Id)
    {
        
        return this.http.get(environment.BasePath + 'Student/Get_Student_Details/' + Student_Id);
    }
Get_Student_Course_Apply(Student_Id)
{
    
    return this.http.get(environment.BasePath + 'Student/Get_Student_Course_Apply/' + Student_Id);
}
Start_Exam(Subject_Id,Part_Id,Subject_Name,Course_Id,Student_Id)
{
    return this.http.get(environment.BasePath + 'Student/Start_Exam/' + Subject_Id+'/'+Part_Id+'/'+Subject_Name+'/'+Course_Id+'/'+Student_Id);
}
Load_Activity_Dropdowns(University_Id_)
{
    return this.http.get(environment.BasePath + 'Student/Load_Activity_Dropdowns/'+ University_Id_);
}
Get_Activity_Details(Student_Id)
{ 
    
    return this.http.get(environment.BasePath + 'Student/Get_Activity_Details/' + Student_Id);
}
Load_Student_Part(Student_Id_)
{    
    return this.http.get(environment.BasePath +'Student/Load_Student_Part/'+Student_Id_);
}
}

