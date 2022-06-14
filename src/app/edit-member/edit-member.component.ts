import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],

  template: `
    Id: <input type="text" [(ngModel)] = "id" >
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



  updateMember(updateMember: Member) {
    this.memberService.updateMember(updateMember).subscribe(response => {
      this.members = [response.member]
    })
  }
}
