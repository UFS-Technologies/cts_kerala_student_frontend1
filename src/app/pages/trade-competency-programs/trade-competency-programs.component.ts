import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-competency-programs',
  templateUrl: './trade-competency-programs.component.html',
  styleUrls: ['./trade-competency-programs.component.css']
})
export class TradeCompetencyProgramsComponent implements OnInit {

  issLoading = false;
  constructor(private router: Router) { }
  ngOnInit(): void {
    let top = document.getElementById('Topdiv');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
  Skill_Diploma_Click() { this.router.navigateByUrl('Skill_Diploma'); }
  Skill_Identity_Programs_Click() { this.router.navigateByUrl('Skill_Identity_Programs'); }
  Skill_Proficiency_Programs_Click() { this.router.navigateByUrl('Skill_Proficiency_Programs'); }
  Trade_Competency_Programs_Click() { this.router.navigateByUrl('Trade_Competency_Programs'); }
  University_Program_Click() { this.router.navigateByUrl('University_Program'); }
  Student_Login_Click() { this.router.navigateByUrl('Student_Login'); }
  Online_Verification_Click() { this.router.navigateByUrl('Online_Verification'); }
  Candidate_Click() { this.router.navigateByUrl('Job'); }

}