import { Component, OnInit, ViewChild, ElementRef, ɵConsole } from '@angular/core';
import * as AOS from 'aos';

import { Gender } from '../../models/Gender';
import { Student } from '../../models/Student';
import { CookieService } from 'ngx-cookie-service';
import { Student_Message } from '../../models/Student_Message';
import { Student_Course_Selection } from '../../models/Student_Course_Selection';
import { Student_Course_Apply } from '../../models/Student_Course_Apply';
import { CandidateService } from '../../services/candidate';
import { MatDialog } from '@angular/material/dialog';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Student_Document } from '../../models/Student_Document';
import { Document } from '../../models/Document';
import { Student_Status } from '../../models/Student_Status';
import { MomentDateAdapter } from '@angular/material-moment-adapter'
// '@angular/material-moment-adapter';
// import { MAT_DATE_FORMATS} from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { Student_Service } from '../../services/Student.Service';
import { Student_Course } from '../../models/Student_Course';
import { Student_Course_Subject } from '../../models/Student_Course_Subject';
import { Course_Subject } from '../../models/Course_Subject';
import { Student_Fees_Installment_Master } from '../../models/Student_Fees_Installment_Master';
import { Mark_List_Master } from '../../models/Mark_List_Master';
import { Mark_List } from '../../models/Mark_List';
import { Router, ActivatedRoute } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { environment } from '../../../environments/environment';
import { Exam_Master } from '../../models/Exam_Master';
import { Exam_Details } from '../../models/Exam_Details';
import { Question } from '../../models/Question';
import {Activity} from '../../models/Activity'

import { Student_Course_Part } from '../../models/Student_Course_Part';
import {ActivityDetails} from '../../models/ActivityDetails'
import { Exam_Submission } from '../../models/Exam_Submission';
import * as moment from 'moment';
import jsPDF  from 'jspdf';
import { ThrowStmt } from '@angular/compiler';
// import { dirxml } from 'console';

export const MY_FORMATS = {
parse: {
dateInput: 'DD/MM/YYYY',
},
display: {
dateInput: 'DD/MM/YYYY',
monthYearLabel: 'MMM YYYY',
dateA11yLabel: 'DD/MM/YYYY',
monthYearA11yLabel: 'MMMM YYYY',
},
};
// const moment = _rollupMoment || _moment;

