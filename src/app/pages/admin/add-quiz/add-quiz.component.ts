import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories:any;
  quizdata={
    title:'',
    description:'',
    maxMarks:'',
    active:true,
    numberOfQuestions:'',
    category:{
      cid:null
    }
};
  
  constructor(private _category:CategoryService, private _quiz:QuizService, private _snack:MatSnackBar) { }


  ngOnInit(): void {
    this.fetchCategories();

  }
  private fetchCategories(){
    this._category.categories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(data)
      },
      (error)=>{
        Swal.fire("Error !!",error,"error");
      }
    )
  }
  public addQuiz(){
    if(this.quizdata.title.trim()=='' || this.quizdata.title==null){
      this._snack.open('Title Required','',{duration:4000});
      return;
    }
    if(this.quizdata.description.trim()=='' || this.quizdata.description==null){
      this._snack.open('Description Required','',{duration:4000});
      return;
    }
    if(this.quizdata.maxMarks.trim()=='' || this.quizdata.maxMarks==null){
      this._snack.open('Max Marks Required','',{duration:4000});
      return;
    }
    if(this.quizdata.numberOfQuestions.trim()=='' || this.quizdata.numberOfQuestions==null){
      this._snack.open('Number Of Questions Required','',{duration:4000});
      return;
    }
    if(this.quizdata.category.cid=='' || this.quizdata.category.cid==null){
      this._snack.open('Select Category','',{duration:4000});
      return;
    }
    this._quiz.addQuiz(this.quizdata).subscribe(
      (data:any)=>{
        Swal.fire('Success','Quiz Added Successfully','success');

        this.quizdata={
          title:'',
          description:'',
          maxMarks:'',
          active:true,
          numberOfQuestions:'',
          category:{
            cid:null
          }
      };
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error in adding quiz !!",error,"error");
      }
    );
  }

}
