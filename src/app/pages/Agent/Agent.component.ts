import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agent_Service } from '../../services/Agent.Service';
import { DialogBox_Component } from '../DialogBox/DialogBox.component';
import { Agent } from '../../models/Agent';
// import {MatDialog} from '@angular/material';
// import { ROUTES,Get_Page_Permission } from '../../../components/sidebar/sidebar.component';
import { Status } from '../../models/Status';
import { Mode } from '../../models/Mode';
import { Client_Accounts } from '../../models/Client_Accounts';
import { Receipt_Voucher } from '../../models/Receipt_Voucher';
import { Category } from '../../models/Category';
import { MatDialog } from '@angular/material/dialog';

// import * as _moment from 'moment';
// import { default as _rollupMoment } from 'moment';
// export const MY_FORMATS = {
// parse: {
// dateInput: 'DD/MM/YYYY',
// },
// display: {
//     dateInput: 'DD/MM/YYYY',monthYearLabel: 'MMM YYYY',dateA11yLabel: 'DD/MM/YYYY',monthYearA11yLabel: 'MMMM YYYY',
// },
// };
// const moment = _rollupMoment || _moment;

@Component({
selector: 'app-Agent',
templateUrl: './Agent.component.html',
styleUrls: ['./Agent.component.css']
})
export class AgentComponent implements OnInit 
{
    Agent_Data:Agent[]
    Agent_:Agent= new Agent();
    Agent_Name_Search:string;
    Entry_View:boolean=true;
    EditIndex: number;
    Total_Entries: number;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    issLoading: boolean;
    Permissions: any;
    Agent_Edit:boolean;
    Agent_Save:boolean;
    Agent_Delete:boolean;
    myInnerHeight: number;
    Approval_Status: Status = new Status();
    Category_Id: Category = new Category();
    Photo: Agent = new Agent();
    Agent_Id_Edit:number;

    Status_Data: Status[]
    Status_Temp:Status= new Status();

    // Category_Data: Category[]
    Category_Temp:Category= new Category();

    Category_Data:Category[]
    Category_Type_:Category= new Category();
    Category_Type_Temp:Category= new Category();

    Registration_Visiblility:boolean=true;
    Remove_Registration_Visibility:boolean=true;

    Registration_Permissions: any;
    Remove_Registration_Permissions: any;

    Login_User:string="0";
    tab_view:boolean=true;

    profile_View:boolean=true;
    Receipt_View:boolean=false;
    Receipt_Click_Status:boolean
    year: any;
    month: any;
    day: any;
    date: any;
    Search_FromDate:Date=new Date();

    Search_ToDate:Date=new Date();
    ImageFile: any;
    file: File;
    Agentfile:string;
    AgentReceipt_View:boolean=false;
    Receipt_History_View:boolean=false;

    Mode:Mode=new Mode();
    Mode_Temp:Mode=new Mode();
    Mode_Data:Mode[]

    Receipt_Voucher_:Receipt_Voucher=new Receipt_Voucher;
    Receipt_Voucher_Data:Receipt_Voucher[]

    Client_Accounts_:Client_Accounts=new Client_Accounts;
    Client_Accounts_Temp:Client_Accounts=new Client_Accounts;
    Client_Accounts_Data:Client_Accounts[]

