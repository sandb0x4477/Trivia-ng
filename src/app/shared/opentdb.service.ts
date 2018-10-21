import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Question } from './question.model';
import { Query } from './query.model';
import { map } from 'rxjs/operators';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class OpentdbService {
  query: Query = new Query();

  opentdbUrl = 'https://opentdb.com/api.php?amount=';
  // private params = `${this.query.numberOfQuests}&category=
  // ${this.query.category}&difficulty=${this.query.difficulty}&type=${
  //   this.query.type
  // }`;

  // URL to web api https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple

  constructor(private http: HttpClient) { }

  getQuestions(q: Query): Observable<Question[]> {
    const url = `${ this.opentdbUrl }${ q.numberOfQuests }&category=${
      q.category
      }&difficulty=${ q.difficulty }&type=${ q.type }`;
    // console.log(url);

    return this.http.get<Question[]>(url);
  }
}
