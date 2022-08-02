import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  paramqId=undefined;
  quiz:any;
  categories:any;
  constructor(private _activeRoute:ActivatedRoute,private _quiz:QuizService,private _category:CategoryService ,private router:Router) { }

  ngOnInit(): void {
    this.paramqId=this._activeRoute.snapshot.params['qId'];
    this.loadQuizData(this.paramqId);
    this.loadAllCategories();
  }
  loadQuizData(qId:any){
    this._quiz.getSingleQuiz(qId).subscribe(
      (data:any)=>{
        this.quiz=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error in loading quiz!! data',error,'error');
      }
    );
  }

  loadAllCategories(){
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error in loading all categories',error,'error');
      }
    );
  }
  public updateQuiz(){
    //apply validation according to your case
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data:any)=>{
        Swal.fire('Success !!','Quiz updated successfully','success').then((result)=>{
          this.router.navigate(['/admin/quizzes']);
        })
      },
      (error)=>{
        Swal.fire('Error in Updating Quiz',error,'error');
      }
    );
  }

}
