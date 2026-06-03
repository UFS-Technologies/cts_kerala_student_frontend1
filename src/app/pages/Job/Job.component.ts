import { Component, EventEmitter, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Country } from '../../models/Country';
import { Subject } from '../../models/Subject';
import { Duration } from '../../models/Duration';
import { Intake } from '../../models/Intake';
import { Ielts } from '../../models/Ielts';
import { Course } from '../../models/Course';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course_Apply } from '../../models/Course_Apply';
import { Course_Selection } from '../../models/Course_Selection';
import { Level_Detail } from '../../models/Level_Detail';
import { UserData } from '../../services/user-data';
import { Student_Course_Apply } from '../../models/Student_Course_Apply';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Student } from '../../models/Student';
import { Exam_Submission} from '../../models/Exam_Submission';

import {CandidatePublic} from '../../models/CandidatePublic';
// import { CandidateService } from '../../services/candidate';
import {Candidate_Service} from '../../services/Candidate.Service';
import { Candidate } from '../../models/Candidate';
import { Candidate_Followup } from '../../models/Candidate_Followup';
import { Status } from '../../models/Status';
import { Users } from '../../models/Users';
import { Specialization } from '../../models/Specialization';
import { Qualification } from '../../models/Qualification';
import { Experience } from '../../models/Experience';
import { Functionl_Area } from '../../models/Functionl_Area';
import { Job_Posting} from '../../models/Job_Posting';
import { Student_Service } from '../../services/Student.Service';
// import { MatDialog } from '@angular/material';
// import * as _moment from 'moment';
// import { default as _rollupMoment } from 'moment';


// export const MY_FORMATS = {
//     parse: {
//         dateInput: 'DD/MM/YYYY',
//     },
//     display: {
//         dateInput: 'DD/MM/YYYY',
//         monthYearLabel: 'MMM YYYY',
//         dateA11yLabel: 'DD/MM/YYYY',
//         monthYearA11yLabel: 'MMMM YYYY',
//     },
// };
// const moment = _rollupMoment || _moment;

