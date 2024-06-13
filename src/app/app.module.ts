import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { NgChartsModule } from 'ng2-charts';
import { AdashboardComponent } from './client/admin/adashboard/adashboard.component';
import { AdminComponent } from './client/admin/admin.component';
import { AsecurityComponent } from './client/admin/asecurity/asecurity.component';
import { AsettingsComponent } from './client/admin/asettings/asettings.component';
import { AsidenavComponent } from './client/admin/asidenav/asidenav.component';
import { AusersComponent } from './client/admin/ausers/ausers.component';
import { DychartComponent } from './client/admin/dychart/dychart.component';
import { LoginComponent } from './client/login/login.component';
import { AsiignComponent } from './client/manager/asiign/asiign.component';
import { ChartComponent } from './client/manager/chart/chart.component';
import { Chart2Component } from './client/manager/chart/chart2/chart2.component';
import { Chart3Component } from './client/manager/chart/chart3/chart3.component';
import { ChartperformanceComponent } from './client/manager/chartperformance/chartperformance.component';
import { ManagerComponent } from './client/manager/manager.component';
import { ManagersubmissionComponent } from './client/manager/managersubmission/managersubmission.component';
import { Tab3Component } from './client/manager/managersubmission/tab3/tab3.component';
import { MassigntaskComponent } from './client/manager/massigntask/massigntask.component';
import { MdashboardComponent } from './client/manager/mdashboard/mdashboard.component';
import { ProjectviewComponent } from './client/manager/mdashboard/projectview/projectview.component';
import { MformComponent } from './client/manager/mmeeting/mform/mform.component';
import { MmeetingComponent } from './client/manager/mmeeting/mmeeting.component';
import { NavComponent } from './client/manager/mmeeting/nav/nav.component';
import { IndividualperformnaceComponent } from './client/manager/mperformnace/individualperformnace/individualperformnace.component';
import { MperformnaceComponent } from './client/manager/mperformnace/mperformnace.component';
import { GrpreportComponent } from './client/manager/mreport/grpreport/grpreport.component';
import { IndireportComponent } from './client/manager/mreport/indireport/indireport.component';
import { MreportComponent } from './client/manager/mreport/mreport.component';
import { TaskreportComponent } from './client/manager/mreport/taskreport/taskreport.component';
import { MsideComponent } from './client/manager/mside/mside.component';
import { ProjecttComponent } from './client/manager/projectt/projectt.component';
import { CardsComponent } from './client/team/collaboration/cards/cards.component';
import { CollaborationComponent } from './client/team/collaboration/collaboration.component';
import { TableComponent } from './client/team/collaboration/table/table.component';
import { ChatComponent } from './client/team/discussionroom/chat/chat.component';
import { DiscussionroomComponent } from './client/team/discussionroom/discussionroom.component';
import { GrpsComponent } from './client/team/grps/grps.component';
import { GrptaskComponent } from './client/team/grptask/grptask.component';
import { IndividualComponent } from './client/team/individual/individual.component';
import { MeetingComponent } from './client/team/meeting/meeting.component';
import { TeamComponent } from './client/team/team.component';
import { MembersComponent } from './client/team/teammembers/members/members.component';
import { TeammembersComponent } from './client/team/teammembers/teammembers.component';
import { TprojectComponent } from './client/team/tproject/tproject.component';
import { TtableComponent } from './client/team/tproject/ttable/ttable.component';
import { TteamComponent } from './client/team/tproject/tteam/tteam.component';
import { TsidenavComponent } from './client/team/tsidenav/tsidenav.component';
import { AssigntaskComponent } from './client/user/assigntask/assigntask.component';
import { CreatetaskComponent } from './client/user/createtask/createtask.component';
import { TodoComponent } from './client/user/createtask/todo/todo.component';
import { TodolistComponent } from './client/user/createtask/todolist/todolist.component';
import { LatesubmissionComponent } from './client/user/latesubmission/latesubmission.component';
import { PendingComponent } from './client/user/pending/pending.component';
import { PreviousComponent } from './client/user/pending/previous/previous.component';
import { ProfileComponent } from './client/user/profile/profile.component';
import { StikiesComponent } from './client/user/stikies/stikies.component';
import { ProgressComponent } from './client/user/submission/progress/progress.component';
import { SubmissionComponent } from './client/user/submission/submission.component';
import { ViewsubmissionComponent } from './client/user/submission/viewsubmission/viewsubmission.component';
import { TodocardComponent } from './client/user/todocard/todocard.component';
import { UserComponent } from './client/user/user.component';
import { UsidenavComponent } from './client/user/usidenav/usidenav.component';
import { ScardsComponent } from './client/user/viewcards/scards/scards.component';
import { ViewcardsComponent } from './client/user/viewcards/viewcards.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    ManagerComponent,
    UserComponent,
    AsidenavComponent,
    AdashboardComponent,
    AsecurityComponent,
    AsettingsComponent,
    AusersComponent,
    AssigntaskComponent,
    CreatetaskComponent,
    UsidenavComponent,
    StikiesComponent,
    SubmissionComponent,
    TodolistComponent,
    ProgressComponent,
    ViewsubmissionComponent,
    TeamComponent,
    TsidenavComponent,
    CollaborationComponent,
    DiscussionroomComponent,
    TeammembersComponent,
    IndividualComponent,
    MeetingComponent,
    CardsComponent,
    TableComponent,
    ChatComponent,
    MembersComponent,
    ViewcardsComponent,
    ScardsComponent,
    TodocardComponent,
    LatesubmissionComponent,
    TprojectComponent,
    TteamComponent,
    TtableComponent,
    GrptaskComponent,
    GrpsComponent,
    PendingComponent,
    PreviousComponent,
    MsideComponent,
    MdashboardComponent,
    MassigntaskComponent,
    MreportComponent,
    MperformnaceComponent,
    MmeetingComponent,
    ProjectviewComponent,
    GrpreportComponent,
    IndireportComponent,
    TaskreportComponent,
    ProjecttComponent,
    MformComponent,
    NavComponent,
    AsiignComponent,
    IndividualperformnaceComponent,
    ManagersubmissionComponent,
    Tab3Component,
    TodoComponent,
    ChartComponent,
    ChartperformanceComponent,
    Chart2Component,
    Chart3Component,
    ProfileComponent,
    DychartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,  
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    CalendarModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
