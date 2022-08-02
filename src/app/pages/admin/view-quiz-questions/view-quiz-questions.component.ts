import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  paramqId=undefined;
  paramtitle=null;
  questions:any;
  constructor(private _activeRoute:ActivatedRoute,private _questionService:QuestionService) { }
  
  ngOnInit(): void {
    this.paramqId=this._activeRoute.snapshot.params['id'];
    this.paramtitle=this._activeRoute.snapshot.params['title'];
    this.loadAllQuestionsOfQuiz(this.paramqId);
  }

  public loadAllQuestionsOfQuiz(quizId:any){
    this._questionService.getAllQuestionOfQuiz(quizId).subscribe(
      (data:any)=>{
        this.questions=data;
        console.log(this.questions);
      },
      (error)=>{
        Swal.fire('Error in Loading Questions',error,'error');
        console.log(error);
      }
    );

  }


}
