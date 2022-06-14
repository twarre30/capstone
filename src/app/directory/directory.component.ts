import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/Member';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})



export class DirectoryComponent implements OnInit {

  members: Member[] = [];


  constructor(private memberService: MemberService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.memberService.fetchMembers().subscribe(response => {
      this.members = response.members
    })
  }

  addMemeber() {
    this.router.navigate(['/member-form']), {relativeTo: this.route}
  }

}
