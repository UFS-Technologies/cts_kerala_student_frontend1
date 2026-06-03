import { Injectable } from '@angular/core';
import { BaseApi } from './_BaseApi.Service';
//import { LoginInterface } from '../interfaces/Genereic-Interface';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: BaseApi) {
    }
   
    Login(userData): Promise<any> {
        return this.http.get('Login/Login_Check/' + userData.Email  +'/' + userData.Password);
       // return this.http.get('Login/Login_Check/', +userData.userName +'/' + userData.password);
    }

    Student_Login_Check(userData): Promise<any> {
        return this.http.get('Login/Student_Login_Check/' + userData.Email  +'/' + userData.Password);
       // return this.http.get('Login/Login_Check/', +userData.userName +'/' + userData.password);
    }

    Agent_Login(userData): Promise<any> {
        return this.http.get('Login/Agent_Login/' + userData.Email  +'/' + userData.Password);
       // return this.http.get('Login/Login_Check/', +userData.userName +'/' + userData.password);
    }
    Candidate_Login(userData): Promise<any> {
        
        return this.http.get('Login/Candidate_Login/' + userData.Email  +'/' + userData.Password);
       // return this.http.get('Login/Login_Check/', +userData.userName +'/' + userData.password);
    }

    Forgetpass(Forget_Data): Promise<any> {
        return this.http.get('Login/Forget_Password_Student/' + Forget_Data.Email  );
       // return this.http.get('Login/Login_Check/', +userData.userName +'/' + userData.password);
    }
}
