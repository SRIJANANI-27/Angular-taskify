
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './client/admin/admin.component';
import { AsecurityComponent } from './client/admin/asecurity/asecurity.component';
import { AsettingsComponent } from './client/admin/asettings/asettings.component';
import { AusersComponent } from './client/admin/ausers/ausers.component';
import { LoginComponent } from './client/login/login.component';
import { ChartperformanceComponent } from './client/manager/chartperformance/chartperformance.component';
import { ManagerComponent } from './client/manager/manager.component';
import { ManagersubmissionComponent } from './client/manager/managersubmission/managersubmission.component';
import { MassigntaskComponent } from './client/manager/massigntask/massigntask.component';
import { MdashboardComponent } from './client/manager/mdashboard/mdashboard.component';
import { MmeetingComponent } from './client/manager/mmeeting/mmeeting.component';
import { MperformnaceComponent } from './client/manager/mperformnace/mperformnace.component';
import { GrpreportComponent } from './client/manager/mreport/grpreport/grpreport.component';
import { IndireportComponent } from './client/manager/mreport/indireport/indireport.component';
import { MreportComponent } from './client/manager/mreport/mreport.component';
import { TaskreportComponent } from './client/manager/mreport/taskreport/taskreport.component';
import { ProjecttComponent } from './client/manager/projectt/projectt.component';
import { CollaborationComponent } from './client/team/collaboration/collaboration.component';
import { DiscussionroomComponent } from './client/team/discussionroom/discussionroom.component';
import { GrpsComponent } from './client/team/grps/grps.component';
import { GrptaskComponent } from './client/team/grptask/grptask.component';
import { IndividualComponent } from './client/team/individual/individual.component';
import { MeetingComponent } from './client/team/meeting/meeting.component';
import { TeamComponent } from './client/team/team.component';
import { TeammembersComponent } from './client/team/teammembers/teammembers.component';
import { TprojectComponent } from './client/team/tproject/tproject.component';
import { AssigntaskComponent } from './client/user/assigntask/assigntask.component';
import { CreatetaskComponent } from './client/user/createtask/createtask.component';
import { LatesubmissionComponent } from './client/user/latesubmission/latesubmission.component';
import { PendingComponent } from './client/user/pending/pending.component';
import { ProfileComponent } from './client/user/profile/profile.component';
import { StikiesComponent } from './client/user/stikies/stikies.component';
import { SubmissionComponent } from './client/user/submission/submission.component';
import { TodocardComponent } from './client/user/todocard/todocard.component';
import { UserComponent } from './client/user/user.component';
import { ViewcardsComponent } from './client/user/viewcards/viewcards.component';
import { AdashboardComponent } from './client/admin/adashboard/adashboard.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'admin', component: AdminComponent, children: [
      {path:'',component:AdashboardComponent},
      {path:'profile',component:ProfileComponent},
      {path:'adashboard',component:AdashboardComponent},
      {path:'ausers',component:AusersComponent},
      {path:'asettings',component:AsettingsComponent},
      {path:'asecurity',component:AsecurityComponent}
  ]},

    
  {path: 'manager', component: ManagerComponent, children: [
    {path:'',component:MdashboardComponent},
    {path:'dashboard',component:MdashboardComponent},
    {path:'assigntasks',component:MassigntaskComponent},
    {path:'report',component:MreportComponent},
    {path:'performance',component:MperformnaceComponent},
    {path:'meeting',component:MmeetingComponent},
    {path:'grpreport',component:GrpreportComponent},
    {path:'indireport',component:IndireportComponent},
    {path:'taskreport',component:TaskreportComponent},
    {path:'project',component:ProjecttComponent},
    {path:'viewsubmission',component:ManagersubmissionComponent},
    {path:'chatperformance',component:ChartperformanceComponent},
    {path:'profile',component:ProfileComponent}
  

    ]},


  {path: 'user', component: UserComponent, children: [
      {path:'',component:AssigntaskComponent},
      {path:'assignedtasks',component:AssigntaskComponent},
      {path:'createtasks',component:CreatetaskComponent},
      {path:'stikies',component:StikiesComponent},
      {path:'submission',component:SubmissionComponent},
      {path:'viewcards',component:ViewcardsComponent},
      {path:'todocard',component:TodocardComponent},
      {path:'latesubmission',component:LatesubmissionComponent},
      {path:'pending',component:PendingComponent},
      {path:'profile',component:ProfileComponent}
  
  
    ]},
    {path: 'team', component: TeamComponent, children: [
      {path:'',component:CollaborationComponent},
      {path:'collaboration',component:CollaborationComponent},
      {path:'discussion-room',component:DiscussionroomComponent},
      {path:'teammembers',component:TeammembersComponent},
      {path:'individual',component:IndividualComponent},
      {path:'meeting',component:MeetingComponent},
      {path :'project',component:TprojectComponent},
      {path : 'grouptask',component:GrptaskComponent},
      {path : 'teams',component:GrpsComponent}




    ]}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
