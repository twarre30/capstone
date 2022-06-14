import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-member-listing',
  templateUrl: './member-listing.component.html',
  styleUrls: ['./member-listing.component.css']
})
export class MemberListingComponent implements OnInit {
  @Input() id!: number;
  @Input() parentName!: string;
  @Input() daughterName!: string;
  @Input() address?: string;
  @Input() email?: string;
  @Input() phoneNumber?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
