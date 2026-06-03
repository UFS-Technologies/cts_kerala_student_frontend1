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
import { CandidateService } from '../../services/candidate';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { Student } from '../../models/Student';
import { Student_Service } from '../../services/Student.Service';
//import { MatDialog } from '@angular/material';
@Component({
selector: 'app-Recognitions',
templateUrl: './Recognitions.component.html',
styleUrls: ['./Recognitions.component.css']
})
export class RecognitionsComponent implements OnInit {
 // @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
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
Course_Intake_Data:any;
Student_Id_Login:number;
Agent_Id_Login:number=0;
Default_Agent_Id:number=1;
Course_Name:any;
Branch_Search:string;
Duration_Search:string;
Page_Start:number=0;
Page_End:number=0;
Page_Length:number=0;
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
issLoading: boolean;
rstring:any
Country_string: any
Course_String: any
ngOnInit() {
  AOS.init();
  this.useEffect();
  this.Course_Selection_Data=[];
  this.login_View1=true;
  this._activatedRoute.queryParams.subscribe(data => console.log('queryParams', data['id']));
  this._activatedRoute.queryParams.subscribe(data => this.rstring = data);// this.rstring = data['id'] );  
  if (this.rstring.Country!=undefined)
  {
  // this.Country_string = this.rstring.Country
  // this.Intake_ = this.rstring.Intake
  this.Course_Name ={Course_Name: this.rstring.Course}
  // this.Subject_Data = this.rstring.Status
  // this.Duration = this.rstring.Duration
  // this.Ielts_ = this.rstring.Ielts
  this.Page_Start = this.rstring.Page_Start
  this.Page_End = this.rstring.Page_Endy
  this.Page_Length = this.rstring.Page_Length
  }
  this.Page_Length = 10;
  // this.Get_site_Pageload();
  let top = document.getElementById('Topdiv');
    if (top !== null) {
    top.scrollIntoView();
    top = null;
    }
  }
constructor(public userService: UserData,private _activatedRoute: ActivatedRoute,private cookieService: CookieService,private Student_Service_: Student_Service,private CandidateService: CandidateService, private router: Router ,public dialogBox: MatDialog) {
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
  //       //  this.Subject_Data[i].Selection=true
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
async login() {
  this.issLoading = true;
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
    this.issLoading = false;
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
    this.router.navigateByUrl('student');
  }
  else
  {
    this.Messege = 'Inavlid User Name/Password';
  }
}
Close_Click()
{
  this.login_View=true;
  this.new_account_View=false;
  this.forgot_View = false;
  this.clr_student();
}
clr_student()
{
  this.Student_.Student_Name='';
  this.Student_.User_Name='';
  this.Student_.Mobile='';
  this.Student_.Email='';
  this.Student_.Password='';
  this.Messege='';
  this.StudentEmail_Forgot='';
}
async Forgetpass() {
  var Forget_Data={'Email':'teena@ufstechnologies.com'}
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
this.Page_End=this.Page_Length
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

if(this.Student_.Phone==undefined || this.Student_.Phone==null || this.Student_.Phone.toString()=="")
{
  this.Messege ='Select Phone'
return;
}

if(this.Student_.Password==undefined || this.Student_.Password==null || this.Student_.Password.toString()=="")
{
  this.Messege ='Select Password'
return;
}


this.isLoading=true;
 
    
this.CandidateService.Update_Student_Public(this.Student_).subscribe(Save_status => {

if(Number(Save_status[0][0].Student_Id_)>0)
{

  document.getElementById('Student_Close').click();
  const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Account Created, Please login ', Type: "3" } });
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
  const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Profile Created, Please login', Type: "3" } });
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

Public_Search_Student_Details()
{
  debugger
  if(this.Student_.Registration_No ==null || this.Student_.Registration_No==undefined)
  {
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Enter your Registration No',Type:"2"}});  
  }
  else
  {
  var Registration_No=this.Student_.Registration_No;
  debugger;
  this.Student_Service_.Public_Search_Student_Details(Registration_No).subscribe(Rows => {  
    debugger;
    // this.router.navigate(['home'], { queryParams: { Registration_No_: Registration_No} })
     debugger;
this.Student_Data=Rows[0];
},
Rows => { 
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"2"}});          
});
}
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


for (var i=0;i<this.Subject_Data.length;i++)
{
//if(this.Subject_Data[i].Selection==true)
Status_Selection=Status_Selection + this.Subject_Data[i].Subject_Id.toString() +",";
}
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
  this.CandidateService.Public_Search_Course(Level_Detail_Id, Country_Id, Intake_Id, course_Name_Temp,Status_Selection,Duration_Selection,Ielts_Id,
    this.Page_Start,this.Page_End,this.Page_Length).subscribe(Rows => {  
     this.router.navigate(['home'], { queryParams: { Level: Level_Detail_Id, Country: Country_Id, Intake: Intake_Id, Course: course_Name_Temp, 
      Status: Status_Selection, Duration: Duration_Selection, Ielts: Ielts_Id, Page_Start: this.Page_Start, Page_End: this.Page_End, 
      Page_Length: this.Page_Length} })
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

// Course_Intake_Temp=Course_Intake_Temp.substring(0,Course_Intake_Temp.length-1)

// this.Course_Data[index].Intake_Name=Course_Intake_Temp;
// },
// Rows => { 
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
Next_Click ()
{ 

if(this.Course_Data!=undefined)
if (this.Course_Data.length == this.Page_Length)
{
this.Page_Start = this.Page_Start + this.Page_Length;
this.Page_End = this.Page_End+ this.Page_Length;
this.nextflag = 1;   
if (this.Course_Data.length > 0)
{
this.Public_Search_Course();
}
}
}
previous_Click  () 
{

if(this.Course_Data!=undefined)
if (  this.Page_Start > 0 ) 
{ 
this.Page_Start = this.Page_Start - this.Page_Length;
this.Page_End = this.Page_End - this.Page_Length;
this.Public_Search_Course();   
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


for (var i=0;i<this.Subject_Data.length;i++)
{
// if(this.Subject_Data[i].Selection==true)
Status_Selection=Status_Selection + this.Subject_Data[i].Subject_Id.toString() +",";
}
if(Status_Selection.length>0)
Status_Selection=Status_Selection.substring(0,Status_Selection.length-1)

for (var i=0;i<this.Duration_Data.length;i++)
{
if(this.Duration_Data[i].Selection==true)
Duration_Selection=Duration_Selection + this.Duration_Data[i].Duration_Id.toString() +",";
}
if(Duration_Selection.length>0)
Duration_Selection=Duration_Selection.substring(0,Duration_Selection.length-1)

this.CandidateService.Public_Search_Course_Typeahead(Level_Detail_Id,Country_Id,Intake_Id,this.Course_Name,Status_Selection,Duration_Selection,Ielts_Id,this.Page_Start,this.Page_End,this.Page_Length).subscribe(Rows => {

this.isLoading=false;
this.Course_Data=Rows[0];
},
Rows => { 
});
}
display_Course(Course_e: Course) {

if (Course_e) { return Course_e.Course_Name; }


}
Forgot_Password_Student()
{


if(this.StudentEmail_Forgot==undefined || this.StudentEmail_Forgot==null || this.StudentEmail_Forgot.toString()=="" )
{
  this.Messege = 'Please Enter Email';
  return;
}


this.CandidateService.Forgot_Password_Student(this.StudentEmail_Forgot).subscribe(Save_status => {
  
  
if(Save_status[0].Student_Id>0)
{
  document.getElementById('Student_Close').click();
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Email send',Type:"false"}});
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
Forgot_Password_Agent()
{


if(this.AgentEmail_Forgot==undefined || this.AgentEmail_Forgot==null || this.AgentEmail_Forgot.toString()=="" )
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Please Enter Email',Type:"3"}});
return;
}
this.CandidateService.Forgot_Password_Agent(this.AgentEmail_Forgot).subscribe(Save_status => {
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
Candidate_Login_Click()
{
  this.login()  
}
Agent_Login_Click()
{
  this.Agent_login()  
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

this.CandidateService.Save_Student_Course(this.Student_Course_Apply_).subscribe(Save_status => {
  
if(Number(Save_status[0].Student_Course_Apply_Id)>0)
  {
  this.router.navigateByUrl('student');
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
  else if(Current_tab==2){
    this.forgot_View=true;
    // this.Forgot_Password_Student();
  }
  

  else if(Current_tab==3)
  {
    this.new_account_View=true;
  this.clr_student();
  }
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

  Login_Student()
  {
    this.Close_Click();
    this.Messege='';
   
  }
  Skill_Identity_Programs_Click() { this.router.navigateByUrl('Skill_Identity_Programs'); }
  Skill_Proficiency_Programs_Click() { this.router.navigateByUrl('Skill_Proficiency_Programs'); }
  Trade_Competency_Programs_Click() { this.router.navigateByUrl('Trade_Competency_Programs'); }
  University_Program_Click() { this.router.navigateByUrl('University_Program'); }
}