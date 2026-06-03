import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import{UserData} from '../../services/user-data';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {
  showStaticNav = false;
  User_Name:string;
  User_Name_ob: Observable<string>;
  Logined:number;
  Student_Edit_e:number;
  islogined: Observable<number>;
  constructor(private UserData:UserData,private cookieService: CookieService,private router: Router ,  ) { }
  ngOnInit(): void
   {
    this.User_Name=localStorage.getItem('User_Name_Login');
    this.Logined = +localStorage.getItem('Logined');
    //this.Student_Edit_e=+localStorage.getItem('Student_Id_Login')
    this.User_Name_ob = this.UserData.getLogin_name()
    this.islogined = this.UserData.getLogin_status()
    //this.logout();
  }
  @HostListener('window:scroll', ['$event'])
  scrollEvent(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    this.showStaticNav = window.pageYOffset > 24;
  }
  logout() {

    this.UserData.logout();
    localStorage.removeItem("User_Name");
    this.router.navigateByUrl('home');
    // let currentUrl =  this.router.navigateByUrl('home');
    // this.User_Name =  localStorage.getItem('User_Name_Login');
    // this.Logined = +localStorage.getItem('Logined');

    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate([currentUrl]);
  }
  Candidate_Profile_Click()
  {
    this.router.navigateByUrl('Candidate');
  }
  Student_Profile_Click()
  {
    this.router.navigateByUrl('Student');
  }
  Student_Tab_Click(tab: number) {
    this.router.navigate(['/Student'], { queryParams: { tab: tab } });
  }
  //  Home_Click()
//  {
//     this.router.navigateByUrl('Job');
//   }

  isActive(path: string): boolean {
    return this.router.url.split('?')[0] === path;
  }

Profile_view()
{
  this.router.navigateByUrl('Student');
}
Home_Click()
 {
    this.router.navigateByUrl('home');
  }

Student_Login_Click()
 {
    this.router.navigateByUrl('Student_Login');
  }
  // Agent_Click()
  // {
  //   this.router.navigateByUrl('Agent');
  // }
  Agent_Click()
  {
    this.router.navigateByUrl('Agenthome');
  }
  // Student_Click()
  // {
  //   this.router.navigateByUrl('home');
  // }
  Candidate_Click()
  {
    this.router.navigateByUrl('Job');
  }
  About_Click()
  {
    this.router.navigateByUrl('About_Us');
  }

  Association_Click()
  {
    this.router.navigateByUrl('Association');
  }

  Skill_Diploma_Click()
  {
    this.router.navigateByUrl('Skill_Diploma');
  }

  Skill_Identity_Programs_Click()
  {
    this.router.navigateByUrl('Skill_Identity_Programs');
  }

  Skill_Proficiency_Programs_Click()
  {
    this.router.navigateByUrl('Skill_Proficiency_Programs');
  }

  Trade_Competency_Programs_Click()
  {
    this.router.navigateByUrl('Trade_Competency_Programs');
  }

  University_Program_Click()
  {
    this.router.navigateByUrl('University_Program');
  }

  Recognitions_Click()
  {
    this.router.navigateByUrl('Recognitions');
  }

  C_Tech_Skill_Training_Centres_Click()
  {
    this.router.navigateByUrl('C_Tech_Skill_Training_Centres');
  }

  Online_Verification_Click()
  {
    this.router.navigateByUrl('Online_Verification');
  }

  Contact_Us_Click()
  {
    this.router.navigateByUrl('Contact_Us');
  }

  // New_Centre_Registration_Click()
  // {
  //   this.router.navigateByUrl('New_Centre_Registration');
  // }




  // reloadComponent() {
  //   let currentUrl = this.router.url;
  //       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //       this.router.onSameUrlNavigation = 'reload';
  //       this.router.navigate([currentUrl]);
  //   }
}