@Component({
selector: 'app-job',
templateUrl: './job.component.html',
styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

// @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
Candidate_Data:CandidatePublic[]
Candidate_:CandidatePublic= new CandidatePublic();
Candidate_Name_Search:string;
Entry_View:boolean=true;
EditIndex: number;
Total_Entries: number;
color = 'primary';
mode = 'indeterminate';
value = 50;
issLoading: boolean;
Permissions: any;
Candidate_Edit:boolean;
Candidate_Save:boolean;
Candidate_Delete:boolean;
myInnerHeight: number;

//  Photo: Candidate = new Candidate();
ImageFile: any;
file: File;
Candidatefile:string;

element: HTMLElement;

Country_: Country = new Country();
Country_Temp: Country = new Country();
Country_Data: Country[]
isLoading:Boolean;
Subject: Subject = new Subject();
Subject_Data: Subject[]

Intake_: Intake = new Intake();
Intake_Temp: Intake = new Intake();
Intake_Data: Intake[]
StudentEmail_Forgot:string;
AgentEmail_Forgot:string;
CandidateEmail_Forgot:string;

login_View:boolean=true;
forgot_View:boolean=false;
new_account_View:boolean=false;

login_View1:boolean=true;

Duration: Duration = new Duration();
Duration_Data: Duration[]

Ielts_: Ielts = new Ielts();
Ielts_Temp: Ielts = new Ielts();
Ielts_Data: Ielts[]

Level_Detail_: Level_Detail = new Level_Detail();
Level_Detail_Temp: Level_Detail = new Level_Detail();
Level_Detail_Data: Level_Detail[]

Student_Data:Student[]; 
Student_Data_Temp:Student=new Student
Student_:Student= new Student;

Course_Data:Course[];
Search_Data:Job_Posting[];
Course_Intake_Data:any;
Student_Id_Login:number;
Agent_Id_Login:number=0;
Candidate_Id_Login:number;
Default_Agent_Id:number=1;
Course_Name:any;
Branch_Search:string;
Duration_Search:string;

Page_Start:number=1;
Page_End:number=0;
// Page_Length:number=0;
Total_Rows: number = 0;
// page_Length:number=10;
Page_Length_:number=4;

Course_Selection_:Course_Selection=new Course_Selection;
Course_Selection_Data:Course_Selection[]

nextflag: number = -1;

Student_Number:number=1;
Course_Apply_Data:Course_Apply[];
Course_Apply_Data_Temp:Course_Apply=new Course_Apply
Student_Course_Apply_:Student_Course_Apply= new Student_Course_Apply;

slideConfig = { slidesToShow: 4, slidesToScroll: 4, autoplay: !0, autoplaySpeed: 2e3, };
slideConfig1 = { slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 2e3, };


Login_Id:string;

Email:string;
Password:String

Agent_Email:string;
Agent_Password:string;
Messege:string;
Messege_Candidate:string;

Candidate_Email:string;
Candidate_Password:string;
Messeges:string;
Candidate_Edit_e:number;
// issLoading: boolean;

rstring:any
Country_string: any
Course_String: any

// Specialization_:Specialization=new Specialization;
Search_Specialization: Specialization = new Specialization();
Specialization_Temp:Specialization=new Specialization;
Specialization_Data:Specialization[];

// Experience_:Experience=new Experience;
Search_Experience: Experience = new Experience();
Experience_Temp:Experience=new Experience;
Experience_Data:Experience[];

// Functionl_Area_:Functionl_Area=new Functionl_Area;
Search_Functional_Area: Functionl_Area = new Functionl_Area();
Functionl_Area_Temp:Functionl_Area=new Functionl_Area;
Functionl_Area_Data:Functionl_Area[];

// Qualification_:Qualification=new Qualification;
Search_Qualification: Qualification = new Qualification();
Qualification_Temp:Qualification=new Qualification;
Qualification_Data:Qualification[];


Job_Title="";
Qualification="";
Experience="";
Functional_Area="";
Specialization="";



ngOnInit() {
AOS.init();
this.useEffect();

this.Candidate_Edit_e=+localStorage.getItem('Candidate_Id_Login')
this.Course_Selection_Data=[];
this.login_View1=true;

this.Login_Id=localStorage.getItem('Login_User');
let top = document.getElementById('Topdiv');
if (top !== null) {
top.scrollIntoView();
top = null;
}
// this._activatedRoute.queryParams.subscribe(data => console.log('queryParams', data['id']));
// this._activatedRoute.queryParams.subscribe(data => this.rstring = data);// this.rstring = data['id'] );

// if (this.rstring.Country!=undefined)
// {
// this.Country_string = this.rstring.Country
// this.Intake_ = this.rstring.Intake
// this.Course_Name ={Course_Name: this.rstring.Course}
// this.Subject_Data = this.rstring.Status
// this.Duration = this.rstring.Duration
// this.Ielts_ = this.rstring.Ielts
// this.Page_Start = this.rstring.Page_Start
// this.Page_End = this.rstring.Page_Endy
// this.Page_Length = this.rstring.Page_Length
// }
// this.Page_Length = 10;
//  this.Get_site_Pageload();
this. Page_Load();

}
constructor(public Student_Service_:Student_Service,public Candidate_Service_:Candidate_Service,public userService: UserData,private _activatedRoute: ActivatedRoute,private cookieService: CookieService, private router: Router ,public dialogBox: MatDialog) {

}
// async Get_site_Pageload() {
//   const response = await this.CandidateService.Get_site_Pageload();
//   ;
//   this.Country_Data = response[0];
//   this.Country_Temp.Country_Id = 0;
//   this.Country_Temp.Country_Name = "All";
//   this.Country_Data.unshift(this.Country_Temp);
//   this.Country_ = this.Country_Data[0];



//   this.Ielts_Data = response[1];
//   this.Ielts_Temp.Ielts_Id = 0;
//   this.Ielts_Temp.Ielts_Name = "All";
//   this.Ielts_Data.unshift(this.Ielts_Temp);
//   this.Ielts_ = this.Ielts_Data[0];

//   this.Intake_Data = response[5];
//   this.Intake_Temp.Intake_Id = 0;
//   this.Intake_Temp.Intake_Name = "All";
//   this.Intake_Data.unshift(this.Intake_Temp);
//   this.Intake_ = this.Intake_Data[0];

//   this.Level_Detail_Data = response[4];
//   this.Level_Detail_Temp.Level_Detail_Id = 0;
//   this.Level_Detail_Temp.Level_Detail_Name = "All";
//   this.Level_Detail_Data.unshift(this.Level_Detail_Temp);
//   this.Level_Detail_ = this.Level_Detail_Data[0];

//   this.Duration_Data = response[3];

//   this.Subject_Data = response[2];

//   if (this.rstring.Country != undefined) {
//   for (var i = 0; i < this.Country_Data.length; i++) {
//     if (this.rstring.Country == this.Country_Data[i].Country_Id) {
//       this.Country_ = this.Country_Data[i]
//       break;
//     }
//   }
//     for (var i = 0; i < this.Level_Detail_Data.length; i++) {
//       if (this.rstring.Level == this.Level_Detail_Data[i].Level_Detail_Id) {
//         this.Level_Detail_ = this.Level_Detail_Data[i]
//         break;
//       }
//     } 
//     for (var i = 0; i < this.Intake_Data.length; i++) {
//       if (this.rstring.Intake == this.Intake_Data[i].Intake_Id) {
//         this.Intake_ = this.Intake_Data[i]
//         break;
//       }
//     }
//     for (var i = 0; i < this.Ielts_Data.length; i++) {
//       if (this.rstring.Ielts == this.Ielts_Data[i].Ielts_Id) {
//         this.Ielts_ = this.Ielts_Data[i]
//         break;
//       }
//     }
//     var sujects_Array = this.rstring.Status.split(',');
//     for (var i = 0; i < this.Subject_Data.length; i++) {
//       for (var j = 0; j < sujects_Array.length; j++) {
//         if (sujects_Array[j] == this.Subject_Data[i].Subject_Id) {
//         this.Subject_Data[i].Selection=true
//         break;
//       }
//       }
//     }
//     var Duration_Array = this.rstring.Duration.split(',');
//     for (var i = 0; i < this.Duration_Data.length; i++) {
//       for (var j = 0; j < Duration_Array.length; j++) {
//         if (Duration_Array[j] == this.Duration_Data[i].Duration_Id) {
//           this.Duration_Data[i].Selection = true
//           break;
//         }
//       }
//     }

//     this.Public_Search_Course();
// }


// }
Page_Load()
{
this.Page_End = this.Page_Length_;
this.Load_Candidate_Dropdowns();
}

fakeClick()
{
this.element = document.getElementById('Candidate_Close') as HTMLElement;
this.element.click();
}


async login() {
  
  this.Messege=''
  if (this.Student_.Email==undefined||this.Student_.Email=="")
  {
    this.Messege='Enter Email'
    return
  }
  if (this.Student_.Password==undefined||this.Student_.Password=="")
  {
    this.Messege = 'Enter Password'
    return
  }
  var Login_Data={'Email':this.Student_.Email,'Password':this.Student_.Password}
const success = await this.userService.login(Login_Data);
  if (success) 
  {

   this.Student_Id_Login=+localStorage.getItem('Student_Id_Login');
  //  this.fireIsLoggedIn.emit(localStorage.getItem('User_Name_Login')); 
   document.getElementById('Student_Close').click();
   
    // if (this.Course_Selection_Data.length>0)
    // {
    //   this.Apply_Now_Save(this.Agent_Id_Login);
    // }
    // else
   this.router.navigateByUrl('Student');
  }
  else
  {
    this.Messege = 'Inavlid User Name/Password';
   // const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Inavlid User Name/Password', Type:"3"}});
  }
}

async Agent_login() {
this.Messege=''
if (this.Agent_Email == undefined || this.Agent_Email == "") {
this.Messege = 'Enter Email'
return
}
if (this.Agent_Password == undefined || this.Agent_Password == "") {
this.Messege = 'Enter Password'
return
}
var Login_Data={'Email':this.Agent_Email,'Password':this.Agent_Password}
const success = await this.userService.Agent_login(Login_Data);
if (success) 
{
this.Agent_Id_Login=+localStorage.getItem('Agent_Id_Login');
document.getElementById('Agent_Close').click();
this.router.navigateByUrl('Candidate');
}
else
{
this.Messege = 'Inavlid User Name/Password';
}
}


async Candidate_login() 
{
this.Messege=''
if (this.Candidate_Email == undefined || this.Candidate_Email == "") {
this.Messege = 'Enter Email'
return
}
if (this.Candidate_Password == undefined || this.Candidate_Password == "") {
this.Messege = 'Enter Password'
return
}
var Login_Data={'Email':this.Candidate_Email,'Password':this.Candidate_Password}

const success = await this.userService.Candidate_login(Login_Data);
if (success) 
{

this.Candidate_Id_Login=+localStorage.getItem('Candidate_Id_Login');
document.getElementById('Candidate_Close').click();
// this.router.navigateByUrl('Candidate');
this.router.navigateByUrl('Candidate');
// this.Messege = 'success';
}
else
{
this.Messege = 'Inavlid User Name/Password';
}
}
Login_Student()
{
  
  this.Close_Click();
  this.Messege='';
 
}
Close_Click_Student()
{
  this.login_View=true;
  this.new_account_View=false;
  this.forgot_View = false;
  this.Student_.User_Name='';
  this.Student_.Mobile='';
  this.Student_.Email='';
  this.Student_.Password='';
  this.Messege='';
  this.StudentEmail_Forgot='';
}
Close_Click()
{
this.login_View=true;
this.new_account_View=false;
this.forgot_View = false;
this.Candidate_.Candidate_Name='';
this.Candidate_.Email='';
this.Candidate_.Mobile='';
this.Candidate_.Password='';
this.Candidate_Password='';
this.Candidate_Email='';
this.Messege=''
}

async Forgetpass() {
  this.Messege=''
var Forget_Data={'Email':'vijayalakshmi@ufstechnologies.com'}
const success = await this.userService.Forgetpass(Forget_Data);
if (success) 
{

this.Login_Id=localStorage.getItem('Login_User');
}
else
{
// this.issLoading = false;
// const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Inavlid User Name/Password', Type:"3"}});
}
}

useEffect() {
let scrollRef = 0
window.addEventListener('scroll', () => {
// increase value up to 10, then refresh AOS
scrollRef <= 10 ? scrollRef++ : AOS.refresh()
});
}

onIeltsSelected(Ielts_selection:Ielts)
{

this.Public_Search_Course_Click();
}

Public_Search_Course_Click()
{
this.Page_Start=0
this.Page_End=this.Page_Length_
this. Public_Search_Course();
}

Update_Student_click()
{
if(this.Student_.Student_Name==undefined || this.Student_.Student_Name==null || this.Student_.Student_Name.toString()=="" )
{
this.Messege='Select Name'
return;
}

if(this.Student_.Email==undefined || this.Student_.Email==null  || this.Student_.Email.toString()=="")
{
this.Messege ='Select Email'
return;
}


if(this.Student_.Password==undefined || this.Student_.Password==null || this.Student_.Password.toString()=="")
{
this.Messege ='Select Password'
return;
}
else
// this.Student_.Agent_Id = this.Agent_Id_Login
this.Candidate_Service_.Update_Student_Public(this.Student_).subscribe(Save_status => {

if(Number(Save_status[0][0].Student_Id_)>0)
{

document.getElementById('Student_Close').click();
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Account Created, Please login and add courses', Type: "2" } });
// this.router.navigateByUrl('Candidate');

// this.Clr_Home();
// this.isLoading=false;
}
else{
  
this.isLoading=false;
this.Messege ='Error Occured'
}
},
Rows => { 
  
this.isLoading=false;
this.Messege = 'Error Occured'
});
}
Public_Search_Course()
{
var Level_Detail_Id=0,Country_Id=0,Intake_Id=0, Status_Selection='', Duration_Selection='',Ielts_Id=0;
if (this.Level_Detail_ != undefined && this.Level_Detail_!=null)
if (this.Level_Detail_.Level_Detail_Id != undefined && this.Level_Detail_.Level_Detail_Id != null)
Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

if (this.Country_ != undefined && this.Country_!=null)
if (this.Country_.Country_Id != undefined && this.Country_.Country_Id != null)
Country_Id = this.Country_.Country_Id; 

if (this.Intake_ != undefined && this.Intake_!=null)
if (this.Intake_.Intake_Id != undefined && this.Intake_.Intake_Id != null)
Intake_Id = this.Intake_.Intake_Id;

if (this.Ielts_ != undefined && this.Ielts_!=null)
if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
Ielts_Id = this.Ielts_.Ielts_Id;


// for (var i=0;i<this.Subject_Data.length;i++)
// {
// if(this.Subject_Data[i].Selection==true)
// Status_Selection=Status_Selection + this.Subject_Data[i].Subject_Id.toString() +",";
// }
if(Status_Selection.length>0)
Status_Selection=Status_Selection.substring(0,Status_Selection.length-1)

for (var i=0;i<this.Duration_Data.length;i++)
{
if(this.Duration_Data[i].Selection==true)
Duration_Selection=Duration_Selection + this.Duration_Data[i].Duration_Id.toString() +",";
}
if(Duration_Selection.length>0)
Duration_Selection=Duration_Selection.substring(0,Duration_Selection.length-1)
var course_Name_Temp=''
if(this.Course_Name!=undefined)
if(this.Course_Name.Course_Name !=undefined)
course_Name_Temp = this.Course_Name.Course_Name
else
course_Name_Temp = this.Course_Name
this.Candidate_Service_.Public_Search_Course(Level_Detail_Id, Country_Id, Intake_Id, course_Name_Temp,Status_Selection,Duration_Selection,Ielts_Id,this.Page_Start,this.Page_End,this.Page_Length_).subscribe(Rows => {

this.router.navigate(['Job'], { queryParams: { Level: Level_Detail_Id, Country: Country_Id, Intake: Intake_Id, Course: course_Name_Temp, Status: Status_Selection, Duration: Duration_Selection, Ielts: Ielts_Id, Page_Start: this.Page_Start, Page_End: this.Page_End, Page_Length: this.Page_Length_} })
this.Course_Data=Rows[0];
},
Rows => { 
});
}
// Get_More_Information(Course_Id,index)
// {
// this.Course_Data[index].More_Information= !this.Course_Data[index].More_Information;
// if(this.Course_Data[index].More_Information==true)
// {
// this.CandidateService.Get_More_Information(Course_Id).subscribe(Rows => {
// this.Course_Data[index].Application_Fees=Rows[0][0].Application_Fees;
// this.Course_Data[index].Level_Detail_Name=Rows[0][0].Level_Detail_Name;
// this.Course_Data[index].Duration_Name=Rows[0][0].Duration_Name;
// this.Course_Data[index].Subject_Name=Rows[0][0].Subject_Name;
// this.Course_Data[index].Details=Rows[0][0].Details;
// this.Course_Data[index].Ielts_Minimum_Score=Rows[0][0].Ielts_Minimum_Score;
// this.Course_Intake_Data=Rows[1]
// var Course_Intake_Temp=' ';
// for(var i=0;i<this.Course_Intake_Data.length;i++)
// {
// Course_Intake_Temp=Course_Intake_Temp+this.Course_Intake_Data[i].Intake_Name+',';  
// }
// if(i>0)
// Course_Intake_Temp=Course_Intake_Temp.substring(0,Course_Intake_Temp.length-1)

// this.Course_Data[index].Intake_Name=Course_Intake_Temp;
// },
// Rows => { 
//  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
// });
// }
// }
Addto_My_Selection(Course_Id,Course_Name)
{
var Is_Exist=false;

if(this.Course_Selection_Data.length<5)
{
for(var i=0;i<this.Course_Selection_Data.length;i++)
{
if (this.Course_Selection_Data[i].Course_Id==Course_Id)
Is_Exist=true;
}
if(Is_Exist==false)
{
this.Course_Selection_.Course_Id=Course_Id
this.Course_Selection_.Course_Name=Course_Name
this.Course_Selection_Data.push(Object.assign({}, this.Course_Selection_));
}
}
else{

}
}
Delete_Course_Selection(Course_Selection_,index)
{

// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Do you want to delete ?',Type:"true",Heading:'Confirm'}});
// dialogRef.afterClosed().subscribe(result =>
// {
// if(result=='Yes')
// {
this.Course_Selection_Data.splice(index, 1);
// }
//  });
}
// Change_Selection_Branch(i)
// {
// if(this.Subject_Data[i].Selection==false)
// {
// this.Subject_Data[i].Selection=true
// }
// else 
// this.Subject_Data[i].Selection=false
// }
Change_Duration_Branch(i)
{
if(this.Duration_Data[i].Selection==false)
{
this.Duration_Data[i].Selection=true
}
else 
this.Duration_Data[i].Selection=false
}
// Next_Click ()
// { 

// if(this.Course_Data!=undefined)
// if (this.Course_Data.length == this.Page_Length)
// {
// this.Page_Start = this.Page_Start + this.Page_Length;
// this.Page_End = this.Page_End+ this.Page_Length;
// this.nextflag = 1;   
// if (this.Course_Data.length > 0)
// {
// this.Public_Search_Course();
// }
// }
// }
// previous_Click  () 
// {

// if(this.Course_Data!=undefined)
// if (  this.Page_Start > 0 ) 
// { 
// this.Page_Start = this.Page_Start - this.Page_Length;
// this.Page_End = this.Page_End - this.Page_Length;
// this.Public_Search_Course();   
// }

// }
previous_Click()
{

if (this.Page_Start > 1) {
{
this.Page_Start = this.Page_Start - this.Page_Length_;
this.Page_End = this.Page_End - this.Page_Length_;
}
this.Total_Rows = this.Total_Rows - this.Search_Data.length - this.Page_Length_;
this.Public_Search_Job();
}
}
Next_Click()
{

if (this.Search_Data.length == this.Page_Length_)
{
this.Page_Start = this.Page_Start + this.Page_Length_;
this.Page_End = this.Page_End + this.Page_Length_;
if (this.Search_Data.length > 0)
{
this.Public_Search_Job();
}
}
}

Public_Search_Course_Typeahead()
{
this.isLoading=true;
var Level_Detail_Id=0,Country_Id=0,Intake_Id=0, Status_Selection='', Duration_Selection='',Ielts_Id=0;
if (this.Level_Detail_ != undefined && this.Level_Detail_!=null)
if (this.Level_Detail_.Level_Detail_Id != undefined && this.Level_Detail_.Level_Detail_Id != null)
Level_Detail_Id = this.Level_Detail_.Level_Detail_Id;

if (this.Country_ != undefined && this.Country_!=null)
if (this.Country_.Country_Id != undefined && this.Country_.Country_Id != null)
Country_Id = this.Country_.Country_Id; 

if (this.Intake_ != undefined && this.Intake_!=null)
if (this.Intake_.Intake_Id != undefined && this.Intake_.Intake_Id != null)
Intake_Id = this.Intake_.Intake_Id;

if (this.Ielts_ != undefined && this.Ielts_!=null)
if (this.Ielts_.Ielts_Id != undefined && this.Ielts_.Ielts_Id != null)
Ielts_Id = this.Ielts_.Ielts_Id;


// for (var i=0;i<this.Subject_Data.length;i++)
// {
// if(this.Subject_Data[i].Selection==true)
// Status_Selection=Status_Selection + this.Subject_Data[i].Subject_Id.toString() +",";
// }
if(Status_Selection.length>0)
Status_Selection=Status_Selection.substring(0,Status_Selection.length-1)

for (var i=0;i<this.Duration_Data.length;i++)
{
if(this.Duration_Data[i].Selection==true)
Duration_Selection=Duration_Selection + this.Duration_Data[i].Duration_Id.toString() +",";
}
if(Duration_Selection.length>0)
Duration_Selection=Duration_Selection.substring(0,Duration_Selection.length-1)

this.Candidate_Service_.Public_Search_Course_Typeahead(Level_Detail_Id,Country_Id,Intake_Id,this.Course_Name,Status_Selection,Duration_Selection,Ielts_Id,this.Page_Start,this.Page_End,this.Page_Length_).subscribe(Rows => {

this.isLoading=false;
this.Course_Data=Rows[0];
},
Rows => { 
});
}
display_Course(Course_e: Course) 
{
if (Course_e) { return Course_e.Course_Name; }
}
Forgot_Password_Student()
{
if(this.StudentEmail_Forgot==undefined || this.StudentEmail_Forgot==null || this.StudentEmail_Forgot.toString()=="" )
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please Enter Email',Type:"3"}});
return;
}
this.Candidate_Service_.Forgot_Password_Student(this.StudentEmail_Forgot).subscribe(Save_status => {

if(Save_status[0].Student_Id>0)
{
  document.getElementById('Student_Close').click();
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Email send',Type:"false"}});
}

else
{
  document.getElementById('Student_Close').click();
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Email Address Found',Type:"2"}});
}
},   
Rows => { 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});

}


Forgot_Password_Agent()
{
if(this.AgentEmail_Forgot==undefined || this.AgentEmail_Forgot==null || this.AgentEmail_Forgot.toString()=="" )
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please Enter Email',Type:"3"}});
return;
}
this.Candidate_Service_.Forgot_Password_Agent(this.AgentEmail_Forgot).subscribe(Save_status => {
// console.log(Save_status[0].Client_Accounts_Id);
if(Save_status[0].Client_Accounts_Id>0)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Email send',Type:"false"}});
}

else
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Email Address Found',Type:"2"}});
}
},   
Rows => { 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});

}


