import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem';
import { Answer } from '../../models/answer';
import { People } from '../../models/people';
import { Match } from '../../models/match';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  problems: Problem[];
  answerArray: Answer[];
  aArray = {};
  choices: number[] = [1,2,3];

  peoples: People[];
  matchArray: Match[];

  subscriptionProblem = Subscription;
  subscriptionPeople = Subscription;
  constructor(@Inject('data') private data) { }

  ngOnInit() {
    this.getProblems();
    // this.initAnswers();
    this.getPeoples();
    // this.initMatches();
  }

  sortMatchesByAge(order: number) {

    const dict = {};
    dict['easy'] = 1;
    dict['medium'] = 2;
    dict['hard'] = 3;
    dict['super'] = 4;

    function compare1(a, b) {
      if (a.age < b.age)
        return -1;
      if (a.age > b.age)
        return 1;
      return 0;
    }
    
    function compare2(a, b) {
      if (a.age > b.age)
        return -1;
      if (a.age < b.age)
        return 1;
      return 0;
    }

     order === 1 ? this.matchArray.sort(compare1) : this.matchArray.sort(compare2);
  }

  selectEntity(id:number,choice:number):void {
    this.aArray[id] = choice;
      for(let match of this.matchArray)
      {
        match.weight = 0;
        // console.log(match.id+" "+match.answers[id]);
      }

    for(let match of this.matchArray)
    {
      for(let question in this.aArray)
      {
        if(this.aArray[question] !== 3) {
          if(question in match.answers)                           // he or she has anwered this question
          {
            // console.log("find a match " + question + " " + match.id + " " + match.answers[question]);
            match.weight += this.aArray[question] === match.answers[question]? 1:-1;
          }
        }
      }
    }
    this.matchArray.sort((a,b) => { return b.weight-a.weight; });
  }

  initAnswers(): void {
    this.answerArray = [];
    for(let problem of this.problems) {
      let ans = new Answer();
      ans.id = problem.id;
      ans.name = problem.name;
      ans.type = problem.type;
      ans.choice = 3;
      this.answerArray.push(ans);
      // this.answerArray[problem.id] = 3;
    }
    // console.log(this.answerArray);
  }

  initMatches(): void {
    this.matchArray = [];
    for(let people of this.peoples) {
      let match = new Match();
      match.id = people.id;
      match.answers = people.answers
      // ans.id = problem.id;
      match.name = people.name;
      match.age = people.age;
      match.img = people.img;
      match.weight = 0;
      match.fav = false;
      this.matchArray.push(match);
      // this.answerArray[problem.id] = 3;
    }
    // console.log(this.answerArray);
  }

  pin(match:Match):void {
    // console.log(match.id + " pinned "+ match.fav);
    match.fav = !match.fav;
    // console.log(match.fav);
  }

  getProblems(): void {
    // this.problems = this.data.getProblems();
    this.subscriptionProblem = this.data.getProblems()
    .subscribe(problems => {this.problems = problems; this.initAnswers();} );
  }

  // getProblems(): void {
  //   // this.problems = this.dataService.getProblems();
  //   this.subscriptionProblem = this.data.getProblems()
  //   .subscribe(problems => this.problems = problems);
  // }

  getPeoples(): void {
    // this.peoples = this.data.getPeoples();
    this.subscriptionPeople = this.data.getPeoples()
    .subscribe(peoples => {this.peoples = peoples; this.initMatches();});
    // console.log(this.peoples);
  }

  // getChoice(id:number,choice:number): void {
  //   let ChosenProblem = this.problems.find( (problem) => (problem.id === id) );
  //     this.answerArray[id] = choice;
  //     console.log(this.answerArray);
  // }

  openNav():void  {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav():void {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

}
