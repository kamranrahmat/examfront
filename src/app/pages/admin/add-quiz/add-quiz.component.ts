import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
  
  constructor(private _category:CategoryService) { }


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
    
  }

}
