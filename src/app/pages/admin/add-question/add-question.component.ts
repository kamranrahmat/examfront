import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId:any=undefined
  qTitle:string='';
  question={
    quiz:{
      qId:this.qId
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }
  constructor(private activatedRoute:ActivatedRoute,private _question:QuestionService,private _snack:MatSnackBar) { }



  ngOnInit(): void {
    this.qId=this.activatedRoute.snapshot.params['qid'];
    this.question.quiz['qId']=this.qId;
    this.qTitle=this.activatedRoute.snapshot.params['title'];
  }

  public submitform(){
    this._question.addQuestion(this.question).subscribe(
      (data:any)=>{
        this.question.answer='';
        this.question.content='';
        this.question.option1='';
        this.question.option2='';
        this.question.option3='';
        this.question.option4='';
        Swal.fire('Success !!','Question addedd successfully','success');
      },
      (error)=>{
        Swal.fire('error !!',error,'error');
        console.log(error);
      }
    );
  }
}
