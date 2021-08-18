import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  @Input() ProfileList:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
