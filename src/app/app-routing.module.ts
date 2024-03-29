import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { QuizStartComponent } from './pages/user/quiz-start/quiz-start.component';

const routes: Routes = [
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full'
},
{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},
{
  path:'admin',
  component:DashboardComponent,
  canActivate:[AdminGuard],
  /* pathMatch:'full', */
  children:[
    {
      path:'',
      component:WelcomeComponent
    },
    {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'categories',
    component:ViewCategoriesComponent
  },
  {
  path:'add-category',
  component:AddCategoryComponent
  },
  {
    path:'quizzes',
    component:ViewQuizzesComponent
  },
  {
    path:'add-quiz',
    component:AddQuizComponent
  },
  {
    path:'update-quiz/:qId',
    component:UpdateQuizComponent
  },
  {
    path:'view-questions/:id/:title',
    component:ViewQuizQuestionsComponent
  },
  {
    path:'add-question/:qid/:title',
    component:AddQuestionComponent
  }
]
  //configure all admin component here

},
{
  path:'user-dashboard',
  component:UserDashboardComponent,
  // pathMatch:'full',
  children:[
    {
      path:':cat_id',
      component:LoadQuizComponent
    },
    {
      path:'instructions/:qId',
      component:InstructionsComponent
    }

  ],
  canActivate:[NormalGuard]
},

{
    path:'quiz-start/:qId',
    component:QuizStartComponent,
    canActivate:[NormalGuard]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
