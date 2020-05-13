import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllQuestionComponent } from './view-all-question/view-all-question.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';


const routes: Routes = [
  {path:'ViewAll',component:ViewAllQuestionComponent},
  {path:'AddNew',component:AddNewQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
