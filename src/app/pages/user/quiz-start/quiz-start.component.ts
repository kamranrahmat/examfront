import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit {
 qId:any
 makrsGot=0;
 correctAnswer=0;
 attempted=0;
 isSubmit=false;

 questions:any;
  constructor(
    private locationSt:LocationStrategy,
    private activatedRoute:ActivatedRoute,
    private questionService:QuestionService
    ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qId=this.activatedRoute.snapshot.params['qId'];
    this.loadQuestion(this.qId);
  }
  public loadQuestion(quizId:number){
    this.questionService.getAllQuestionOfQuizForExam(quizId).subscribe(
      (data:any)=>{
        console.log("questions are")
        console.log(data);
        this.questions=data;
        this.questions.forEach((q:any)=>{
          q['givenAnswer']='  ';
        })
        console.log(this.questions);
      },
      (error)=>{
        Swal.fire('Error in loading question',error,'error');
      }
    );
  }
public preventBackButton(){
  history.pushState(null,'',location.href);
  this.locationSt.onPopState(()=>{
    history.pushState(null,'',location.href);
  })
}

submitQuiz(){
  Swal.fire({
    title: 'Do you want to submit the quiz?',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    denyButtonText:'Dont Save',
    icon:'info'
  }).then((e)=>{
    if(e.isConfirmed){
      this.isSubmit=true;
      this.questions.forEach((q:any)=>{
        if(q.givenAnswer==q.answer){
          this.correctAnswer++;
          let markSingle=q.quiz.maxMarks / this.questions.length;
          this.makrsGot +=markSingle;
        }

        if(q.givenAnswer.trim()!=''){
          this.attempted++;
        }
      });
    }
  })
}
}
