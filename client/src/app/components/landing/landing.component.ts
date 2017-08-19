import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem';
import { LandingProblem } from '../../models/LandingProblem';

import { Answer } from '../../models/answer';
import { People } from '../../models/people';
import { Match } from '../../models/match';

import { Subscription } from 'rxjs/Subscription';

const DEFAULT_PEOPLE: People = Object.freeze({
    id: 9999,
    name: '',
    age: 0,
    img: '',  
    desc: '',
    answers: '',
    status: true,
    state: []
});

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


  newPeople: People = Object.assign({}, DEFAULT_PEOPLE);
  difficulties: string[] = ['friend', 'short term', 'long term', 'marriage'];

  problems: LandingProblem[];
  answerArray: Answer[];
  aArray = {};
  choices: number[] = [1,2,3];

  subscriptionProblem = Subscription;
  constructor(@Inject('data') private data) { }

  ngOnInit() {
    this.getProblems();
  }

  initAnswers(): void {
    this.answerArray = [];
    for(let problem of this.problems) {
      let ans = new Answer();
      ans.id = problem.id;
      ans.name = problem.name;
      ans.type = '';
      ans.choice = 3;
      this.answerArray.push(ans);
      // this.answerArray[problem.id] = 3;
    }
    console.log(this.answerArray);
  }

  getProblems(): void {
    // this.problems = this.data.getProblems();
    // this.subscriptionProblem = this.data.getProblems()
    // .subscribe(problems => {this.problems = problems; this.initAnswers();} );

    this.problems = [];
    this.problems.push({
      id: 1,
      name: "Important Problem1."
    });
    this.problems.push({
      id: 2,
      name: "Important Problem2."
    });
    this.problems.push({
      id: 3,
      name: "Important Problem3."
    });
    console.log(this.problems);
    this.initAnswers();
  }

  addPeople(): void {
    // this.data.addProblem(this.newPeople)
    // .catch(error=>console.log(error));
    // this.newPeople = Object.assign({},DEFAULT_People);
  }

}
