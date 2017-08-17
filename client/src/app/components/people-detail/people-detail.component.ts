import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { People } from '../../models/People';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  people: People;
  constructor(private route: ActivatedRoute,
  @Inject('data') private data) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.data.getPeople(+params['id'])
      .then(people => this.people = people);
      // this.people = this.data.getPeople(+params['id']);
    });
  }

}