@Component({
selector: 'app-Student',
templateUrl: './Student.component.html',
styleUrls: ['./Student.component.css'],
providers: [DatePipe,
{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS, },
],
})
export class StudentComponent implements OnInit {
@ViewChild('mark', {static: false}) mark: ElementRef;
year: any;
month: any;
day: any;
date: any;
Document_Array:Document[];
Document_File_Array:any[]
Document_File:Document=new Document();
Document_Start:number;
Document_Description:string;
Entry_View:boolean=true;
Question_Details:Question[];
Exam_Duration:Student_Course_Subject[];

Questions_:Question = new Question();
Correct_Answer:string; 
File:string;
Search_FromDate:Date=new Date();
Search_ToDate:Date=new Date();
Student_Data:Student[]; 
Student_Data_Temp:Student=new Student
Student_:Student= new Student;
ActivityDetails_:ActivityDetails= new ActivityDetails;
ActivityDetails_Datas:ActivityDetails[];
Save_Call_Status:boolean=false;
ImageFile: any;
ImageFile_Photo: any
ImageFile_Photo_view: any
ImageFile_Aadhaar:any;
Display_File_Name_:string;
file:File;
photo_name:string
Student_Course_Apply_:Student_Course_Apply=new Student_Course_Apply;
Student_Course_Apply_Data:Student_Course_Apply[];
Student_Course_:Student_Course=new Student_Course();
Subject_Data:Student_Course_Subject[]
Student_Course_Selection_Data:Student_Course_Selection[];
Student_Message_Data:Student_Message[];
Student_Document_Data:Student_Document
Save_Document_:Document=new Document();
next_view:boolean=true;
submit_view:boolean=true;
Exam_Submit:Exam_Details[];
Mark_List_Data:Mark_List[];
Mark_List_:Mark_List=new Mark_List;
Document_Data:Document[];
Gender_Data:Gender[]
Gender_:Gender= new Gender();

Gender_Name_Search:string;
isLoading: boolean;
Total_Entries: number;
Profile_View:boolean=true;
Course_View:boolean=false;
Exam_Tab_View:boolean=false;
Exam_Details_Data: any[];
Exam_Details_Hidden: boolean = false;
Selected_Exam: any;
Exam_Data: any[] = [];
application_View:boolean=false;
document_View:boolean=false;
Document_View:boolean=true;

exam_View:boolean=false;
message_View:boolean=false;
fee_View:boolean=false;
status_View:boolean=false;
activities_View:boolean=false;
issLoading: boolean;
Student_Edit_e:number; 
Student_Name:string;
Agent_Edit_e:number;
myInnerHeight: number;
Fees_Instalment:Student_Fees_Installment_Master[];
Payment_History:Student_Fees_Installment_Master[];
Student_Status_Search_:Student_Status=new Student_Status();
Student_Status_:Student_Status=new Student_Status();
Student_Status_Data:Student_Status[];
Student_Status_Search_Data:Student_Status[];
Student_Status_Temp:Student_Status=new Student_Status();
Student_Status_Search_Temp:Student_Status=new Student_Status();
Exam_Master_:Exam_Master=new Exam_Master();
Exam_Details_:Exam_Details=new Exam_Details();
Student_Edit:boolean;
Permissions: any;
src:any
application:boolean=true;
Look_In_Date:Boolean=true;
Search_Name:string;
Phone_Number_:number;
Pointer_Start_:number;
Pointer_Stop_:number;
nextflag:number;
Page_Length_:number =2;
Agent_Id:number;
Exam_Master_Id_:number;

Student_Course_Part_Id:number;
Course_Subject_Id:number;



Question_Index:number=0;
Student_Status_Id_:number;
Exam_Submitted_:Exam_Submission=new Exam_Submission();
timer: any = null;
startTime: Date;
endTime: Date;
ellapsedTime = "00:00";
duration:number;
Instruction_View:boolean=false;
subject_Id:number;
student_course_part_Id:number;
subject_Name:string;
Semester_Name:string;
course_Id:number;
part_Id:number;

month_id:number;
month_name:string;
year_id:number;
year_name:string;


Mark_Count:number=0;  
Option_1:boolean=false;
Option_2:boolean=false;
Option_3:boolean=false;
Option_4:boolean=false;
Total_Amount:number=0;


Activity_:Activity=new Activity;
Activity_Temp:Activity=new Activity;
Activity_Data:Activity[];


Student_Mark_Part_Data: Student_Course_Part[];
// Mark_List_:Mark_List=new Mark_List;
Student_Course_Part_:Student_Course_Part=new Student_Course_Part;
Course_Subject_:Course_Subject=new Course_Subject;


Mark_list_view:boolean=true;
mark_View:boolean=false;
University_Id:number;




Registration: boolean = false;
activeTab: number = 1;

Instruction_Exam_View:boolean=false;
slideConfig = { slidesToShow: 4, slidesToScroll: 4, autoplay: !0, autoplaySpeed: 2e3, };
slideConfig1 = { slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 2e3, };  
constructor(private datePipe: DatePipe,private Student_Service_: Student_Service,private CandidateService: CandidateService,private cookieService: CookieService,public dialogBox: MatDialog,private router:Router, private route: ActivatedRoute) {


this.Student_Edit_e=+localStorage.getItem('Student_Id_Login')
this.Agent_Edit_e=+localStorage.getItem('Agent_Id_Login')
// this.Login_User=localStorage.getItem(("Login_User"));

this.Page_Load();
if(this.Agent_Edit_e>0)
{
this.Entry_View=false;
}
else
this.Entry_View=true;

this.route.queryParams.subscribe(params => {
  if (params['tab']) {
    this.Tab_click(+params['tab']);
  }
});
}
// public downloadPDF() {
//   
//   const doc = new jsPDF();

//   var x1=10, x2=50,y1=10,x3=110,x4=120, x5=160,pdfwidth=190;
//   var  dx=10
//   //doc.rect(10, 10, 190, 20)

//   doc.line(x1,y1,pdfwidth,y1)
//   doc.text(x1,y1,'Subject Name')
//   doc.text(x2,y1,'Minimum Mark')
//   doc.text(x3,y1,'Maximum Mark')
//   doc.text(x4,y1,'Obtained Mark')
//   doc.text(x5,y1,'Result')
//   y1=y1+dx;
//   var tempstring;
//   for(var i=0;i<this.Mark_List_Data.length;i++)
//   {
//     
//     doc.line(x1,y1,pdfwidth,y1)
//     doc.text(x1-2,y1,this.Mark_List_Data[i].Subject_Name)
//     // tempstring=this.Mark_List_Data[i].Minimum_Mark.toString()
//     // doc.text(x1,y3,tempstring)
//      doc.text(x3-2,y1,this.Mark_List_Data[i].Maximum_Mark.toString())
//     // doc.text(x1,y5,this.Mark_List_Data[i].Mark_Obtained.toString())
//     doc.text(x5-2,y1,this.Mark_List_Data[i].Exam_Status_Name)
//     y1=y1+dx;

//   }
//   doc.line(x1,y1,pdfwidth,y1)

//   //	Minimum Mark	Maximum Mark	Obtained Mark	Status



//   // doc.text("Hello world!", 10, 10);

//   // const specialElementHandlers = {
//   //   '#editor': function (element, renderer) {
//   //     return true;
//   //   }
//   // };

//   // const mark = this.mark.nativeElement;

//   // doc.fromHTML(mark.innerHTML, 15, 5, {
//   //   width: 230,
//   //   'elementHandlers': specialElementHandlers
//   // });

//   doc.save('test.pdf');
// }

public downloadPDF() {

const doc = new jsPDF();

var x1=10, x2=110,x3=135,x4=160, x5=185,pdfwidth=200,y1=10;
var  dx=10
//doc.rect(10, 10, 190, 20)

doc.line(x1,y1,pdfwidth,y1)
y1=y1+dx;
doc.setFontSize(13)
doc.text('Subject ', x1, y1)
doc.text('Minimum ', x2, y1)
doc.text('Maximum ', x3, y1)
doc.text('Obtained ', x4, y1)
doc.text('Result', x5, y1)
y1=y1+dx/2;
doc.text(' ', x1, y1)
doc.text('Mark', x2, y1)
doc.text('Mark', x3, y1)
doc.text('Mark', x4, y1)
doc.text('', x5, y1)
y1=y1+dx/2;
doc.line(x1,y1,pdfwidth,y1)

doc.setFontSize(12)

var tempstring;
for(var i=0;i<this.Mark_List_Data.length;i++)
{
y1=y1+dx;
doc.text(this.Mark_List_Data[i].Subject_Name, x1, y1)
doc.text(this.Mark_List_Data[i].Minimum_Mark.toString(), x2, y1)
doc.text(this.Mark_List_Data[i].Maximum_Mark.toString(), x3, y1)

tempstring=this.Mark_List_Data[i].Mark_Obtained
if(tempstring!=null)
doc.text(this.Mark_List_Data[i].Mark_Obtained.toString(), x4, y1)
doc.text(this.Mark_List_Data[i].Exam_Status_Name, x5, y1)
y1=y1+dx/2;
doc.line(x1,y1,pdfwidth,y1)
}
doc.save('Marklist.pdf');
}
Get_Student_Details()
{
  let top = document.getElementById('Topdiv');
  if (top !== null) {
  top.scrollIntoView();
  top = null;
  }
  this.Registration=false
  this.Student_Service_.Get_Student_Details( this.Student_Edit_e).subscribe(Rows => {
  
  if (Rows != null) {
  this.Student_= Object.assign({},Rows[0][0]);
  this.ImageFile_Photo_view=environment.FilePath+'/Uploads/'+this.Student_.Photo
  this.Registration=Rows[0][0].Registered;
  this.Student_.Client_Account_Id=Rows[0][0].Client_Accounts_Id;
  for (var i = 0; i < this.Gender_Data.length; i++)
  {
  if (this.Student_.Gender == this.Gender_Data[i].Gender_Id)
  this.Gender_=this.Gender_Data[i];
  }
  this.Document_Array= Rows[1];
  this.Document_File_Array=[];
  for(var i=0;i<this.Document_Array.length;i++)
  this.Document_File_Array.push('')
  localStorage.setItem('Student_Id_Login',this.Student_.Student_Id.toString())
  localStorage.setItem('Student_Name',this.Student_.Student_Name)
  }
  if (Rows[2] && Rows[2].length > 0 && Rows[2][0]) {
    this.University_Id = Rows[2][0].University_Id;
    this.Load_Activity_Dropdowns(this.University_Id);
  }
  //  this.isLoading = false;
  },
  Rows => {
    
  this.isLoading = false;
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  });
}
ngOnInit() 
{
AOS.init();
this.useEffect();
this.Gender_Data  =[];
this.Gender_Data.push({'Gender_Id':0,'Gender_Name':'Select'});
this.Gender_Data.push({'Gender_Id':1,'Gender_Name':'Male'});
this.Gender_Data.push({'Gender_Id':2,'Gender_Name':'Female'});
// console.log(this.Permissions)
if(this.Permissions==undefined || this.Permissions==null)
{
localStorage.removeItem('token');
}
else
{
this.Student_Edit=this.Permissions.Edit;
}

}
loadFile(event) {
}
Page_Load()
{
  this.Mark_list_view=false;
  this.mark_View=false;

this.Student_.DOB=new Date();
this.Student_.DOB=this.New_Date(this.Student_.DOB);
this.Clr_Profile();
if(this.Student_Edit_e>0)
{
  this.Get_Student_Details();
  //this.Load_Activity_Dropdowns();
}

this.Instruction_Exam_View=false;
this.Instruction_View=false;
this.Registration=false
}
Close_Exam(){

clearInterval(this.timer);
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Are you sure you want to leave this page ?',Type:"true",Heading:'Confirm'}});
dialogRef.afterClosed().subscribe(result =>
{
if(result=='Yes')
{

this.Submit_Exam();
this.exam_View=false;
this.Instruction_Exam_View=false;
this.Course_View=true;
}
});      
}


Clr_Document()
{
this.Display_File_Name_="";
this.ImageFile="";
if(this.Document_Data!=null && this.Document_Data != undefined)
this.Save_Document_=this.Save_Document_[0];
}

Clr_Profile()
{
this.Student_.Student_Name="";    
this.Student_.Address1="";
this.Student_.Address2="";
this.Student_.Pincode="";
this.Student_.Email="";   
this.Student_.Password="";   
}
Search_Student_Status()
{        
this.issLoading=true;
this.CandidateService.Search_Student_Status('').subscribe(Rows => {

this.Student_Status_Data=Rows[0];
this.Total_Entries=this.Student_Status_Data.length;
if(this.Student_Status_Data.length==0)
{
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'No Details Found',Type:"3"}});
}
this.issLoading=false;
},
Rows => { 
  
this.issLoading=false;
const dialogRef = this.dialogBox.open
( DialogBox_Component, {panelClass:'Dialogbox-Class'
,data:{Message:'Error Occured',Type:"2"}});
});
}

