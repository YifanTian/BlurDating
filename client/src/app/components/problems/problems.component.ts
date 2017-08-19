import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem';
import { Answer } from '../../models/answer';
import { People } from '../../models/people';
import { Match } from '../../models/match';

import { Subscription } from 'rxjs/Subscription';

class Type {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
}

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  allproblems: Problem[];
  shuffleProblems: Problem[];
  problems: Problem[];
  answerArray: Answer[];
  aArray = {};
  choices: number[] = [1,2,3];
  question_choice: number[];
  questionType: Type;

  numfavs = 0;
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

  shuffle(a):void {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
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
      match.status = people.status;
      console.log(people);
      // for(let state of people.state) {
      //   console.log(state);
      // }
      console.log(people.state);
      match.state = people.state;
      console.log(match.state);
      this.matchArray.push(match);
      // this.answerArray[problem.id] = 3;
    }
    // console.log(this.answerArray);
  }

  pin(match:Match):void {
    // console.log(match.id + " pinned "+ match.fav);
    match.fav = !match.fav;
    match.fav == true? this.numfavs++ : this.numfavs--;
    console.log(this.numfavs);
  }

  getProblems(): void {

    this.questionType = new Type();
    this.questionType[0] = 1;
    this.questionType[1] = 0;
    this.questionType[2] = 0;
    this.questionType[3] = 0;
    this.questionType[4] = 0;

    this.question_choice = [0];

    // this.problems = this.data.getProblems();
    this.subscriptionProblem = this.data.getProblems()
    .subscribe(problems => {this.allproblems = problems; 
      this.shuffleProblems = this.allproblems;
      this.shuffle(this.shuffleProblems);
      this.problems = this.shuffleProblems.slice(0,5);
      this.initAnswers();} );
  }

  selectCategory(id): void {
    console.log(this.question_choice);
    if(id == 0) {
      this.questionType[1] = 0;
      this.questionType[2] = 0;
      this.questionType[3] = 0;
      this.questionType[4] = 0;
      this.questionType[5] = 0;

      var index = this.question_choice.indexOf(id);
      if (index < 0){
        this.question_choice = [0];
      }  else {
        this.question_choice.splice(index,1);
      }

    } else {
      this.questionType[0] = 0;

        var index0 = this.question_choice.indexOf(0);
        if (index0 > -1) {
            this.question_choice.splice(index0,1);
        }
        var index = this.question_choice.indexOf(id);
        if (index < 0){
          this.question_choice.push(id);
        } else {
          this.question_choice.splice(index,1);
        }
      }

      this.problems = this.allproblems.filter( (problem) => ( this.question_choice.indexOf(problem.typeid)>=0) );
      console.log(this.problems);
      if(this.problems.length === 0) {
        this.shuffle(this.shuffleProblems);
        this.problems = this.shuffleProblems.slice(0,5);
      }
      console.log(this.question_choice);
      console.log(this.problems);
      this.initAnswers();
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