Forgot_Password_Candidate()
{
  this.Messege=""
if(this.CandidateEmail_Forgot==undefined || this.CandidateEmail_Forgot==null || this.CandidateEmail_Forgot.toString()=="" )
{
  this.Messege='Please Enter Email'
  return;
}

this.Candidate_Service_.Forgot_Password_Candidate(this.CandidateEmail_Forgot).subscribe(Save_status => {

//console.log(Save_status[0].Candidate_Id);
if(Save_status[0].Candidate_Id>0)
{
  document.getElementById('Candidate_Close').click();
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Email Send',Type:"false"}});
}

else
{
  this.Messege = 'No Email Address Found';
}
},   
Rows => { 
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});

}
// Candidate_Login_Click()
// {
//   this.login()  
// }
Agent_Login_Click()
{
this.Agent_login()  
}
Candidate_Login_Click()
{
this.Candidate_login()  
}
Apply_Now_Click()
{

this.Student_Id_Login=+localStorage.getItem('Student_Id_Login')
this.Agent_Id_Login=+localStorage.getItem('Agent_Id_Login')
this.Course_Apply_Data=[];
if(this.Agent_Id_Login>0)
{
if(this.Student_Id_Login>0)
{

//   const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Student Name is',Type:"false"}});
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'selected student is  '+ localStorage.getItem('Student_Name')+ ' '+'Are you sure to continue ?',Type:"true",Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{
this.Apply_Now_Save(this.Agent_Id_Login);
}
});
}
else
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please Select a student',Type:"false"}});
}
}
else{
if(this.Student_Id_Login>0)
{
this.Apply_Now_Save(this.Default_Agent_Id);
}
else
{
document.getElementById('Login_Id').click();
}
}
}
Apply_Now_Save(Agent_Id_Login)
{
for(var i=0;i<this.Course_Selection_Data.length;i++)
{
this.Course_Apply_Data_Temp.Course_Id=this.Course_Selection_Data[i].Course_Id
this.Course_Apply_Data.push(Object.assign({},this.Course_Apply_Data_Temp));
}

this.Student_Course_Apply_.Course_Apply= this.Course_Apply_Data;
this.Student_Course_Apply_.Student_Id= this.Student_Id_Login;

this.Candidate_Service_.Save_Student_Course(this.Student_Course_Apply_).subscribe(Save_status => {

if(Number(Save_status[0].Student_Course_Apply_Id)>0)
{
this.router.navigateByUrl('Candidate');
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
}
else{
//  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
},
Rows => { 
// const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});

}
Tab_click(Current_tab)
{
this.login_View=false;
this.forgot_View=false;
this.new_account_View=false;
if(Current_tab==1)
{
this.login_View=true;
}
else if(Current_tab==2)
this.forgot_View=true;

else if(Current_tab==3)
this.new_account_View=true;
}
Login_Candidate()
{
this.Close_Click();
this.Messege='';
this.Candidate_Password='';
this.Candidate_Email='';
}
Save_Student_click()
{


if(this.Student_.Student_Name==undefined || this.Student_.Student_Name==null || this.Student_.Student_Name.toString()=="" )
{
 this.Messege='Enter Student Name'
return;
}

if(this.Student_.Email==undefined || this.Student_.Email==null  || this.Student_.Email.toString()=="")
{
  this.Messege ='Enter Email'
return;
}

if(this.Student_.Mobile==undefined || this.Student_.Mobile==null || this.Student_.Mobile.toString()=="")
{
  this.Messege ='Enter Mobile'
return;
}

if(this.Student_.Password==undefined || this.Student_.Password==null || this.Student_.Password.toString()=="")
{
  this.Messege ='Enter Password'
return;
}
this.isLoading=true;
    
this.Student_Service_.Save_Student_Public(this.Student_).subscribe(Save_status => {

if(Number(Save_status[0][0].Student_Id_)>0)
{

  document.getElementById('Student_Close').click();
  const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Account Created, Please login', Type: "3" } });
  // this.router.navigateByUrl('profile');

// this.Clr_Home();
// this.isLoading=false;
}
else{
  
  this.isLoading=false;
  this.Messege ='Error Occured'
}
},
Rows => { 
  
  this.isLoading=false;
  this.Messege = 'Error Occured'
});
}
Save_Candidate_Public()
{
  if(this.Candidate_.Candidate_Name==undefined || this.Candidate_.Candidate_Name==null || this.Candidate_.Candidate_Name.toString()=="" )
  {
  this.Messege_Candidate='Enter Name'
  return;
  }
  if(this.Candidate_.Email==null || this.Candidate_.Email==undefined|| this.Candidate_.Candidate_Name.toString()=="")
  {
    this.Messege_Candidate='Enter Email'
    return;
  }
  if(this.Candidate_.Mobile==null || this.Candidate_.Mobile==undefined|| this.Candidate_.Mobile.toString()=="")
  {
    this.Messege_Candidate='Enter Mobile'
    return;
  }
  if(this.Candidate_.Password==null || this.Candidate_.Password==undefined|| this.Candidate_.Password.toString()=="")
  {
    this.Messege_Candidate='Enter Password'
    return;
  }
  // this.Candidate_.User_Id =Number(this.Login_Id);
  this.issLoading=true;

  this.Candidate_Service_.Save_Candidate_Public(this.Candidate_).subscribe(Save_status => {

  Save_status=Save_status[0];
  if(Number(Save_status[0].Candidate_Id_)>0)
  {
    this.issLoading=false; 
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.fakeClick();
    return
  }
  else
  {
    this.issLoading=false;
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  }
  this.issLoading=false;
  },
  Rows => { 
  this.issLoading=false;
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:Rows.error.error,Type:"2"}});
  });
}