    Receipt_Voucher_Index:number=-1;
    Fees_Tab_Permission: any;
    Fees_Tab_View: boolean = false;
    Fees_Tab_Edit: boolean = false;
    Registration: boolean = false;
constructor(public Agent_Service_:Agent_Service, private route: ActivatedRoute, private router: Router,public dialogBox: MatDialog) { }
// ,public dialogBox: MatDialog
ngOnInit() 
{
    
    this.Login_User=localStorage.getItem(("Login_User"));
    this.Page_Load();
}
Page_Load()
{
    this.Clr_Agent();
    this.tab_view = true;
    this.profile_View = false;
    this.AgentReceipt_View=false;
    this.Receipt_History_View=false;
    // this.Search_Agent();
    this.Entry_View=false;
    this.Remove_Registration_Visibility=false;
    this.Registration_Visiblility=false
 }
Create_New()
{
    this.Entry_View = true;
    this.profile_View=true;
    this.AgentReceipt_View=false;
    this.Receipt_History_View=false;
    // this.Receipt_View=true;
    this.Registration_Visiblility=true;
    this.Clr_Agent();
}
Close_Click()
{
    this.Entry_View = false;
    this.Search_Agent();
    this.Clr_Agent();
    this.router.navigateByUrl('Agent');
}
trackByFn(index, item) 
{
return index;
}
Clr_Agent()
{
    this.Agent_Id_Edit=0;
    this.Agent_.Agent_Id=0;
    this.Agent_.Agent_Name="";
    this.Agent_.Address1="";
    this.Agent_.Address2="";
    this.Agent_.Address3="";
    this.Agent_.Address4="";
    this.Agent_.Pincode="";
    this.Agent_.Phone="";
    this.Agent_.Mobile="";
    this.Agent_.Whatsapp="";
    this.Agent_.Gender=0;
    this.Agent_.Email="";
    this.Agent_.Center_Code="";
    this.Agent_.Center_Name="";
    this.Agent_.Agent_Fees=0;
    this.Agent_.Alternative_Email="";
    this.Agent_.Comm_Address1="";
    this.Agent_.Comm_Address2="";
    this.Agent_.Comm_Address3="";
    this.Agent_.Comm_Address4="";
    this.Agent_.Comm_Mobile="";
    this.Agent_.Comm_Pincode="";
    this.Agent_.User_Name="";
    this.Agent_.Password="";
    this.Agent_.Photo="";
    this.Agent_.GSTIN="";
    this.Agent_.Category_Id=0;
    this.Agent_.Commission=0;
    this.Agent_.User_Id=0;
    this.Category_Type_=null;

    this.Remove_Registration_Visibility=false
    this.Registration_Visiblility=false
}
Category_Click()
{
    this.Agent_.Commission=this.Category_Type_.Commision_Percentage
}
// Load_Agent_Dropdowns()
//     {
//     this.Agent_Service_.Load_Agent_Dropdowns().subscribe(Rows => {    
//     if (Rows != null) {

//     this.Category_Data= Rows.Category;        
//     this.Category_Type_Temp.Category_Id = 0;
//     this.Category_Type_Temp.Category_Name = "Select";
//     this.Category_Data.unshift(this.Category_Type_Temp);
//     this.Category_Type_=this.Category_Data[0];
//     }
//     this.issLoading = false;
//     },
//     Rows => {
//     this.issLoading = false;
//       });
// }
Load_Category_Commission(Category_Id_)
{
    if(this.Category_Data==undefined || this.Category_Data.length==0)
    {
    this.issLoading = true;
    this.Agent_Service_.Load_Category_Commission(Category_Id_).subscribe(Rows => {
    if (Rows != null) {
    // this.Category_Data = Rows[0];
    this.Agent_.Commission = Rows[0];
    this.issLoading = false;
    }

    },
    Rows => {
    this.issLoading = false;
    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
    });
    }
}
Search_Agent()
{
    this.issLoading=true;
    this.Agent_Service_.Search_Agent(this.Agent_Name_Search).subscribe(Rows => {
    this.Agent_Data=Rows[0];
    this.Total_Entries=this.Agent_Data.length;
    if(this.Agent_Data.length==0)
    {
    this.issLoading=false;
    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'No Details Found',Type:"3"}});
    }
    this.issLoading=false;
    },
    Rows => { 
    this.issLoading=false;
    // const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Error Occured',Type:"2"}});
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
File_Change(event)
{
  
    this.file = event.target.files[0]; 
    this.ImageFile = this.file;
    this.Agentfile=this.file.name;
    this.Agent_.Photo =this.ImageFile.name;
}
Save_Agent()
{

    if(this.Agent_.Agent_Name==null || this.Agent_.Agent_Name==undefined || this.Agent_.Agent_Name==""){
     const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data: { Message: 'please add Agent Name', Type: "3" }});
    return;
    }
    if(this.Agent_.Center_Name==null || this.Agent_.Center_Name==undefined || this.Agent_.Center_Name=="")
    {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data: { Message: 'please add Center Name', Type: "3" }});
       return;
     }
       if(this.Agent_.Mobile==null || this.Agent_.Mobile==undefined || this.Agent_.Mobile=="")
       {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data: { Message: 'please add Mobile', Type: "3" }});
       return;
       }
       if(this.Agent_.Email==null || this.Agent_.Email==undefined || this.Agent_.Email=="")
       {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data: { Message: 'please add Email', Type: "3" }});
       return;
       }
       if(this.Agent_.Password==null || this.Agent_.Password==undefined || this.Agent_.Password=="")
       {
        const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data: { Message: 'please add Password', Type: "3" }});
       return;
       }
   
    if(this.Agent_.Photo == null || this.Agent_.Photo == undefined){
    this.Agent_.Photo = "";
    this.ImageFile = [];
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data: { Message: 'please upload Photo', Type: "3" }});
     return;
    } 
    this.issLoading=true;
    //this.Agent_.Approval_Status= this.Approval_Status.Status_Id;
    // this.Agent_.Category_Id= this.Category_Type_.Category_Id;
    // this.Agent_.Photo= this.Photo.Photo;
    
