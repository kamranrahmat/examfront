import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.qId=this.activatedRoute.snapshot.params['qid'];
    this.question.quiz['qId']=this.qId;
    this.qTitle=this.activatedRoute.snapshot.params['title'];
  }

}
