import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any;
  constructor(private _quizService:QuizService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.loadAllQuiz();
  }
  private loadAllQuiz(){
    this._quizService.getAllQuizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(data);
      },
      (error)=>{
        Swal.fire("Error !","Error in loading data !","error");
        console.log(error);
      }
    )
  }

}
