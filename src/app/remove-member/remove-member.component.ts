import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';

@Component({
  selector: 'app-remove-member',
  templateUrl: './remove-member.component.html',
  styleUrls: ['./remove-member.component.css'],

  template: `
    Id: <input type="text" [(ngModel)] = "id" >
`
})
export class RemoveMemberComponent implements OnInit {


  constructor(private memberService: MemberService) { }


  ngOnInit(): void { }


@ViewChild('removeMemberForm') removeMemberForm: any;
  deleteMember(deleteMember: Member) {
    this.memberService.deleteMember(deleteMember);
    this.removeMemberForm.reset();
  }


}