Next_Click ()
{   


if(this.Question_Index<=this.Question_Details.length-1)
{
this.Question_Details[this.Question_Index]=Object.assign({},this.Questions_);
this.Question_Index++;
if (this.Question_Index > this.Question_Details.length-1 )
{
  
this.Submit_Exam();
// this.next_view=false;
// this.submit_view=true;
// this.Question_Index--;
}
else
{
this.Questions_=this.Question_Details[this.Question_Index];
}

}
}

previous_Click  () 
{            
if ( this.Pointer_Start_ > 1) 
{ 
this.Pointer_Start_ = this.Pointer_Start_ - this.Page_Length_;
this.Pointer_Stop_ = this.Pointer_Stop_ - this.Page_Length_;
this.Search_Student_Agent(this.Agent_Edit_e);    
}    
}
Update_Student_click()
{


if(this.Student_.Student_Name==undefined || this.Student_.Student_Name==null || this.Student_.Student_Name.toString()=="" )
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Name',Type:"3"}});
return;
}

if(this.Student_.Email==undefined || this.Student_.Email==null  || this.Student_.Email.toString()=="")
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Email',Type:"3"}});
return;
}

// if(this.Student_.Phone_Number==undefined || this.Student_.Phone_Number==null || this.Student_.Phone_Number.toString()=="")
// {
//     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Phone',Type:"3"}});
//     return;
// }

