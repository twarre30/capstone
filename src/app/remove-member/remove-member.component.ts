import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';

@Component({
  selector: 'app-remove-member',
  templateUrl: './remove-member.component.html',
  styleUrls: ['./remove-member.component.css'],

  template: `
    ParentName: <input type="text" [(ngModel)] = "parentName" >
    DaughterName: <input type="text" [(ngModel)]= "daughterName" >
    Address: <input type="text" [(ngModel)] = "address" >
    Email: <input type="text" [(ngModel)]= "email" >
    PhoneNumber: <input type="text" [(ngModel)]= "phoneNumber" >
`
})
export class EditMemberComponent implements OnInit {


  members: Member[] = []

  constructor(private memberService: MemberService) { }


  ngOnInit(): void { }



  deleteMember(deleteMember: Member) {
    this.memberService.deleteMember(deleteMember).subscribe(response => {
      this.members = [response.member]
    })
  }

}
