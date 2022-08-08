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
  public dateleteQuiz(qId:number){
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }
  public getSingleQuiz(qId:number){
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }
  public updateQuiz(quiz:object){
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }
  public getQuizzesOfCategory(categoryId:number){
   return this._http.get(`${baseUrl}/quiz/category/${categoryId}`);
  }

  public getActiveQuizzesOfCategory(categoryId:number){
    return this._http.get(`${baseUrl}/quiz/category/active/${categoryId}`);
   }
   public getAllActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`);
   }
}
