import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent  {
  @Input() date!: string;
  @Input() plan!: string;
}