if(this.Student_.Password==undefined || this.Student_.Password==null || this.Student_.Password.toString()=="")
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Password',Type:"3"}});
return;
}


//   if (this.Gender_ == undefined || this.Gender_ == null ) {
//     const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Gender', Type: "3" } });
//    return;
// }


this.isLoading=true;
//pass agent id
this.Student_.Student_Id=this.Student_Edit_e;
// this.Student_.Gender= this.Gender_.Gender_Name;       
this.CandidateService.Update_Student(this.Student_).subscribe(Save_status => {
//  console.log(Save_status[0][0]);
if(Number(Save_status[0][0].Student_Id_)>0)
{

const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});

this.Clr_Profile();
// this.isLoading=false;
}
else{
this.isLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});

}
},
Rows => { 
  
this.isLoading=false;
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured',Type:"2"}});

});
}

Close_Click()
{
this.Entry_View=false;
this.Student_.DOB=new Date();
this.Student_.DOB=this.New_Date(this.Student_.DOB);
this.router.navigateByUrl('/home');
}
Search_Student_Agent(Agent_Edit_e)
{
var look_In_Date_Value = 0,Search_Name=0,var_Student_Status_Search=0
if (this.Look_In_Date == true)
look_In_Date_Value = 1;


if(this.Student_Status_Search_!=undefined && this.Student_Status_Search_!=null&& this.Student_Status_Search_.toString()!='Student_Status_')
{
if(this.Student_Status_Search_.Student_Status_Id!=undefined && this.Student_Status_Search_.Student_Status_Id!=null)
{
var_Student_Status_Search=this.Student_Status_Search_.Student_Status_Id;

}
}

if (this.Search_Name== null)
this.Search_Name= undefined;

if (this.Phone_Number_== null)
this.Phone_Number_= undefined;


this.issLoading=true;

this.CandidateService. Search_Student_Agent( this.datePipe.transform(this.Search_FromDate, "yyyy-MM-dd")  , this.datePipe.transform(this.Search_ToDate, "yyyy-MM-dd") ,
look_In_Date_Value,this.Search_Name,this.Phone_Number_,this.Agent_Edit_e,var_Student_Status_Search,this.Pointer_Start_,this.Pointer_Stop_,this.Page_Length_)
.subscribe(Rows =>{

this.Student_Data=Rows[0];

this.Total_Entries=this.Student_Data.length;
if(this.Student_Data==undefined)
{

this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
}
this.issLoading=false;
},
Rows => 
{ 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});

}

