import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  quizzes:any;
  constructor(
    private _quiz:QuizService,
    private _snack:MatSnackBar,
    private activateRouter:ActivatedRoute
    ) { }

  ngOnInit(): void {
    var category_id:number= this.activateRouter.snapshot.params['cat_id'];
    if(category_id==0){
      this.loadallQuiz();
    }else{

    }
  }
  public loadallQuiz(){
    this._quiz.getAllQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
      },
      (error)=>{
        console.log(error);
        this._snack.open('Error in loading Quiz '+error,'',{duration:4000});
      }
    );
  }

}