this.Agent_Service_.Save_Agent(this.Agent_).subscribe(Save_status => {

    Save_status=Save_status[0];
    if(Number(Save_status[0].Agent_Id_)>0)
    {
    this.issLoading=false; 
    this.Agent_.Agent_Id=Save_status[0].Agent_Id_
    this.Agent_.Photo=this.Photo.Photo
    const dialogRef = this.dialogBox.open( DialogBox_Component, {panelClass:'Dialogbox-Class',data:{Message:'Saved',Type:"false"}});
    this.Clr_Agent();
    }
    else{
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
Edit_Agent(Agent_e:Agent,index)
{
    this.tab_view=true;
    this.profile_View=true;
    this.AgentReceipt_View=false;
    this.Receipt_History_View=false;
    this.Entry_View=true;
    this.Agent_=Agent_e;
    this.Agent_Id_Edit=Agent_e.Agent_Id;
    this.Agent_=Object.assign({},Agent_e);

    this.Remove_Registration_Visibility=false
    this.Registration_Visiblility=false
    // for(var i=0;i<this.Category_Data.length;i++)
    // {
    //     if(this.Category_Data[i].Category_Id==this.Agent_.Category_Id)
    //     {
    //         this.Category_Data=this.Category_Data[i];
    //     }
    // }
    this.Registration=this.Agent_.Is_Registered;
    if(this.Agent_.Is_Registered==true)
    {
    if(this.Remove_Registration_Permissions!=undefined && this.Remove_Registration_Permissions!=null)

    if(this.Remove_Registration_Permissions.View==true)
    this.Remove_Registration_Visibility=true;
    }
    else
    {
    if(this.Registration_Permissions!=undefined &&this.Registration_Permissions!=null)
    if(this.Registration_Permissions.View==true)
    this.Registration_Visiblility=true;
    }
    for(var i=0;i<this.Category_Data.length;i++)
    {
    if(this.Category_Data[i].Category_Id==this.Agent_.Category_Id)
    {
    this.Category_Type_=this.Category_Data[i];
    }
    }
}
Tab_Click(Current_tab)
{
    
    this.profile_View=false;
    this.AgentReceipt_View=false;
    if(Current_tab==1)
    this.profile_View=true;
    else if(Current_tab==2)
    {
    this.AgentReceipt_View=true;

    if(this.Receipt_Click_Status==false)
    {
    this.Receipt_Click_Status=true
    // this.Load_Receipt_tab();
    }
    }
}





}