Save_Candidate_JobApply_Public(Job_Posting_Id_)
{
  // if(Candidate_Edit_e==-1)
  //  {
  //  this.Candidate_Service_.Candidate_JobApply_Public_Check(this.Candidate_Edit_e,Job_Posting_Id_)
  //   const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Already Applied',Type:"false"}});
  //   return;
  // }
  if(this.Candidate_Edit_e==0)
  {
    document.getElementById('Login_Id').click();
    // this.Tab_click(1)
  // this.Close_Click();
  // this.Messege='';
  // this.Candidate_Password='';
  // this.Candidate_Email='';
    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please Login',Type:"3"}});
    // return;
  }
  else{
  this.issLoading=true;
  this.Candidate_Service_.Save_Candidate_JobApply_Public(this.Candidate_Edit_e,Job_Posting_Id_).subscribe(Save_status => {

  Save_status=Save_status[0];
  if(Number(Save_status[0].Job_Posting_Id_)>0)
  {
  this.issLoading=false; 
  // this.Candidate_.Candidate_Id=Save_status[0].Candidate_Id_
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Applied',Type:"false"}});
  return;
  }
  else if(Save_status[0].Job_Posting_Id_==-1)
  {
  this.issLoading=false;
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Already Applied',Type:"2"}});
  }
  else{
  this.issLoading=false;
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  }
  this.issLoading=false;
  },
  Rows => { 
  this.issLoading=false;
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  });
  }
}
Search_More_Options1(Student_Data_d)
{
  if (Student_Data_d.more_info == true)
    Student_Data_d.more_info= false;
  else
    Student_Data_d.more_info= true;
}
Load_Candidate_Dropdowns()
{
  this.issLoading = true;
  this.Candidate_Service_.Load_Candidate_Dropdowns().subscribe(Rows => {
  if (Rows != null) {

  this.Functionl_Area_Data = Rows[0];
  this.Functionl_Area_Temp.Functionl_Area_Id = 0;
  this.Functionl_Area_Temp.Functionl_Area_Name = "All";
  this.Functionl_Area_Data.unshift(this.Functionl_Area_Temp);
  this.Search_Functional_Area = this.Functionl_Area_Data[0];

  this.Specialization_Data = Rows[1];
  this.Specialization_Temp.Specialization_Id = 0;
  this.Specialization_Temp.Specialization_Name = "All";
  this.Specialization_Data.unshift(this.Specialization_Temp);
  this.Search_Specialization = this.Specialization_Data[0];

  this.Experience_Data = Rows[2];
  this.Experience_Temp.Experience_Id = 0;
  this.Experience_Temp.Experience_Name = "All";
  this.Experience_Data.unshift(this.Experience_Temp);
  this.Search_Experience = this.Experience_Data[0];

  this.Qualification_Data = Rows[3];
  this.Qualification_Temp.Qualification_Id = 0;
  this.Qualification_Temp.Qualification_Name = "All";
  this.Qualification_Data.unshift(this.Qualification_Temp);
  this.Search_Qualification = this.Qualification_Data[0];

  this.issLoading = false;
  }
  },
  Rows => {
  this.issLoading = false;
  });
}
  Public_Search_Job()
{
  var  job_title='', qualification_id=0,experience_id=0,functional_area_id=0,specialization_id=0;

  if (this.Job_Title != undefined && this.Job_Title != null && this.Job_Title != '')
  job_title = this.Job_Title;

  if (this.Search_Qualification != undefined && this.Search_Qualification != null)
  if (this.Search_Qualification.Qualification_Id != undefined && this.Search_Qualification.Qualification_Id != null)
  qualification_id = this.Search_Qualification.Qualification_Id;

  if (this.Search_Experience != undefined && this.Search_Experience != null)
  if (this.Search_Experience.Experience_Id != undefined && this.Search_Experience.Experience_Id != null)
  experience_id = this.Search_Experience.Experience_Id;


  if (this.Search_Functional_Area != undefined && this.Search_Functional_Area != null)
  if (this.Search_Functional_Area.Functionl_Area_Id != undefined && this.Search_Functional_Area.Functionl_Area_Id != null)
  functional_area_id = this.Search_Functional_Area.Functionl_Area_Id;

  if (this.Search_Specialization != undefined && this.Search_Specialization != null)
  if (this.Search_Specialization .Specialization_Id != undefined && this.Search_Specialization .Specialization_Id != null)
  specialization_id = this.Search_Specialization .Specialization_Id;

  this.issLoading=true;

  this.Candidate_Service_.Public_Search_Job(job_title, qualification_id, experience_id,functional_area_id,specialization_id,this.Page_Start,this.Page_End,this.Page_Length_).subscribe(Rows => {
  this.issLoading=false;
  this.Search_Data=Rows[0];
  },
  Rows => {
  this.issLoading=false;
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  });
}

  About_Click() {
    this.router.navigateByUrl('About_Us');
  }

  Association_Click() {
    this.router.navigateByUrl('Association');
  }

  Skill_Diploma_Click() {
    this.router.navigateByUrl('Skill_Diploma');
  }

  Recognitions_Click() {
    this.router.navigateByUrl('Recognitions');
  }

  C_Tech_Skill_Training_Centres_Click() {
    this.router.navigateByUrl('C_Tech_Skill_Training_Centres');
  }

  Online_Verification_Click() {
    this.router.navigateByUrl('Online_Verification');
  }

  Contact_Us_Click() {
    this.router.navigateByUrl('Contact_Us');
  }
  
  Candidate_Click() {
    this.router.navigateByUrl('Job');
  }

  Student_Login_Click() {
    this.router.navigateByUrl('Student_Login');
  }
}