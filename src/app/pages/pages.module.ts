import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Job',
    loadChildren: () => import('./Job/Job.module').then(m => m.JobModule)
  },
  {
    path: 'Candidate',
    loadChildren: () => import('./Candidate/Candidate.module').then(m => m.candidateModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'Agent',
    loadChildren: () => import('./Agent/Agent.module').then(m => m.AgentModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'Student',
    loadChildren: () => import('./Student/Student.module').then(m => m.StudentModule)
  },
  {
    path: 'Agenthome',
    loadChildren: () => import('./Agenthome/Agenthome.module').then(m => m.AgenthomeModule)
  },
  {
    path: 'About_Us',
    loadChildren: () => import('./About_Us/About_Us.module').then(m => m.About_UsModule)
  },
  {
    path: 'Association',
    loadChildren: () => import('./Association/Association.module').then(m => m.AssociationModule)
  },
  {
    path: 'Skill_Diploma',
    loadChildren: () => import('./Skill_Diploma/Skill_Diploma.module').then(m => m.Skill_DiplomaModule)
  },

  {
    path: 'Recognitions',
    loadChildren: () => import('./Recognitions/Recognitions.module').then(m => m.RecognitionsModule)
  },

  {
    path: 'C_Tech_Skill_Training_Centres',
    loadChildren: () => import('./C_Tech_Skill_Training_Centres/C_Tech_Skill_Training_Centres.module').then(m => m.C_Tech_Skill_Training_CentresModule)
  },

  {
    path: 'Online_Verification',
    loadChildren: () => import('./Online_Verification/Online_Verification.module').then(m => m.Online_VerificationModule)
  },

  {
    path: 'Contact_Us',
    loadChildren: () => import('./Contact_Us/Contact_Us.module').then(m => m.Contact_UsModule)
  },
  {
    path: 'Student_Login',
    loadChildren: () => import('./Student_Login/Student_Login.module').then(m => m.Student_LoginModule)
  },
  { path: 'Skill_Identity_Programs', loadChildren: () => import('./skill-identity-programs/skill-identity-programs.module').then(m => m.SkillIdentityProgramsModule) },
  { path: 'Skill_Proficiency_Programs', loadChildren: () => import('./skill-proficiency-programs/skill-proficiency-programs.module').then(m => m.SkillProficiencyProgramsModule) },
  { path: 'Trade_Competency_Programs', loadChildren: () => import('./trade-competency-programs/trade-competency-programs.module').then(m => m.TradeCompetencyProgramsModule) },
  { path: 'University_Program', loadChildren: () => import('./university-program/university-program.module').then(m => m.UniversityProgramModule) },

  // {
  //   path: 'New_Centre_Registration',
  //   loadChildren: () => import('./New_Centre_Registration/New_Centre_Registration.module').then(m => m.New_Centre_RegistrationModule)
  // },

  // {
  //   path: 'New_Centre_Registration',
  //   loadChildren: () => import('./New_Centre_Registration/New_Centre_Registration.module').then(m => m.New_Centre_RegistrationModule)
  // },



  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})

export class PagesModule { }
