import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { Member } from './models/Member';

type Event = {
  date: string;
  plan: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'capstone';

  

  events: Event[] = [{
    date: "June 24, 2022",
    plan: "Camping at Sycamore Hills 6pm",
  }];

  constructor() { }

  ngOnInit(): void {  }
}
