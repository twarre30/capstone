import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],

  template: `
    Id: <input type="text" [(ngModel)] = "id" >
    ParentName: <input type="text" [(ngModel)] = "parentName" >
    DaughterName: <input type="text" [(ngModel)]= "daughterName" >
    Address: <input type="text" [(ngModel)] = "address" >
    Email: <input type="text" [(ngModel)]= "email" >
    PhoneNumber: <input type="text" [(ngModel)]= "phoneNumber" >
`
})
export class MemberFormComponent implements OnInit {


  members: Member[] = []

  constructor(private memberService: MemberService) { }


  ngOnInit(): void {}


  addMember(newMember: Member) {
    this.memberService.addMember(newMember).subscribe(response => {
      this.members = [response.member, ...this.members]
    })
  }
}



