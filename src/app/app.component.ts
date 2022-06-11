import { Component, OnInit } from '@angular/core';
import { MemberService } from './member.service';
import { Member } from './models/Member';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'capstone';

  members: Member[] = []

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.fetchMembers().subscribe(response => {
      this.members = response.members
    })
  }
}
