import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import {ExamService} from './exam.service';
import { ExitComponent } from './exit/exit.component';
import { InstructionComponent } from './instruction/instruction.component'
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', pathMatch: 'full',component:HomeComponent },
  {path:'questions',component: QuestionsComponent},
  {path:'exit',component:ExitComponent},
  {path:'instruction',component:InstructionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    DashboardComponent,
    QuestionsComponent,
    ExitComponent,
    InstructionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
