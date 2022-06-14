import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {
  @Input() date!: string;
  @Input() plan!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
