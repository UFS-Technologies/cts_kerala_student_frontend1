import { Injectable } from '@angular/core';
import { AuthenticationService } from './Authenticatiuon.Service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
logined:boolean;
  User_name: BehaviorSubject<string> = new BehaviorSubject<string>('');
  Login_status: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(
    public auth: AuthenticationService,private cookieService: CookieService,private router: Router
  ) { }
getLogin_status()
{
  var Logined_temp = localStorage.getItem('Logined');
  if (Logined_temp != '' && Logined_temp != undefined)
    this.Login_status = new  BehaviorSubject<number>(parseInt(Logined_temp));
  return this.Login_status.asObservable();
}
  getLogin_name() 
  {
    

    var User_Name_temp = localStorage.getItem('User_Name_Login');
    if (User_Name_temp != '' && User_Name_temp != undefined)
      this.User_name = new BehaviorSubject<string>(User_Name_temp);

    return this.User_name.asObservable();
  }
  afterLogin = (httpData) => 
  {

    if (httpData.status === 'error')
     {
      return httpData.message;
    } 
    else if (httpData[0].length >0) 
    {         
      var id=httpData[0];
    
      this.User_name.next(id[0].Student_Name)
      this.Login_status.next(1)
      localStorage.setItem('Access_Token',httpData.token);
      localStorage.setItem('Student_Id_Login',id[0].Student_Id);
      localStorage.setItem('User_Name_Login',id[0].Student_Name);
      localStorage.setItem('Agent_Id_Login',"0");
      localStorage.setItem('Logined',"1");
      this.setToken(httpData.access_token);
      return true;
    }
    else
    {
      return httpData.message;
    }
  }
  afterAgent_Login = (httpData) => {

    if (httpData.status === 'error')
     {
      return httpData.message;
    } 
    else if (httpData[0].length >0) 
    { 
      var id=httpData[0];
      localStorage.setItem('Access_Token',httpData.token);
      localStorage.setItem('Agent_Id_Login',id[0].Client_Accounts_Id);
      localStorage.setItem('User_Name_Login',id[0].Client_Accounts_Name);
      this.User_name.next(id[0].Client_Accounts_Name)
      this.Login_status.next(1)
      localStorage.setItem('Student_Id_Login',"0");
      localStorage.setItem('Logined',"1");
      //localStorage.setItem('User_Type',id[0].User_Type);
      this.setToken(httpData.access_token);
      return true;
    }
    else
    {
      return httpData.message;
    }
  }

  afterCandidate_Login = (httpData) => 
  {

    if (httpData.status === 'error')
     {
      return httpData.message;
    } 
    else if (httpData[0].length >0) 
    {         
      var id=httpData[0];
      console.log(id)
      ;
      this.User_name.next(id[0].Candidate_Name)
      this.Login_status.next(1)
      localStorage.setItem('Access_Token',httpData.token);
      
      localStorage.setItem('Candidate_Id_Login',id[0].Candidate_Id);
      localStorage.setItem('Candidate_Name_Login',id[0].Candidate_Name);
      // localStorage.setItem('Candidate_Id_Login',"0");
      localStorage.setItem('Logined',"1");
      this.setToken(httpData.access_token);
      return true;
    }
    else
    {
      return httpData.message;
    }
  }

  Candidate_login(loginData): Promise<any> 
  {

    return this.auth.Candidate_Login(loginData).then(this.afterCandidate_Login);
  }

  login(loginData): Promise<any> 
  {

    return this.auth.Login(loginData).then(this.afterLogin);
  }

  Student_Login_Check(loginData): Promise<any> 
  {

    return this.auth.Student_Login_Check(loginData).then(this.afterLogin);
  }

  Agent_login(loginData): Promise<any> {

    return this.auth.Agent_Login(loginData).then(this.afterAgent_Login);
  }

  // Candidate_Login(loginData): Promise<any> {

  //   return this.auth.Candidate_Login(loginData).then(this.afterAgent_Login);
  // }

  Forgetpass(Forget_Data): Promise<any> {

    return this.auth.Forgetpass(Forget_Data);
  }
  isLoggedIn(): boolean {
    return (localStorage.getItem('Access_Token') ? true : false);
  }
  logout() {
    
    this.User_name.next('')
    this.Login_status.next(0)
    localStorage.clear();
   
  }
  setToken(username: string) {
    return localStorage.setItem('token', username);
  }
  getToken(): Promise<any> {
    return localStorage.get('token');
  }



}
