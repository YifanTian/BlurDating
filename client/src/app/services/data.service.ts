import { Injectable } from '@angular/core';
import { Problem } from '../models/problem';
import { People } from '../models/People';
import { PROBLEMS } from '../mock-problems';
import { PEOPLES } from '../mock-peoples';
// import { Peoples } from '../mock-peoples';

@Injectable()
export class DataService {

  problems: Problem[] = PROBLEMS;
  peoples: People[] = PEOPLES;
  constructor() { }

  getProblems(): Problem[] {
    console.log(this.problems);
    return this.problems;
  }

  getProblem(id: number): Problem {
    return this.problems.find( (problem) => (problem.id === id) );
  }

  getPeoples(): People[] {
    console.log(this.peoples);
    return this.peoples;
  }

}
