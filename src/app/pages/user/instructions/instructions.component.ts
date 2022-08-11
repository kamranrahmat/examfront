
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private _quiz:QuizService,private _activateRoute:ActivatedRoute,private _route:Router) { }

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
  public startQuiz(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
      showCancelButton: true,
      confirmButtonText: 'Start',
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this._route.navigate(['/quiz-start/'+this.qId ]);
      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
