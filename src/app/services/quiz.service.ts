  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }
  
  public getAllQuizzes(){
   return this._http.get(`${baseUrl}/quiz/`);
  }
  public addQuiz(quiz:object){
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }
}
