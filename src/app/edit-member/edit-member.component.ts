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


  constructor(private member: MemberService) { }


  ngOnInit(): void { }


  updateMember(updateMember: Member) {
    this.member.updateMember(updateMember)
  }

}
