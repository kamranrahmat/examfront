import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  paramqId=undefined;
  paramtitle=null;
  constructor(private _activeRoute:ActivatedRoute,private _quiz:QuizService) { }
  
  ngOnInit(): void {
    this.paramqId=this._activeRoute.snapshot.params['id'];
    this.paramtitle=this._activeRoute.snapshot.params['title'];
  }

  

}
