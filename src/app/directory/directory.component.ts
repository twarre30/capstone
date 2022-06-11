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

  constructor() { }

  ngOnInit(): void {
  }

}
