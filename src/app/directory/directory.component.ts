import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  @Input() parentName!: string;
  @Input() daughterName!: string;
  @Input() address?: string;
  @Input() email?: string;
  @Input() phoneNumber?: string;

  headers = ["Parent Name", "Daughter Name", "Address", "Email", "Phone Number"];

  rows = [{
    "parentName": "Mary",
    "daughterName": "Suzy",
    "address": "123 Main St",
    "email": "mary@gmail.com",
    "phoneNumber": "555-253-4512"
  }, {
    "parentName": "Jane",
    "daughterName": "Brenda",
    "address": "567 Main St",
    "email": "jane@gmail.com",
    "phoneNumber": "555-451-2575"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