Get_Student_Course_Apply(Student_Id)
{
this.Document_View=false;
this.isLoading=false;
this.Student_Service_.Get_Student_Course_Apply(Student_Id).subscribe(Rows => {

if (Rows != null) {
this.Student_Course_= Object.assign({},Rows[0][0]);
this.Subject_Data=Rows[1];
}
this.isLoading = false;
},
Rows => {
this.isLoading = false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}

Get_Student_Course_Selection(Student_Course_Apply_Id){
this.CandidateService.Get_Student_Course_Selection(Student_Course_Apply_Id).subscribe(Rows => {

if (Rows != null) {
this.Student_Course_Selection_Data = Rows[0];
}
this.isLoading = false;
},
Rows => {
this.isLoading = false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}
Get_Student_Document(Student_Id)
{
this.Document_View=false;
this.CandidateService.Get_Student_Document(Student_Id).subscribe(Rows => {

if (Rows != null) {
this.Student_Document_Data = Rows[0];
}
this.isLoading = false;
},
Rows => {
this.isLoading = false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}

Download_Photo(Photo) 
{
//var bs= 'http://newapi.mik.net.in/uploads/'
var bs= environment.FilePath+'/Uploads/';
var s = bs+ Photo;
window.open(s,'_blank');   
}
Search_Document()
{
this.CandidateService.Search_Document('').subscribe(Rows => {

if (Rows != null) {
this.Document_Data = Rows[0];
}
this.isLoading = false;
},
Rows => {
this.isLoading = false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}
Get_Fees_Details(Student_Id)
{

this.Total_Amount=0;
this.Document_View=false;
this.Student_Service_.Get_Fees_Details(Student_Id, this.Student_.Client_Account_Id).subscribe(Rows => {

  this.Fees_Instalment = Rows[0];
  this.Payment_History = Rows[1];
  
  if (this.Payment_History.length > 0) 
  {
    var total_amnt=Rows[1];
    for(var j=0;j<total_amnt.length;j++)
    {
    this.Total_Amount=Number( this.Total_Amount)+Number(total_amnt[j].Amount);
    }
  }
this.isLoading = false;
},
Rows => {
this.isLoading = false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}


New_Date(Date_)
{
this.date=Date_
this.year = this.date.getFullYear();
this.month = this.date.getMonth() + 1;
if (this.month < 10) {
this.month = "0" + this.month;
}
this.day = this.date.getDate().toString();
if (Number.parseInt(this.day) <10) {
this.day = "0" + this.day;
}
this.date = this.year + "-" + this.month + "-" + this.day;
return this.date;
}



Save_Student_Document()
{ 
//this.issLoading=true;
if(this.Save_Document_==undefined || this.Save_Document_==null)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Document',Type:"3"}});
return;
}
if(this.Save_Document_.Document_Id==undefined || this.Save_Document_.Document_Id==null)
{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select Document',Type:"3"}});
return;
}


if (this.ImageFile == null || this.ImageFile == undefined || this.ImageFile == "") {
this.File = "";
this.ImageFile = [];
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Choose a File',Type:"3"}});
return;
}


this.CandidateService.Save_Student_Document(this.Save_Document_.Document_Id,this.Student_Edit_e,this.ImageFile).subscribe(Save_status => {

Save_status=Save_status[0];

if(Number(Save_status[0].Student_Document_Id_)>0)
{

const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Get_Student_Document(this.Student_Edit_e);

this.Clr_Document();
}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
}
this.issLoading=false;
},
Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Error Occured',Type:"2"}});
});
}

Get_Mark_Details_Student( Part_Id)
{
  this.Document_View=false;
  this.Student_Service_.Get_Mark_Details_Student(Part_Id,this.Student_Edit_e).subscribe(Rows => {
    
  if (Rows != null) {
  this.Mark_List_Data = Rows[0];
  }
  //  this.isLoading = false;
  },
  Rows => {
  this.isLoading = false;
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  });
}

Create_New()
{
this.Entry_View=true;
}



Search_Student_Agent_Click()
{
  this.Agent_Id=67;
  this.Pointer_Start_=1;
  this.Pointer_Stop_=this.Page_Length_;
  this. Search_Student_Agent(this.Agent_Id)
}
Tab_click(Current_tab)
{
  this.activeTab = Current_tab;
  this.Profile_View=false;
  this.Course_View=false;
  this.application_View=false;
  this.mark_View=false;
  this.Mark_list_view=false;
  this.message_View=false;
  this.exam_View=false;
  this.fee_View=false;
  this.status_View=false;
  this.activities_View=false;
  this.Exam_Tab_View=false;

  if(Current_tab==1){
  this.Profile_View=true;
  this.Document_View=true;
  this.Mark_list_view=false;
  }
  else if(Current_tab==2)
  {   
  this.isLoading=true;
  this.Course_View=true;
  this.Mark_list_view=false;
  this.Exam_Tab_View=false;
  this.Get_Student_Course_Apply(this.Student_Edit_e)
  }

  else if(Current_tab==3)
  {     
  this.fee_View=true;
  this.Mark_list_view=false;
  this.Exam_Tab_View=false;
  this.Get_Fees_Details(this.Student_Edit_e)
  }

  else if(Current_tab==4)
  {   
  this.mark_View=true;
  this.Exam_Tab_View=false;
  
  this.Get_Mark_Details_Student(this.Student_Edit_e)
  this.Load_Student_Part();
  }

  else if(Current_tab==5)
  {
  this.status_View=true;  
  this.Mark_list_view=false;
  }
  
  else if(Current_tab==6)
  {
  this.activities_View=true; 
  this.Mark_list_view=false;
  this.Get_Activity_Details(this.Student_Edit_e) 
  }

  else if(Current_tab==7)
  {
    this.Exam_Tab_View=true;
    this.Exam_Details_Hidden=false;
    this.Selected_Exam=null;
    this.Get_Student_Course_Apply(this.Student_Edit_e);
    this.Load_Student_Exams(this.Student_Edit_e);
  }


}
File_Change_Photo(event)
{
  this.file = event.target.files; 
  this.ImageFile_Photo = this.file;
  this.Student_.Photo=this.ImageFile_Photo[0].name;
}
File_Change_Aadhaar(event)
{

this.file = event.target.files; 
this.ImageFile_Aadhaar = this.file;
this.Student_.Aadhaar=this.ImageFile_Aadhaar[0].name;

} 
File_Change_Document(event)
{

this.file = event.target.files; 
this.ImageFile = this.file;
this.Display_File_Name_ = this.ImageFile[0].name;


}
clear_CheckBox()
{
  this.Option_1=false;
  this.Option_2=false;
  this.Option_3=false;
  this.Option_4=false;
}
Answer_Option_Click(selected_Option)
{ 
// this.Exam_Details_.Question_Answer=selected_Option;
  if(selected_Option==this.Questions_.Correct_Answer)
  {

  this.Questions_.Is_Correct=true;
  this.Mark_Count++;   
  }      
  this.Questions_.Question_Answer=selected_Option;
  this.Exam_Submitted_.Mark_Obtained=this.Mark_Count;
  
  this.Next_Click();
}
Submit_Exam()
{
 
    clearInterval(this.timer);
    this.Question_Details[this.Question_Index-1]=this.Questions_;
    this.Exam_Submitted_.Exam_Master_Id=this.Exam_Master_Id_;
    this.Exam_Submitted_.Student_Id=this.Student_.Student_Id;
    this.Exam_Submitted_.Question_Data=this.Question_Details; 
     
    this.Exam_Submitted_.Student_Course_Part_Id=this.student_course_part_Id; 
    this.Exam_Submitted_.Part_Name=this.Semester_Name; 
    this.Exam_Submitted_.Course_Subject_Id=this.Course_Subject_Id;
    this.Exam_Submitted_.Month_Id=this.month_id;
    this.Exam_Submitted_.Month_name=this.month_name;
    this.Exam_Submitted_.Year_Id=this.year_id;
    this.Exam_Submitted_.Year_name=this.year_name;
    this.Exam_Submitted_.Course_Subject_Id=this.Course_Subject_Id;

    

    this.Exam_Submitted_.Status=2;
    this.issLoading = true;
    
    //console.log(this.Exam_Submitted_);
    this.Student_Service_.Submit_Exam(this.Exam_Submitted_).subscribe(Save_status => {
     debugger 
    if(Save_status[0][0].Exam_Master_Id_>0)
    {  
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Exam Completed.',Type:"false"}});
    this.Save_Call_Status = false;  
    this.exam_View=false;
    this.Course_View=true;   
    this.Question_Details=[];
    this.Questions_=new Question;
    this.Instruction_Exam_View=false;
    // this.clear_CheckBox();       
    this.Get_Student_Course_Apply(this.Student_.Student_Id);     
    }
    else 
    {            
    this.Save_Call_Status = false;
    }
    this.issLoading=false;
    },
    Rows => { 
    this.issLoading=false;
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    this.Save_Call_Status = false;
    });   
}

close_write_exam()
{
  this.Instruction_View=false;
  this.Instruction_Exam_View=false;
  //this.exam_View=false;
  this.Course_View=true;
}
Write_Exam(Subject1)  
{  
 // _Id,Part_Id,Subject_Name,Course_Id,Part_Name
  this.exam_View=false;
  this.Course_View=false;
  this.submit_view=false;
  this.Instruction_Exam_View=true;
  this.Instruction_View=true; 
  this.subject_Id=Subject1.Subject_Id;
  this.Semester_Name=Subject1.Part_Name;
  this.student_course_part_Id=Subject1.student_course_part_Id;
  this.Course_Subject_Id=Subject1.Course_Subject_Id;
  this.subject_Name=Subject1.Subject_Name;
  this.course_Id=Subject1.Course_Id;

  this.part_Id=Subject1.Part_Id;


  this.month_id=Subject1.Month_Id;
  this.month_name=Subject1.Month_Name;
  this.year_id=Subject1.Year_Id;
  this.year_name=Subject1.Year_Name;
  
// this.Question_Index

}
If_Agree()
{
  this.Mark_Count=0;
  debugger
  this.Student_Service_.Start_Exam(this.subject_Id,this.part_Id,this.subject_Name,this.course_Id,this.Student_.Student_Id).subscribe(Rows => {
  
    debugger
  this.Exam_Master_Id_=Rows[0][0].Exam_Master_Id_;
  if (this.Exam_Master_Id_==0) 
  {
    
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Questions',Type:"2"}});
   this.exam_View=false;
    this.Course_View=true;   
    this.Instruction_Exam_View=false;
  }
  else
  {
    this.Question_Details=Rows[1];
    this.Instruction_Exam_View=true;
    this.Instruction_View=false;    
    this.exam_View=true;
    this.Course_View=false;
    this.submit_view=false;
  this.Question_Index=0;
  // this.Question_Details=Rows[0];
  this.Exam_Duration=Rows[2][0].Exam_Duration;
  this.duration=Rows[2][0].Exam_Duration;          
  
  debugger
  this.Questions_=this.Question_Details[this.Question_Index];
  this.startTime = new Date();
  this.ellapsedTime = "00:00";
  this.timer = setInterval(() => {this.tick(); }, 1000);
}
this.isLoading = false;
},
Rows => {
this.isLoading = false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
});
}
tick() 
{
  const now = new Date();
  const diff = (now.getTime() - this.startTime.getTime()) / 1000;   
  if (diff >= this.duration*60) {
  this.Submit_Exam();      
  }
  this.ellapsedTime = this.parseTime(diff);
}

parseTime(totalSeconds: number) {    
let mins: string | number = Math.floor(totalSeconds / 60);
let secs: string | number = Math.round(totalSeconds % 60);
mins = (mins < 10 ? "0" : "") + mins;
secs = (secs < 10 ? "0" : "") + secs;
return `${mins}:${secs}`;
}
useEffect() {
let scrollRef = 0
window.addEventListener('scroll', () => {
// increase value up to 10, then refresh AOS
scrollRef <= 10 ? scrollRef++ : AOS.refresh()
});
}


Add_Document()
{

if(this.Document_Array==null || this.Document_Array==undefined)
this.Document_Array=[];
if(this.Document_File_Array==null || this.Document_File_Array==undefined)
this.Document_File_Array=[];  

this.Document_File.Document_Name=this.Document_Description;
this.Document_File.Document_File_Name=this.Display_File_Name_;
this.Document_File.New_Entry=1;

if (this.ImageFile != null && this.ImageFile != undefined && this.ImageFile !="")
{

///this.Document_File.Document_Name=this.ImageFile[0].name
this.Document_Array.push(Object.assign({},this.Document_File));
this.Document_File_Array.push(this.ImageFile[0]);
this.Document_Description="";
this.Display_File_Name_="";
this.ImageFile = null

}
else{
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Select File',Type:"3"}});
return;
}

}


Load_Activity_Dropdowns(University_Id)
{
    this.issLoading = true;
    
    this.Student_Service_.Load_Activity_Dropdowns(University_Id).subscribe(Rows => {
        if (Rows != null) {
          
            this.Activity_Data = Rows[0];
            this.Activity_Temp.Activity_Id = 0;
            this.Activity_Temp.Activity_Name = "Select";
            this.Activity_Data.unshift(this.Activity_Temp);
            this.Activity_ = this.Activity_Data[0];         
            this.issLoading = false;
        }
    },
        Rows => {
            this.issLoading = false;
        });
}




Save_Student_front()
{

if (this.Student_.Student_Name== undefined || this.Student_.Student_Name == null|| this.Student_.Student_Name == "" ) 
{
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Student Name', Type: "3" } });
return;
}
if (this.Student_.Mobile== undefined || this.Student_.Mobile == null || this.Student_.Mobile == "" ) 
{
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Mobile number', Type: "3" } });
return;
}
if (this.Student_.Email== undefined || this.Student_.Email == null || this.Student_.Email == "") 
{
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Email', Type: "3" } });
return;
}
if (this.Student_.Password== undefined || this.Student_.Password == null || this.Student_.Password == "" ) 
{
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Enter Password', Type: "3" } });
return;
}
if (this.Student_.Registration_No!= '0') 
{
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Cannot change the details', Type: "3" } });
return;
}


if(this.Student_.Photo == null || this.Student_.Photo == undefined)
{
this.Student_.Photo= "";
this.ImageFile = [];
}
this.Student_.Gender=this.Gender_.Gender_Id;
this.Student_.DOB=this.New_Date(new Date(moment(this.Student_.DOB).format('YYYY-MM-DD')));

// 
if (this.Save_Call_Status == true)
        return;
    else
        this.Save_Call_Status = true;
this.issLoading = true;
this.Student_Service_.Save_Student_front(this.Student_, this.ImageFile_Photo,this.ImageFile_Aadhaar,this.Document_File_Array,this.Document_Array,this.Document_Description,this.ImageFile,this.Display_File_Name_).subscribe(Save_status => {
if(Number(Save_status[0][0].Student_Id_)>0)
{ 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Save_Call_Status = false;     
}
else 
{   
this.Save_Call_Status = false;
}
this.issLoading=false;
},
Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
this.Save_Call_Status = false;
});
}

clr_activity()

{
  this.ActivityDetails_.Activity_Id=0;
  //this.ActivityDetails_.Amount=0;
  this.ActivityDetails_.Descripition='';
  //this.Activity_.Amount=0;
  if(this.Activity_Data!=null && this.Activity_Data != undefined)
    this.Activity_=this.Activity_Data[0];

}


Save_Activity_Details()
{

  if (this.Activity_.Activity_Id== undefined || this.Activity_.Activity_Id == null || this.Activity_.Activity_Id==0 ) 
{
const dialogRef = this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'Select Activity', Type: "3" } });
return;
}
this.ActivityDetails_.Activity_Id=this.Activity_.Activity_Id;
this.ActivityDetails_.Student_Id=this.Student_.Student_Id;
this.ActivityDetails_.Amount=this.Activity_.Amount;
this.issLoading = true;
this.Student_Service_.Save_Activity_Details(this.ActivityDetails_).subscribe(Save_status => {
  
  
if(Number(Save_status[0][0].Activity_Details_Id_)>0)
{ 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
this.Save_Call_Status = false;     
this.Get_Activity_Details(this.ActivityDetails_.Student_Id);
this.clr_activity();
}
else 
{   
this.Save_Call_Status = false;
}
this.issLoading=false;
},
Rows => { 
this.issLoading=false;
const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
this.Save_Call_Status = false;
});
}
Get_Activity_Details(Student_Edit_e)
{
  this.Student_Service_.Get_Activity_Details(Student_Edit_e).subscribe(Rows => {
    
    if (Rows != null) {
      
         this.ActivityDetails_Datas=Rows[0];
      }
       
     },
   Rows => {
  const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
  });
}

Load_Student_Part()
{
    this.issLoading = true;
this.Student_Service_.Load_Student_Part(this.Student_Edit_e).subscribe(Rows => {
    
    if (Rows != null) {
        this.Student_Mark_Part_Data = Rows[0];
        this.issLoading = false;
    }
},
    Rows => {
        this.issLoading = false;
    });
}

close_marklistview()
{
  this.mark_View=true;
  this.Mark_list_view=false;
}
Get_Student_Mark(Part)
{
  this.mark_View=false;
  this.Mark_list_view=true;
    // this.Mark_Hidden=false;
    // this.Add_Mark=true;
    // this.Year_Hidden=true;
    // this.Part_Subject_Data=[];
    // this.Student_Course_Part_.Mark_List_Issue_Date = new Date();
    // this.Student_Course_Part_.Mark_List_Issue_Date =  this.New_Date(this.Student_Course_Part_.Mark_List_Issue_Date);
    // this.Clr_Mark_List();
    // // this.Mark_List_.=Part
    // this.Mark_List_.Part_Id=Part.Part_Id
    // this.Mark_List_.Part_Name=Part.Part_Name
    // this.Mark_List_.Student_Course_Part_Id=Part.Student_Course_Part_Id
    // this.Mark_List_.Year_Id=Part.Year_Id
    // this.Mark_List_.Year_Name=Part.Year_Name
    // this.Mark_List_.Month_Id=Part.Month_Id
    // this.Mark_List_.Month_Name=Part.Month_Name
    // this.Part_Id=this.Mark_List_.Part_Id
    this.Get_Mark_Details_Student(Part.Part_Id)
}

// Activity_Details_Click()
// {
//     this.Activity_.Commission=this.Category_Type_.Commision_Percentage
// }

Load_Student_Exams(Student_Id: number) {
    this.Student_Service_.Search_Exam_Master_By_Student(Student_Id).subscribe(
        (data: any) => {
            if (data && data[0]) { this.Exam_Data = data[0]; }
            else { this.Exam_Data = []; }
        },
        err => { console.error('Error loading exams', err); this.Exam_Data = []; }
    );
}

View_Exam_Details(subject: any) {
    let exam = this.Exam_Data.find(e => e.Subject_Id === subject.Subject_Id);
    if (exam) {
        this.Selected_Exam = exam;
        this.Exam_Details_Hidden = true;
        this.Student_Service_.Get_Exam_Details_By_Master(exam.Exam_Master_Id).subscribe(
            (data: any) => {
                if (data && data[0]) { this.Exam_Details_Data = data[0]; }
                else { this.Exam_Details_Data = []; }
            },
            err => { console.error('Error loading exam details', err); this.Exam_Details_Data = []; }
        );
    } else {
        this.dialogBox.open(DialogBox_Component, { panelClass: 'Dialogbox-Class', data: { Message: 'No exam data found for this subject.', Type: "3" } });
    }
}

Back_To_Exam_List() {
    this.Exam_Details_Hidden = false;
    this.Selected_Exam = null;
}
}
