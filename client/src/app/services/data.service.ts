import { Injectable } from '@angular/core';
import { Problem } from '../models/problem';
import { People } from '../models/People';
import { PROBLEMS } from '../mock-problems';
import { PEOPLES } from '../mock-peoples';
// import { Peoples } from '../mock-peoples';

import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  // problems: Problem[] = PROBLEMS;
  // peoples: People[] = PEOPLES;

  private _problemSource = new BehaviorSubject<Problem[]>([]);
  private _peopleSource = new BehaviorSubject<People[]>([]);

  constructor(private http:Http) { }

  // getProblems(): Problem[] {
  //   console.log(this.problems);
  //   return this.problems;
  // }

  getProblems(): Observable<Problem[]> {
    this.http.get('api/v1/problems')
    .toPromise()
    .then((res: Response) => {
      console.log(res);
      this._problemSource.next(res.json());
    })
    .catch(this.handleError);
    return this._problemSource.asObservable();
  }

   getPeoples(): Observable<People[]> {
    this.http.get('api/v1/peoples')
    .toPromise()
    .then((res: Response) => {
      console.log(res);
      this._peopleSource.next(res.json());
    })
    .catch(this.handleError);
    return this._peopleSource.asObservable();
  }

  getPeople(id: number): Promise<People> {
    // return PROBLEMS.find((problem) => problem.id === id );
    //return this.problems.find((problem) => problem.id === id );
    return this.http.get(`api/v1/peoples/${id}`)
      .toPromise()
      .then((res:Response) => res.json())
      .catch(this.handleError);
  }

  // getProblem(id: number): Problem {
  //   return this.problems.find( (problem) => (problem.id === id) );
  // }

  // getPeople(id: number): People {
  //   return this.peoples.find( (people) => (people.id === id) );
  // }

  // getPeoples(): People[] {
  //   console.log(this.peoples);
  //   return this.peoples;
  // }

  private handleError(error:any): Promise<any> {
    console.log('An error happened', error);
    return Promise.reject(error.body||error);
  }

}
