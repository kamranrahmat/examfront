import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  categories=[{
    cid:1,
    title:'test'
  },
  {
    cid:2,
    title:'test2'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
