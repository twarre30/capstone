import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})



export class DirectoryComponent implements OnInit {

  members: Member[] = [];


  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.memberService.fetchMembers().subscribe(response => {
      this.members = response.members
    })
  }

}
