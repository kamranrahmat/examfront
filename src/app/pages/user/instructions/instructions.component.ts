
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  quiz:any;
  qId:any;
  constructor(private _quiz:QuizService,private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.qId=this._activateRoute.snapshot.params['qId'];
    this._quiz.getSingleQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz=data;
      },
      (error)=>{
        Swal.fire('Error',error,'error');
        console.log(error);
      }


    );
  }

}
